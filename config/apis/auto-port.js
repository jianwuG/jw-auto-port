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
            const result = await axios.get(api.swaggerUrl) //真实请求swaggerUrl地址
            const data = result.data
            // const data = api.swaggerUrl  // 当前项目本地文件演示
            parseData(data, api.outputDir)
        }
    })
}

/**
 * 处理paths对象
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
        else {
            apiOptions[belongModule].push(apiInfo)
        }
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
 * 解析swagger
 * @param {*} swaggerJson 
 * @param {*} dirname 
 */
const parseData = (swaggerJson, dirname) => {

    const paths = handlePath(swaggerJson.paths)
    console.log('paths', JSON.stringify(paths))

}

createApi()