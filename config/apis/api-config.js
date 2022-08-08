const next = require('../../mock/next')

module.exports = {
    serviceTemplate: `import http from "./../../http"
    import { AxiosPromise, AxiosRequestConfig } from 'axios';
    `,
    outputDir: '/src/common/api',
    apiList: [
        {
            swaggerUrl: next,
            outputDir: '/src/common/api/next',
            isCreate: true,
        },
    ],
}