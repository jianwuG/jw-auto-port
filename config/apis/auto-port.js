const apiConfig = require('./api-config')
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
function checkOutputDirExit() {
    mkdir(path.resolve(process.cwd() + apiConfig.outputDir))
}

checkOutputDirExit();