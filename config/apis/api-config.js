const next = require('../../mock/next')

module.exports = {
    outputDir: '/src/common/api',
    apiList: [
        {
            swaggerUrl: next,
            outputDir: '/src/common/api/next',
            isCreate: true,
        },
    ],
}