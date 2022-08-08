const apiConfig = require('./api-config')
const axios = require('axios')
const fs = require('fs')
const path = require('path')

/**
 * 创建文件
 * @param {*} dirname 
 * @returns 
 */
const mkdir = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true
    }
    else {
        // 去掉文件名，返回目录 path.dirname ,当存在目录开始进行mkdirSync
        if (mkdir(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

/**
 * mkdirSync 创建目录要一层一层创建
 */
const checkOutputDirExit = () => {
    mkdir(path.resolve(process.cwd() + apiConfig.outputDir))
}
/**
 * 获取swaggerJSON生成api
 */
const createApi = () => {
    checkOutputDirExit()
    apiConfig.apiList.forEach(async api => {
        if (api.isCreate) {
            try {
                ////真实请求swaggerUrl地址
                // const result = await axios.get(api.swaggerUrl)
                // const data = result.data

                // 当前项目本地文件演示
                const data = api.swaggerUrl
                parseData(data, api.outputDir)
            } catch (err) {
                console.log(err)
            }
        }
    })
}

/**
 * 处理paths对象,生成基本机构的JSON对象
 * @param {*} path 
 */
const handlePath = (path) => {
    let apiOptions = {};
    const apiPaths = Object.keys(path)
    apiPaths && apiPaths.forEach(apiItem => {
        const apiInfo = {
            name: apiItem.split('/').pop(),
            method: path[apiItem].get ? 'get' : 'post',
            url: apiItem,
            summary: '',
            params: '',
            returnData: {
                type: '',
                originType: '',
                simpleType: true,
            },
        }
        const apiInfoBody = path[apiItem][apiInfo.method]
        apiInfo.summary = apiInfoBody.summary
        apiInfo.params = apiInfoBody.parameters ? getParams(apiInfoBody.parameters) : []
        apiInfo.returnData = getResponses(apiInfoBody.responses)
        //分模块
        const belongModule = getBelong(apiInfoBody.tags)

        if (!apiOptions[belongModule]) {
            apiOptions[belongModule] = []
        }
        apiOptions[belongModule].push(apiInfo)
    })
    return apiOptions
}
/** 获取所属模块名 */
const getBelong = (str) => {
    if (str.length === 0) {
        throw new Error('无所属模块')
    } else {
        return str[0]
    }
}

/**
 * 获取api params
 * @param {*} params 
 */
const getParams = (params) => {
    const arr = []
    params.forEach(paramsItem => {
        if (['formData', 'query', 'body'].includes(paramsItem.in)) {
            const _item = {
                name: paramsItem.name,
                desc: paramsItem.description || '描述缺失',
                type: null, //类型
                originType: null, //源类型
                required: paramsItem.schema ? true : paramsItem.required,
                simpleType: paramsItem.schema ? false : true, //是否基础类型
            }

            //处理paths中
            if (paramsItem.schema) {
                const _schema = paramsItem.schema
                _schema.$ref = _schema.$ref && splitRealType(_schema.$ref)
                _schema.originType = _schema.originType && splitRealType(_schema.originType)
                _item.originType = _schema || paramsItem.type
            }


            _item.type = paramsItem.schema
                ? getRealType(paramsItem.schema)
                : paramsItem.format == 'int64'
                    ? 'string'
                    : toTypescriptType(paramsItem.type)

            arr.push(_item)
        }
    })

    return arr
}
/**
 * java类型转ts 类型
 * @param {*} type 
 */
const toTypescriptType = (type) => {
    return {
        integer: 'number',
        string: 'string',
        boolean: 'boolean',
        number: 'number',
        array: '[]',
        object: 'object',
        Int64: 'string ',
        Int32: 'number',
        String: 'string',
        Date: 'string',
        Boolean: 'boolean',
        Object: 'object',
    }[type]
}


/**
 * 
 * @param {*} schema 
 */
const getRealType = (schema) => {
    if (schema) {
        return splitRealType(schema.originalRef || schema.$ref?.split('#/definitions/')[1])
    } else {
        return 'any'
    }
}

/**
 *  const _name = name.split("«")[0]// 处理类 SimpleResponse«List«ChannelFeeConfigDto»»  => SimpleResponseListChannelFeeConfigDto
 * @param {*} name 
 * @returns 
 */
const splitRealType = (name) => {
    if (!name) {
        return ''
    }
    return name?.split('«').join('').split('»').reduce((a, b) => { return `${a}${b}` })
}


/**
 * 获取返回data
 * @param {*} responses 
 * @returns 
 */
const getResponses = (responses) => {
    const res = responses['200']
    if (res.schema) {
        const _item = {
            type: null,
            originType: res.schema,
            simpleType: false,
        }
        _item.type = getRealType(res.schema)
        return _item
    } else {
        return {
            type: res.type,
            originType: res.type,
            simpleType: false,
        }
    }
}

/**
 * 处理definitions
 * @param {*} definitions 
 */
const handleDefinitions = (definitions) => {
    const typeMap = {}
    const apiDefinitions = Object.keys(definitions)
    const _enumMap = []
    apiDefinitions.map(definitionsKey => {
        const definitionsItem = definitions[definitionsKey]
        const { title, type, description, properties } = definitionsItem
        if (properties) {
            const { propertyArr, enumInfo } = getPropertyAndEnumInfo(properties)
            typeMap[title] = {
                name: title,
                type: type,
                description: description || '缺少注释',
                property: properties ? propertyArr : []
            }
            if (isEmptyObj(enumInfo)) {
                // 重复枚举去重
                const check = _enumMap.every(item => Object.keys(item)[0] !== Object.keys(enumInfo)[0])
                if (check) {
                    _enumMap.push(enumInfo)
                }

            }
        }
    })
    return { typeMap, _enumMap }
}

/**
 * 处理获取typeMap中的properties 和枚举Info
 * @param {*} properties 
 * @returns 
 */
const getPropertyAndEnumInfo = (properties) => {
    const propertyArr = []

    let enumInfo = {}
    const propertyInfo = Object.keys(properties)
    propertyInfo.forEach(propertyKey => {
        const _item = properties[propertyKey]
        const { type, format, description, items } = _item;
        const propertyItem = {
            name: propertyKey,
            type: format == 'int64'
                ? 'string'
                : toTypescriptType(type),
            description: description || '注释丢失',
        }
        propertyArr.push(propertyItem)
        if (_item.enum) {
            enumInfo[`${propertyKey}Enum`] = _item.enum
        }
    })
    return { propertyArr, enumInfo }
}
/**
 * 生成EnumCode
 * @param {*} enumMap 
 */
const generateEnumCode = (enumMap) => {
    const enumCodeArr = []
    enumMap.forEach(enumItem => {
        const key = Object.keys(enumItem)[0]
        enumCodeArr.push(` export enum ${key} {
            ${enumItem[key].join(',\n')}
        }`)
    })
    return enumCodeArr.join('\n')
}
/**
 * 生成typeCode 引入enum.ts
 * @param {*} typeCode 
 * @param {*} enumMap 
 * @returns 
 */
const generateTypeCode = (typeCode, enumMap) => {
    const typeCodeArr = []
    const typeCodeData = Object.keys(typeCode)
    typeCodeData.forEach(typeCodeDataKey => {
        const _item = typeCode[typeCodeDataKey]

        const { property, description, name } = _item

        const _name = splitRealType(name)
        typeCodeArr.push(`/** ${description} **/
        export interface ${_name} {
        ${property.map(propertyItem => {
            const { name, type, description } = propertyItem
            let _type = type

            // 替换枚举类型
            const check = enumMap.find(enumMapItem => Object.keys(enumMapItem)[0] === `${name}Enum`)
            if (check) {
                _type = `${name}Enum`
            }
            return `${name}:${_type}, //${description}`
        }).join('\n')}
        }`)
    })


    // 引入enum.ts文件
    const usedEnum = []
    enumMap.forEach(enumMapItem => {
        const type = Object.keys(enumMapItem)[0]
        if (!usedEnum.includes(type)) {
            usedEnum.push(type)
        }
    })

    if (usedEnum.length) {
        typeCodeArr.unshift(`
        import {${usedEnum.join(',')}} from './enum'
        `)
    }
    return typeCodeArr.join('\n')
}

/**
 * 写入文件
 * @param {*} name 
 * @param {*} data 
 * @param {*} dirname 
 */
const writeFile = (name, data, dirname) => {
    const _path = process.cwd() + dirname
    mkdir(_path)
    const filePath = path.resolve(_path, `${name}.ts`)
    fs.writeFileSync(filePath, data)
}
/**
 * 判断是否空对象
 * @param {*} obj 
 * @returns 
 */
const isEmptyObj = (obj) => {
    for (let item in obj) {
        return true
    }
    return false
}
/**
 * 生成API文件
 * @param {*} paths 
 * @param {*} typeMap 
 * @param {*} enumMap 
 */
const generateApiType = (paths, typeMap, enumMap) => {
    const apiCodes = {}
    Object.keys(paths).forEach(path => {
        const apiText = []
        const usedType = []
        const usedEnum = [] //暂时没有
        const moduleApiData = paths[path]

        moduleApiData.forEach(api => {
            const { summary, name, method, url, returnData, params } = api
            const endParam = [...api.params]
            const typeCodeData = Object.keys(typeMap)
            endParam.push({
                name: 'options',
                type: 'AxiosRequestConfig | undefined',
                required: false,
                desc: '',
                originType: '',
                simpleType: false,
            })
            api.params.forEach(param => {
                if (!param?.simpleType) {
                    usedType.push(param.type)
                }
            })

            if (!returnData?.simpleType) {
                usedType.push(returnData.type)
            }

            let paramToken = ''
            paramToken = `${params
                .map(paramsItem => {
                    return paramsItem.name
                })
                .join(',')}`
            if (method === 'get') {
                if (paramToken) {
                    paramToken = `,{params:{${paramToken}},...options}`
                } else {
                    paramToken = `,{...options}`
                }
            }
            else if (method === 'post') {
                if (params.length === 1) {
                    paramToken = params[0].simpleType ? `,{${params[0].name},options}` : `,${params[0].name},options`
                } else {
                    paramToken = `,{${paramToken}},options`
                }
            }
            const _name = /^.*[A-Z]+.*/.test(name) ? name : url.split('/').reduce((pre, next) => `${pre}${titleCase(next)}`)   //存在同名的，一般是单个单词的
            apiText.push(`
                /** ${summary} */
                export const ${_name} =(${endParam
                    .map(a => `${a.name}${a.name == 'options' ? '?' : ''}:${a.type}`)
                    .join(',')}): AxiosPromise<${returnData.type || null}> => {
                    return http.${method}('${url}'${paramToken})
            }`)

        })


        const _usedType = []
        usedType.forEach(usedTypeItem => {
            if (!_usedType.includes(usedTypeItem) && !!usedTypeItem) {
                _usedType.push(usedTypeItem)
            }
        })

        if (_usedType.length) {
            apiText.unshift(`
        import {${_usedType.join(',')}} from './type'
        `)
        }
        apiText.unshift(apiConfig.serviceTemplate)
        apiCodes[path] = apiText.join('\n')
    })
    return apiCodes
}

/**
 * 单词首字母大写
 * @param {*} str 
 * @returns 
 */
const titleCase = (str) => {

    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

}
/**
 * 解析swagger
 * @param {*} swaggerJson 
 * @param {*} dirname 
 */
const parseData = (swaggerJson, dirname) => {

    const paths = handlePath(swaggerJson.paths)
    const { typeMap, _enumMap: enumMap } = handleDefinitions(swaggerJson.definitions)
    const enumCode = generateEnumCode(enumMap)
    if (enumCode) {
        writeFile('enum', enumCode, dirname)
    }
    const typeCode = generateTypeCode(typeMap, enumMap)
    if (typeCode) {
        writeFile('type', typeCode, dirname)
    }
    const codes = generateApiType(paths, typeMap, enumMap)
    Object.keys(codes).forEach(key => {
        writeFile(key, codes[key], dirname)
    })
}

createApi()