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

                //// 当前项目本地文件演示
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
                originType: paramsItem.schema ? paramsItem.schema : paramsItem.type, //源类型
                required: paramsItem.schema ? true : paramsItem.required,
                simpleType: paramsItem.schema ? false : true, //是否基础类型
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
        return schema.originalRef || schema.$ref?.split('#/definitions/')[1]
    } else {
        return 'any'
    }

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
        const { propertyArr, enumInfo } = getPropertyAndEnumInfo(properties)
        typeMap[title] = {
            name: title,
            type: type,
            description: description || '缺少注释',
            property: properties ? propertyArr : []
        }
        isEmptyObj(enumInfo) && _enumMap.push(enumInfo)
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
            type: items
                ? getRealType(items)
                : format == 'int64'
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
 * 生成typeCode
 * @param {*} enumMap 
 */
const generateTypeCode = (typeCode) => {
    const typeCodeArr = []
    const typeCodeData = Object.keys(typeCode)
    typeCodeData.forEach(typeCodeDataKey => {
        const _item = typeCode[typeCodeDataKey]

        const { property, description, name } = _item

        const _name = name.split("«")[0]// 处理类 SimpleResponse«boolean»
        typeCodeArr.push(`/** ${description} **/
        export interface ${_name} {
        ${property.map(propertyItem => {
            const { name, type, description } = propertyItem
            return `${name}:${type}, //${description}`
        }).join('\n')}
        }`)
    })
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
    const typeCode = generateTypeCode(typeMap)
    if (typeCode) {
        writeFile('type', typeCode, dirname)
    }
}

createApi()