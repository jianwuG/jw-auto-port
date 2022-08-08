import { productStateEnum } from "./enum";

/** 缺少注释 **/
export interface CreateOrUpdateProductVo {
  displayOriginalPrice: string; //原价（单位：元）
  firstImageUrl: string; //商品头图url
  firstOrderPrice: string; //首单优惠价（单位：元），可不传
  id: string; //商品id，创建时传入0
  imageUrls: []; //商品详情图片url列表，最多5张
  limitAmount: number; //限购数量
  orderNumber: number; //排序号
  productName: string; //商品名称，最长20字符
  productState: productStateEnum; //商品状态，1-下架，2-上架
  unitPrice: string; //单位（单位：元）
}
/** 缺少注释 **/
export interface SimpleResponseboolean {
  data: boolean; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface enumDto {
  key: number; //注释丢失
  value: string; //注释丢失
}
/** 缺少注释 **/
export interface WhitelistEnumsDto {
  applyStateEnums: []; //注释丢失
}
