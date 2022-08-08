var fs = require("fs");
var path = require("path");
const apiConfig = require('./api-config')
let url = process.cwd() + apiConfig.outputDir

const deleteFolderRecursive = (url) => {
    if (fs.existsSync(url)) {
        const files = fs.readdirSync(url)
        files.forEach(function (file, index) {
            var curPath = url + "/" + file;
            if (fs.statSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                // 删除文件
                fs.unlinkSync(curPath);
            }
        });
        //清除文件夹
        fs.rmdirSync(url)
        return true
    }
    else {
        return true
    }
}

deleteFolderRecursive(url)