import http from "./../../http";
import { AxiosPromise, AxiosRequestConfig } from "axios";

import { CreateOrUpdateProductVo, SimpleResponseboolean } from "./type";

/** 创建或编辑商品 */
export const createOrUpdate = (
  vo: CreateOrUpdateProductVo,
  options?: AxiosRequestConfig | undefined
): AxiosPromise<SimpleResponseboolean> => {
  return http.post("/product/createOrUpdate", vo, options);
};
