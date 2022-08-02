import { CodeGenerator, Interface } from 'pont-engine'

export default class MyGenerator extends CodeGenerator {
  /** 获取接口内容的类型定义代码 */
  getInterfaceContentInDeclaration(inter: Interface): string {
    const paramsCode = inter.getParamsCode()
    const bodyParamsCode = inter.getBodyParamsCode()
    const isGetRequest = inter.method.toLocaleLowerCase() === 'get'

    const requestParams = isGetRequest
      ? `params: Params`
      : `params: ${bodyParamsCode}`

    return `
      export ${paramsCode}

      export type Response = ${inter.responseType};
      export const init: Response;
      export function request(${requestParams}): Promise<${inter.responseType}>;
    `
  }

  /** 获取接口实现内容的代码 */
  getInterfaceContent(inter: Interface): string {
    // 根据内部使用习惯修改
    // 目前只存在 query 或 data 的传参方式，不存在两者并存的情况
    const { path } = inter
    // 增加 auth 服务调用逻辑
    const paramsCode = inter.getParamsCode()
    const isGetRequest = inter.method.toLocaleLowerCase() === 'get'

    const requestParamName = isGetRequest ? 'params' : 'data'

    const requestParams = isGetRequest ? `params: Params` : `data: Params`

    return `
      /**
       * @desc ${inter.description}
       */
      import * as defs from '../../baseClass';
      import axios from '@/services/request';

      export ${paramsCode}
      export const init = ${inter.response.getInitialValue()};
      export async function request(${requestParams}): Promise<any> {
        return axios({
           url: '${inter.getDsName()}${path}',
          ${requestParamName},
          method: '${inter.method}',
        });
      }
    `
  }
}
