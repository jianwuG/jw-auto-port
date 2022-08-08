import {
  productStateEnum,
  materialTypeEnum,
  orderStateEnum,
  expressTypeEnum,
  productStateEnumEnum,
} from "./enum";

/** 缺少注释 **/
export interface ActivityListDto {
  activityName: string; //活动名字
  createdAt: string; //创建时间
  id: string; //id
  merchantCount: number; //商户数量
  params: ParamDto; //发送消息的参数
  sendUserName: string; //发送用户名
  url: string; //跳转链接
}
/** 缺少注释 **/
export interface ActivityMessageVo {
  activityName: string; //活动名称
  isTest: boolean; //是否是测试
  merchantNos: undefined; //商户号
  params: ParamVo; //发送消息的参数
  url: string; //消息跳转连接
}
/** 缺少注释 **/
export interface AddKeywordVo {
  endTime: string; //结束时间
  keyword: string; //关键词
  keywordId: string; //关键词序号
  replyContent: string; //文字回复
  replyImageOssUrl: string; //图片回复
  replyType: string; //回复类型
  startTime: string; //开始时间
}
/** 缺少注释 **/
export interface AntInstallmentChangeVo {
  failType: number; //申请失败原因类型：0-自定义原因；1-营业执照不符合要求；2-花呗分期流水未达标
  merchantId: string; //商户id
  reason: string; //失败原因
  status: number; //审核状态(0：未申请、10：审核中、20：开启、30：未通过、40：禁用)
}
/** 花呗提额码商户 **/
export interface AntInstallmentDto {
  applyTime: string; //申请时间(yyyy-MM-dd HH:mm:ss)
  bankType: number; //商户类型
  businessLicenseImgUrl: string; //营业执照照片url
  failType: number; //申请失败原因类型：0-自定义原因；1-营业执照不符合要求；2-花呗分期流水未达标
  merchantId: string; //商户id
  merchantNo: string; //商户号
  reason: string; //失败原因
  shopName: string; //商户简称
  status: number; //审核状态（0：未申请、10：审核中、20：审核通过、30：审核失败、40：禁用）
  superAdminPhone: string; //超管手机号
  totalAmount: string; //支付通累计流水金额
}
/** 花呗提额码商户列表 **/
export interface AntInstallmentListDto {
  applyTime: string; //申请时间
  bankType: number; //商户类型 1：自然人，2个体工商户；9：对公
  businessLicenseImgUrl: string; //营业执照url
  failReason: string; //审核失败原因
  failType: number; //申请失败原因类型：0-自定义原因；1-营业执照不符合要求；2-花呗分期流水未达标
  merchantId: string; //商户id
  merchantNo: string; //商户号
  shopName: string; //商户简称
  status: number; //审核状态(0：未申请、10：审核中、20：开启、30：未通过、40：禁用)
}
/** 缺少注释 **/
export interface AuditConfigDto {
  auditStatusTypes: enumDto; //注释丢失
  mccTypes: enumStringDto; //注释丢失
  paySceneTypes: enumStringDto; //注释丢失
  wxMccTypes: enumStringDto; //注释丢失
}
/** 缺少注释 **/
export interface AuditSettingConfigDto {
  merchantAuditTypes: AuditTypeDto; //注释丢失
  paySceneTypes: BankTypeDto; //注释丢失
}
/** 缺少注释 **/
export interface AuditTypeDto {
  key: number; //注释丢失
  value: string; //注释丢失
}
/** 缺少注释 **/
export interface BanMerchantVo {
  isAll: boolean; //注释丢失
  isCurrent: boolean; //注释丢失
  merchantId: string; //注释丢失
  remark: string; //注释丢失
}
/** 缺少注释 **/
export interface BankCardChangeVo {
  bankAccount: string; //银行卡号
  bankName: string; //账户名字
  bankType: number; //账户类型
  branchBankCode: string; //开户支行联行号
  merchantId: string; //商户id
  platformType: number; //支付平台类型
}
/** 缺少注释 **/
export interface BankCardDetailDto {
  bank: string; //开户行
  bankAccount: string; //银行卡号
  bankName: string; //账户名字
  bankType: number; //账户类型
  branchBankName: string; //开户行
  merchantNum: number; //注释丢失
}
/** 缺少注释 **/
export interface BankCardInfoDto {
  accountHolderName: string; //账户名字
  accountNo: string; //银行卡卡号
  authorizedSettlementLetter: string; //注释丢失
  bankCardFrontImageUrl: string; //银行卡正面照片
  bankType: number; //银行卡类型 1：对私；9：对公
  industryLicenseImageUrl: string; //开户许可证照片
  settlementBankName: string; //结算银行名称
  settlementBranchBankName: string; //支行名称
  settlementCertBackImageUrl: string; //注释丢失
  settlementCertExpire: string; //注释丢失
  settlementCertFrontImageUrl: string; //注释丢失
  settlementCertNo: string; //注释丢失
  settlementCertValidityStart: string; //注释丢失
  settlementLetterInHandImageUrl: string; //注释丢失
  settlementName: string; //注释丢失
}
/** 缺少注释 **/
export interface BankTypeDto {
  key: number; //注释丢失
  value: string; //注释丢失
}
/** 新增黑名单 **/
export interface BlackListAddVo {
  blacklistDesc: string; //黑名单描述
  blacklistType: number; //黑名单类型(1:手机号 2：身份证号)
}
/** 删除黑名单 **/
export interface BlackListDeleteVo {
  id: string; //黑名单Id
}
/** 黑名单列表 **/
export interface BlackListDto {
  blacklistDesc: string; //黑名单类型
  blacklistTypeKey: number; //黑名单类型_key
  blacklistTypeValue: string; //黑名单类型_value
  createdAt: string; //黑名单类型
  id: string; //id
  operatorName: string; //黑名单类型
}
/** 缺少注释 **/
export interface BlockVo {
  merchantId: string; //商户id
}
/** 缺少注释 **/
export interface ChangeAdminVo {
  merchantId: string; //商户id
  merchantPaymentType: number; //商户线上线下类型，线下商户：1；线上商户：2
  newSuperAdminPhone: string; //新超管手机号
  reason: string; //变更原因
}
/** 缺少注释 **/
export interface ChannelFeeConfigDto {
  paymentMethodInfos: PaymentMethodFeeDto; //注释丢失
  paymentPlatformName: string; //注释丢失
  platformGroupName: string; //注释丢失
}
/** 缺少注释 **/
export interface CommonResBo {
  failNum: number; //注释丢失
  successNum: number; //注释丢失
  total: number; //注释丢失
}
/** 缺少注释 **/
export interface CreateOrUpdateProductVo {
  displayOriginalPrice: string; //原价（单位：元）
  firstImageUrl: string; //商品头图url
  firstOrderPrice: string; //首单优惠价（单位：元），可不传
  id: string; //商品id，创建时传入0
  imageUrls: undefined; //商品详情图片url列表，最多5张
  limitAmount: number; //限购数量
  orderNumber: number; //排序号
  productName: string; //商品名称，最长20字符
  productState: productStateEnum; //商品状态，1-下架，2-上架
  unitPrice: string; //单位（单位：元）
}
/** 缺少注释 **/
export interface CurrentMerchantAuditConfigDto {
  auditStatus: number; //注释丢失
  merchantTypes: string; //注释丢失
}
/** 缺少注释 **/
export interface DeleteKeywordVo {
  keywordId: string; //关键词序号
}
/** 缺少注释 **/
export interface DeleteProductIbo {
  id: string; //注释丢失
}
/** 缺少注释 **/
export interface DetailBankcardInfoBo {
  accountHolderName: string; //注释丢失
  accountNo: string; //注释丢失
  bankCardInfoId: string; //注释丢失
  paymentPlatformInfos: PaymentPlatformInfoBo; //注释丢失
  settlementBankName: string; //注释丢失
}
/** 缺少注释 **/
export interface DetailInfoDto {
  address: string; //注释丢失
  bankCardInfos: DetailBankcardInfoBo; //注释丢失
  districtInfo: DistrictInfoBo; //注释丢失
  otherAngleEntranceImageUrl: string; //门店不同角度的内景照片
  shopEntrancePhotoImageUrl: string; //注释丢失
  shopPhotoImageUrl: string; //注释丢失
  subjectInfos: DetailSubjectInfoBo; //注释丢失
}
/** 缺少注释 **/
export interface DetailSubjectInfoBo {
  businessLicense: string; //注释丢失
  businessLicenseName: string; //注释丢失
  contactCertNo: string; //注释丢失
  contactName: string; //注释丢失
  legalCertNo: string; //注释丢失
  legalName: string; //注释丢失
  paymentPlatformInfos: PaymentPlatformInfoBo; //注释丢失
  subjectInfoId: string; //注释丢失
  subjectType: number; //注释丢失
}
/** 缺少注释 **/
export interface DistrictInfoBo {
  id: string; //注释丢失
  name: string; //注释丢失
}
/** 缺少注释 **/
export interface EditAuditVo {
  auditStatus: number; //注释丢失
  merchantTypes: string; //注释丢失
}
/** 缺少注释 **/
export interface EduAuditDeleteImagesVo {
  deleteList: undefined; //需要删除的图片类型列表，办学许可证-eduLicenceImageUrl，承诺函-promissoryImageUrl
  id: string; //审核记录的id
}
/** 缺少注释 **/
export interface EduAuditVo {
  eduAuditStatus: number; //注释丢失
  id: string; //注释丢失
  remark: string; //注释丢失
}
/** 缺少注释 **/
export interface EduWxAuditDto {
  eduWxAuditStatus: number; //注释丢失
  eduWxImportTime: string; //注释丢失
  huifuAuditTime: string; //注释丢失
  id: string; //注释丢失
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  phone: string; //注释丢失
  rebateResult: number; //注释丢失
  rebateResultUpdateTime: string; //注释丢失
  rebateStatus: number; //注释丢失
  rebateStatusUpdateTime: string; //注释丢失
  remark: string; //注释丢失
  shopName: string; //注释丢失
  wxMerchantNo: string; //注释丢失
}
/** 缺少注释 **/
export interface EduWxAuditSearchVo {
  eduWxAuditStatus: number; //注释丢失
  endImportTime: string; //注释丢失
  huifuAuditEndTime: string; //注释丢失
  huifuAuditStartTime: string; //注释丢失
  merchantNo: string; //注释丢失
  pageIndex: number; //注释丢失
  pageSize: number; //注释丢失
  phone: string; //注释丢失
  rebateResult: number; //注释丢失
  rebateStatus: number; //注释丢失
  shopName: string; //注释丢失
  startImportTime: string; //注释丢失
  wxMerchantNos: undefined; //注释丢失
}
/** 获取空码信息列表 **/
export interface EmptyCodeBatchCodeListDto {
  emptyCodeBatchDto: undefined; //批次信息
  emptyCodeMerchantInfoDtos: EmptyCodeMerchantInfoDto; //空码及商户信息
}
/** 获取空码批次信息列表 **/
export interface EmptyCodeBatchDto {
  batchCode: string; //批次编码
  bindedQuantity: number; //绑定数量
  channelId: string; //渠道号
  channelName: string; //渠道名称
  createdAt: string; //申请时间
  quantity: number; //申请数量
  signedQuantity: number; //签约数量
  taskStatus: number; //状态，0 生成中， 1 生成完成
}
/** 批量生成空码 **/
export interface EmptyCodeBatchTaskCreateVo {
  channelId: string; //渠道号
  quantity: number; //申请数量
}
/** 空码台卡信息 **/
export interface EmptyCodeDownloadDto {
  backgroundImgUrl: string; //背景图片地址
  channelId: string; //渠道ID
  merchantId: string; //商户ID
  merchantName: string; //商户名称
  merchantNo: string; //商户No
  paymentCode: string; //学费码
  qrcodeUrl: string; //二维码地址
}
/** 空码商户信息 **/
export interface EmptyCodeMerchantInfoDto {
  isBinded: boolean; //是否绑定
  isSigned: boolean; //是否激活
  merchantId: string; //商户ID
  merchantName: string; //商户名称
  merchantNo: string; //商户No
  merchantState: number; //商户状态
  merchantStateDesc: string; //商户状态描述
  paymentImgUrl: string; //二维码地址
  signDate: string; //签约时间
}
/** 缺少注释 **/
export interface EmptyCodeNewCreateDto {
  batchCode: string; //注释丢失
  imgList: string; //注释丢失
}
/** 缺少注释 **/
export interface EmptyCodeNewCreateVo {
  batchCode: string; //批次号
  imgList: string; //当前批次图片url json 串
}
/** 缺少注释 **/
export interface ExcelMerchantIdsDto {
  merchantNos: undefined; //商户号
}
/** 缺少注释 **/
export interface GetChannelBo {
  channelId: string; //注释丢失
  channelName: string; //注释丢失
}
/** 缺少注释 **/
export interface GetChannelConfigBo {
  channelFee: number; //注释丢失
  channelId: string; //注释丢失
  channelName: string; //注释丢失
  specificPlatform: string; //注释丢失
}
/** 缺少注释 **/
export interface GetMoneyCodeInfosByOrderIdsDto {
  amount: number; //注释丢失
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  merchantShortName: string; //注释丢失
  url: string; //注释丢失
}
/** 缺少注释 **/
export interface GetMoneyCodeInfosByOrderIdsVo {
  materialType: materialTypeEnum; //注释丢失
  orderIds: undefined; //注释丢失
}
/** 缺少注释 **/
export interface GetOrdersVo {
  end: string; //支付结束时间 不包含
  merchantNo: string; //商户号
  orderNo: string; //订单号
  orderState: orderStateEnum; //订单状态
  pageIndex: number; //注释丢失
  pageSize: number; //注释丢失
  productName: string; //产品名称
  receiverName: string; //接收人姓名
  shopName: string; //商户简称
  start: string; //支付开始时间
}
/** 缺少注释 **/
export interface GetPromoterInfoBo {
  channelId: string; //注释丢失
  channelName: string; //注释丢失
  promoterId: string; //注释丢失
  promotionShortUrl: string; //注释丢失
  promotionUrl: string; //注释丢失
  updateDate: string; //注释丢失
}
/** 缺少注释 **/
export interface HuifuActivityCallbackVo {
  agentId: string; //注释丢失
  memberId: string; //注释丢失
  orderId: string; //注释丢失
  reqSerialNum: string; //注释丢失
  smId: string; //注释丢失
}
/** 缺少注释 **/
export interface HuifuCallbackCommonVo {
  checkValue: string; //注释丢失
  jsonData: undefined; //注释丢失
  respCode: string; //注释丢失
  respDesc: string; //注释丢失
}
/** 缺少注释 **/
export interface KeywordDetailDto {
  endTime: string; //结束时间
  keyword: string; //关键词
  keywordId: string; //关键词序号
  replyContent: string; //文字回复
  replyImageOssUrl: string; //图片回复
  replyType: number; //回复类型
  startTime: string; //开始时间
}
/** 缺少注释 **/
export interface KeywordPageListDto {
  createTime: string; //创建时间
  endTime: string; //结束时间
  keyword: string; //关键词
  keywordId: string; //关键词序号
  keywordState: string; //状态
  startTime: string; //开始时间
  updateTime: string; //更新时间
}
/** 缺少注释 **/
export interface LastInvoiceInfoDto {
  acceptElectronic: number; //是否接受电子发票：是-1，否-0
  address: string; //开票地址
  bankAccount: string; //银行账号
  bankName: string; //开户行名称
  cityCode: string; //城市编码，关联district的主键id
  districtCode: string; //区县编码，关联district的主键id
  mailAddress: string; //寄送地址
  mailName: string; //收件人名称
  mailTelephone: string; //收件人电话
  orderId: string; //修改中/修改失败，返回审核单号
  provinceCode: string; //省份编码，关联district的主键id
  remark: string; //修改失败，返回失败原因
  status: number; //商户修改结果状态：0-修改中，1-修改成功，2-修改失败
  taxNo: string; //纳税人识别号
  taxPayerQualification: number; //纳税人资格种类：一般纳税人-1，小规模纳税人-2
  taxPayerValid: string; //纳税人资格开始时间,yyyyMMdd格式
  telephone: string; //开票电话
  title: string; //发票抬头
}
/** 缺少注释 **/
export interface MerchantAuditListDto {
  auditStatus: number; //商户审核状态
  contactPhone: string; //联系人手机号
  merchantId: string; //商户id
  merchantNo: string; //商户号
  shopName: string; //商户简称
}
/** 缺少注释 **/
export interface MerchantAuditVo {
  auditStatus: number; //审核结果
  industryQualificationImageUrl: string; //行业资质图片url
  mccType: string; //mcc类型
  merchantId: string; //商户id
  paySceneType: string; //汇付通道支付场景类型
  remark: string; //审核备注信息
  wxMccType: string; //wxMcc类型
}
/** 缺少注释 **/
export interface MerchantBaseInfoDto {
  merchantNo: string; //商户号
  oauthStateValue: string; //注释丢失
  outMerchantNo: string; //外部商户号
  shopName: string; //商户简称
}
/** 缺少注释 **/
export interface MerchantCreditPayLimitInfoDto {
  availableState: number; //注释丢失
  disabledReason: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantCreditPayLimitVo {
  availableState: number; //注释丢失
  disabledDays: number; //注释丢失
  disabledReason: string; //注释丢失
  merchantId: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantDetailDto {
  address: string; //详细地址
  area: string; //area:所在地
  authorizedSettlementLetter: string; //注释丢失
  bank: string; //银行名称
  bankAccount: string; //银行卡号
  bankCardFrontImageUrl: string; //银行卡照片
  bankName: string; //开户名
  bankType: number; //银行类型 1对私 9对公
  bankTypeString: string; //废弃字段，请使用subjectTypeString
  businessLicense: string; //营业执照号
  businessLicenseExpire: string; //营业执照有效期
  businessLicenseImageUrl: string; //营业执照照片地址
  businessLicenseName: string; //营业执照名称
  businessLicenseValidityStart: string; //营业执照起始日期
  canAudit: boolean; //是否可以审核
  canSelectChannel: boolean; //是否可以选择渠道
  certPhotoCImageUrl: string; //手持身份证照片
  channelName: string; //渠道名称
  checkStandPhotoImageUrl: string; //收银台照片
  commitAuditAt: string; //提交审核时间
  companyName: string; //学校全称
  contactCertExpire: string; //负责人身份证有效期
  contactCertValidityStart: string; //负责人身份证起始日期
  contactName: string; //负责人(校长)身份信息姓名
  eduLicenceImageUrl: string; //办学许可证
  firstSuccessRegisteredAt: string; //废弃字段，签约时间
  idCardBackImageUrl: string; //身份证背面照片地址
  idCardFrontImageUrl: string; //身份证正面照片地址
  idCardNo: string; //负责人(校长)身份证
  industryLicenseImageUrl: string; //开户许可证
  industryQualificationImageUrl: string; //行业资质图片url
  internalPromoter: boolean; //是否为内部推广员推广商户
  merchantStatus: number; //商户状态
  merchantStatusString: string; //商户状态string
  otherAngleEntranceImageUrl: string; //门店不同角度的内景照片
  promissoryImageUrl: string; //承诺函
  reason: string; //审核失败原因
  servicePhone: string; //服务电话
  settlementCertBackImageUrl: string; //注释丢失
  settlementCertExpire: string; //注释丢失
  settlementCertFrontImageUrl: string; //注释丢失
  settlementCertNo: string; //注释丢失
  settlementCertValidityStart: string; //注释丢失
  settlementLetterInHandImageUrl: string; //注释丢失
  settlementName: string; //注释丢失
  shopEntrancePhotoImageUrl: string; //门店内景照片
  shopName: string; //学校简称
  subBank: string; //开户支行
  subjectType: number; //主体类型：企业-1 个体-2 自然人-3 民办非-4
  subjectTypeString: string; //主体类型描述：企业-1 个体-2 自然人-3 民办非-4
  superAdminPhone: string; //超管手机号
  supportingMaterialImageUrls: undefined; //辅助证明材料图片地址列表
}
/** 缺少注释 **/
export interface MerchantEduFurtherAuditDto {
  businessLicenseImageUrl: string; //注释丢失
  companyName: string; //注释丢失
  eduAuditStatus: number; //注释丢失
  eduAuditTime: string; //注释丢失
  eduLicenceImageUrl: string; //注释丢失
  id: string; //注释丢失
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  otherAngleEntranceImageUrl: string; //注释丢失
  phone: string; //注释丢失
  promissoryImageUrl: string; //注释丢失
  remark: string; //注释丢失
  shopEntrancePhotoImageUrl: string; //注释丢失
  shopName: string; //注释丢失
  shopPhotoImageUrl: string; //注释丢失
  subjectType: number; //注释丢失
  submitTime: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantEduFurtherAuditVo {
  eduAuditStatus: number; //注释丢失
  merchantNo: string; //注释丢失
  pageIndex: number; //注释丢失
  pageSize: number; //注释丢失
  phone: string; //注释丢失
  shopName: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantEnableVo {
  merchantId: string; //商户id
  reason: string; //原因
}
/** 缺少注释 **/
export interface MerchantFeeBo {
  eduState: boolean; //注释丢失
  hfAlipayRate: number; //注释丢失
  hfAlipayRateMethodId: string; //注释丢失
  hfWxFeeRate: number; //注释丢失
  hfWxFeeRateMethodId: string; //注释丢失
  hfWxOfflineFeeRate: number; //注释丢失
  hfWxOfflineFeeRateMethodId: string; //注释丢失
  hfWxOnlineFeeRate: number; //注释丢失
  hfWxOnlineFeeRateMethodId: string; //注释丢失
  k12State: boolean; //注释丢失
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  paymentPlatformId: string; //注释丢失
  paymentPlatformMerchantNo: string; //注释丢失
  paymentPlatformName: string; //注释丢失
  paymentPlatformType: number; //注释丢失
  shopName: string; //注释丢失
  subsidyFeeRate: number; //注释丢失
  zftAlipayHbRate: number; //注释丢失
  zftAlipayHbRateMethodId: string; //注释丢失
  zftAlipayRate: number; //注释丢失
  zftAlipayRateMethodId: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantFeeMiniBatchFixIbo {
  newFee: number; //注释丢失
  oldFee: number; //注释丢失
  secret: string; //secret=1i2ds12kjg3SDG&U28
}
/** 缺少注释 **/
export interface MerchantFeeModifyBo {
  dbCreatedAt: string; //注释丢失
  dbUpdatedAt: string; //注释丢失
  fee: number; //注释丢失
  feeState: number; //注释丢失
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  oldFee: number; //注释丢失
  oldSubsidyFeeRate: number; //注释丢失
  paymentMethodId: string; //注释丢失
  paymentMethodName: string; //注释丢失
  paymentPlatformId: string; //注释丢失
  paymentPlatformName: string; //注释丢失
  paymentPlatformType: number; //注释丢失
  remark: string; //注释丢失
  shopName: string; //注释丢失
  subsidyFeeRate: number; //注释丢失
}
/** 缺少注释 **/
export interface MerchantFeeModifyQueryVo {
  merchantId: string; //商户Id
  offset: number; //注释丢失
  pageIndex: number; //注释丢失
  pageSize: number; //注释丢失
  paymentPlatformType: number; //平台类型
}
/** 缺少注释 **/
export interface MerchantFeeQueryVo {
  merchantNo: string; //商户号
  offset: number; //注释丢失
  pageIndex: number; //注释丢失
  pageSize: number; //注释丢失
  shopName: string; //商户简称
}
/** 缺少注释 **/
export interface MerchantFeeVo {
  hfWxOfflineFeeRateMethodId: string; //注释丢失
  merchantId: string; //商户id
  merchantPaymentMethodId: string; //商户平台支付方式Id
  paymentPlatformMerchantNo: string; //平台商户号
  paymentPlatformType: number; //平台类型
  premiumRate: number; //费率
  rateType: number; //费率修改类型：1-成本费率，2-补贴费率
  subsidyFeeRate: number; //补贴费率
}
/** 缺少注释 **/
export interface MerchantFilterDto {
  antCheckLaterStateFilters: enumDto; //花呗分期状态筛选
  channelFilters: enumDto; //渠道筛选
  creditCardStateFilters: enumDto; //信用卡分期状态筛选
  merchantStateFilters: enumDto; //商户状态筛选
  timeFilters: enumDto; //时间筛选
}
/** 缺少注释 **/
export interface MerchantInfoListDto {
  alipayMerchantId: string; //支付宝商户id
  merchantId: string; //商户id
  merchantName: string; //商户名称
  merchantNo: string; //商户号
  paymentPlatformMerchantNo: string; //平台商户号
  paymentPlatformName: string; //平台名称
  paymentPlatformType: number; //支付平台类型
  shopName: string; //商户简称
  wechatMerchantNo: string; //微信商户号
}
/** 缺少注释 **/
export interface MerchantListDto {
  contactName: string; //注释丢失
  isDisable: boolean; //注释丢失
  merchantId: string; //注释丢失
  merchantName: string; //注释丢失
  merchantNo: string; //注释丢失
  merchantsRelate: number; //注释丢失
  shopName: string; //注释丢失
  signingTime: string; //注释丢失
  superAdminPhone: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantMccDto {
  list: enumStringDto; //注释丢失
  mcc: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantPageListDto {
  antCheckLaterSignedAt: string; //花呗分期开通时间
  antCheckLaterState: string; //花呗分期状态
  availableState: string; //聚合信用支付状态
  channelId: string; //签约渠道id
  channelName: string; //签约渠道名称
  createTime: string; //企业钱包开通时间
  createdAt: string; //创建时间
  creditCardSignedAt: string; //信用卡分期开通时间
  creditCardState: string; //信用卡分期状态
  merchantId: string; //商户id
  merchantNo: string; //注释丢失
  merchantState: string; //商户状态
  shopName: string; //商户简称
  signedAt: string; //签约时间
  superAdminPhone: string; //超管手机号
  walletProgress: string; //企业钱包开通状态:0-初始化;1-企业钱包开通失败;2-企业钱包开通成功;3-沉淀户审核中;4-沉淀户审核失败；5-沉淀户审核成功；6-D0配置审核中；7-D0配置审核失败；8-D0配置审核成功'
}
/** 缺少注释 **/
export interface MerchantRiskInfoDto {
  merchantNo: string; //商户号
  merchantRiskList: MerchantRiskInfoListDto; //风控记录
  shopName: string; //商户简称
}
/** 缺少注释 **/
export interface MerchantRiskInfoListDto {
  content: string; //操作内容
  id: string; //注释丢失
  operatorName: string; //操作人
  operatorTime: string; //操作时间
}
/** 缺少注释 **/
export interface MerchantSignLogBo {
  merchantId: string; //注释丢失
  request: string; //注释丢失
  response: string; //注释丢失
}
/** 缺少注释 **/
export interface MerchantWhitelistApplyLogImportDto {
  failCount: number; //注释丢失
  successCount: number; //注释丢失
}
/** 缺少注释 **/
export interface MerchantWhitelistApplyLogQueryDto {
  applyState: string; //注释丢失
  applyTime: string; //注释丢失
  failReason: string; //注释丢失
  merchantNo: string; //注释丢失
  relatedMerchantNo: string; //注释丢失
  riskType: string; //注释丢失
  shopName: string; //注释丢失
}
/** 月月付配置 **/
export interface MonthAlipayConfigIbo {
  alipayAccount: string; //企业支付宝账号
  alipayPid: string; //企业支付宝pid
  merchantId: string; //商户ID
  token: string; //企业授权app的token
}
/** 缺少注释 **/
export interface OSSTokenDto {
  accessKeyId: string; //注释丢失
  accessKeySecret: string; //注释丢失
  bucket: string; //注释丢失
  expiration: string; //注释丢失
  folder: string; //注释丢失
  region: string; //注释丢失
  stsToken: string; //注释丢失
}
/** 缺少注释 **/
export interface OrderDto {
  allAddress: string; //完整地址
  amount: number; //数量
  canton: string; //收件人地区信息：区
  cantonId: string; //收件人地区信息：区Id
  city: string; //收件人地区信息：市
  cityId: string; //收件人地区信息：市Id
  deliveryAddress: string; //详细地址
  districtInfo: string; //省市区信息
  expressNo: string; //快递单号
  expressType: expressTypeEnum; //快递平台类型 1 韵达快递 2顺丰快递 3圆通快递
  expressTypeDesc: string; //快递平台名称
  id: string; //订单id
  merchantNo: string; //商户号
  orderNo: string; //订单号
  orderState: orderStateEnum; //订单状态 2待发货 3 已发货
  paymentMethodName: string; //支付方式
  paymentTime: string; //付款时间
  productName: string; //商品名称
  province: string; //收件人地区信息：省
  provinceId: string; //收件人地区信息：省Id
  realPay: string; //实收款：单位 元 0.00
  receiverName: string; //收件人姓名
  receiverPhone: string; //收件人手机号
  shopName: string; //商户简称
}
/** 获取oss私有图片地址 **/
export interface OssAccessUrlVo {
  url: string; //原始oss图片url
}
/** 缺少注释 **/
export interface PageDataActivityListDto {
  currentIndex: number; //注释丢失
  list: ActivityListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataAntInstallmentListDto {
  currentIndex: number; //注释丢失
  list: AntInstallmentListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataBlackListDto {
  currentIndex: number; //注释丢失
  list: BlackListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataKeywordPageListDto {
  currentIndex: number; //注释丢失
  list: KeywordPageListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataMerchantAuditListDto {
  currentIndex: number; //注释丢失
  list: MerchantAuditListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataMerchantPageListDto {
  currentIndex: number; //注释丢失
  list: MerchantPageListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataMerchantWhitelistApplyLogQueryDto {
  currentIndex: number; //注释丢失
  list: MerchantWhitelistApplyLogQueryDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataPromotionPageListDto {
  currentIndex: number; //注释丢失
  list: PromotionPageListDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageDataTransactionRefundDto {
  currentIndex: number; //注释丢失
  list: TransactionRefundDto; //注释丢失
  totalCount: number; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseActivityListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseAntInstallmentListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseBlackListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseKeywordPageListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseMerchantAuditListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseMerchantPageListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseMerchantWhitelistApplyLogQueryDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponsePromotionPageListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageResponseTransactionRefundDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface PageEduWxAuditDto {
  empty: boolean; //注释丢失
  list: EduWxAuditDto; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface PageMerchantEduFurtherAuditDto {
  empty: boolean; //注释丢失
  list: MerchantEduFurtherAuditDto; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface PageMerchantFeeBo {
  empty: boolean; //注释丢失
  list: MerchantFeeBo; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface PageMerchantFeeModifyBo {
  empty: boolean; //注释丢失
  list: MerchantFeeModifyBo; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface PageOrderDto {
  empty: boolean; //注释丢失
  list: OrderDto; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface PageProductListDto {
  empty: boolean; //注释丢失
  list: ProductListDto; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface PageSeniorAdminConfigPageListBo {
  empty: boolean; //注释丢失
  list: SeniorAdminConfigPageListBo; //注释丢失
  next: boolean; //注释丢失
  page: number; //注释丢失
  previous: boolean; //注释丢失
  size: number; //注释丢失
  total: string; //注释丢失
  totalPages: string; //注释丢失
}
/** 缺少注释 **/
export interface ParamDto {
  key: string; //参数名，当前版本的key有：firstText,remarkText,activityNameText,activityTimeText,activityPlaceText
  value: string; //参数值
}
/** 缺少注释 **/
export interface ParamVo {
  key: string; //参数名，当前版本的key有：firstText,remarkText,activityNameText,activityTimeText,activityPlaceText
  value: string; //参数值
}
/** 缺少注释 **/
export interface PaymentCodeInfoDto {
  merchantNo: string; //商户号
  paymentCodeUrl: string; //学费码图片地址
  shopName: string; //商户简称
}
/** 缺少注释 **/
export interface PaymentMethodFeeDto {
  fee: string; //注释丢失
  paymentMethodName: string; //注释丢失
}
/** 缺少注释 **/
export interface PaymentPlatformInfoBo {
  paymentPlatformMerchantNo: string; //注释丢失
  paymentPlatformName: string; //注释丢失
}
/** 缺少注释 **/
export interface PmMerchantPaymentMethod {
  isDefault: boolean; //注释丢失
  paymentMethodMerchantNo: string; //注释丢失
  paymentMethodName: string; //注释丢失
  paymentMethodSceneName: string; //注释丢失
}
/** 缺少注释 **/
export interface PmMerchantPlatformDto {
  firstSuccessRegisteredAt: string; //注释丢失
  isDefault: boolean; //注释丢失
  merchantPaymentMethods: PmMerchantPaymentMethod; //注释丢失
  paymentPlatformMerchantNo: string; //注释丢失
  paymentPlatformName: string; //注释丢失
  paymentPlatformState: number; //注释丢失
  paymentPlatformStateValue: string; //注释丢失
  thirdApplicationOrderId: string; //注释丢失
}
/** 缺少注释 **/
export interface ProductDetailDto {
  displayOriginalPrice: string; //注释丢失
  firstImageUrl: string; //注释丢失
  firstOrderPrice: string; //注释丢失
  id: string; //注释丢失
  imageUrls: undefined; //注释丢失
  limitAmount: number; //注释丢失
  orderNumber: number; //注释丢失
  productName: string; //注释丢失
  productState: productStateEnum; //注释丢失
  unitPrice: string; //注释丢失
}
/** 缺少注释 **/
export interface ProductListDto {
  displayOriginalPrice: string; //注释丢失
  firstImageUrl: string; //注释丢失
  firstOrderPrice: string; //注释丢失
  id: string; //注释丢失
  limitAmount: number; //注释丢失
  orderNumber: number; //注释丢失
  productName: string; //注释丢失
  productState: productStateEnum; //注释丢失
  totalSalesQuantity: number; //注释丢失
  unitPrice: string; //注释丢失
}
/** 缺少注释 **/
export interface PromotionDetailDto {
  applicationName: string; //应用程序名称
  comment: string; //广告描述
  configs: PromotionTipConfigDto; //配置项
  id: string; //序号
  isShow: boolean; //是否展示，1开启 2关闭
  pageName: string; //广告位置
}
/** 缺少注释 **/
export interface PromotionPageListDto {
  applicationName: string; //应用程序名称
  comment: string; //广告描述
  createdAt: string; //创建时间
  id: string; //序号
  isShow: boolean; //是否展示
  pageName: string; //广告位置
  updatedAt: string; //修改时间
}
/** 缺少注释 **/
export interface PromotionTipConfigDto {
  configKey: string; //配置项的Key
  configKeyName: string; //编辑项的字段名
  configValue: string; //配置项的Value
  description: string; //编辑项的描述
  enableEmpty: boolean; //是否允许为空
  id: string; //序号
  inputType: string; //输入类型
}
/** 缺少注释 **/
export interface PromotionTipConfigVo {
  configKey: string; //配置项的Key
  configKeyName: string; //编辑项的字段名
  configValue: string; //配置项的Value
  description: string; //编辑项的描述
  id: string; //广告配置项信息表序号
}
/** 缺少注释 **/
export interface RefundVo {
  paymentPlatformType: number; //支付平台类型
  refundAmount: string; //退款金额
  refundReason: string; //退款原因
  schoolPalCloudPayTradeNo: string; //scp交易号
}
/** 缺少注释 **/
export interface SaveInvoiceInfoDto {
  orderId: string; //修改中/修改失败，返回审核单号
  remark: string; //修改失败，返回失败原因
  status: number; //商户修改结果状态：0-修改中，1-修改成功，2-修改失败
}
/** 缺少注释 **/
export interface SaveInvoiceInfoVo {
  acceptElectronic: number; //是否接受电子发票：是-1，否-0
  address: string; //开票地址
  bankAccount: string; //银行账号
  bankName: string; //开户行名称
  cityCode: string; //城市编码，关联district的主键id
  districtCode: string; //区县编码，关联district的主键id
  mailAddress: string; //寄送地址
  mailName: string; //收件人名称
  mailTelephone: string; //收件人电话
  merchantId: string; //商户id
  provinceCode: string; //省份编码，关联district的主键id
  taxNo: string; //纳税人识别号
  taxPayerQualification: number; //纳税人资格种类：一般纳税人-1，小规模纳税人-2
  taxPayerValid: string; //纳税人资格开始时间,yyyyMMdd格式
  telephone: string; //开票电话
  title: string; //发票抬头
}
/** 缺少注释 **/
export interface SeniorAdminConfigBatch {
  merchantId: string; //商户id
  merchantNo: string; //商户号
  shopName: string; //商户简称
}
/** 缺少注释 **/
export interface SeniorAdminConfigListBo {
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  shopName: string; //注释丢失
}
/** 缺少注释 **/
export interface SeniorAdminConfigPageListBo {
  deleted: number; //注释丢失
  id: string; //注释丢失
  merchantId: string; //注释丢失
  merchantNo: string; //注释丢失
  phone: string; //注释丢失
  roleId: string; //注释丢失
  roleName: string; //注释丢失
  settingTime: string; //注释丢失
  shopName: string; //注释丢失
}
/** 缺少注释 **/
export interface SeniorAdminConfigVo {
  batchList: SeniorAdminConfigBatch; //商户列表对象集合
  phone: string; //超管手机号
  roleId: string; //角色id
  roleName: string; //角色名称
}
/** 缺少注释 **/
export interface SeniorListVo {
  merchantNo: string; //商户号
  offset: number; //注释丢失
  pageIndex: number; //注释丢失
  pageSize: number; //注释丢失
  phone: string; //超管手机号
}
/** 缺少注释 **/
export interface SeniorQueryVo {
  phone: string; //超管手机号
}
/** 缺少注释 **/
export interface SignAlipayGuaranteePayVo {
  merchantId: string; //商户id
}
/** 缺少注释 **/
export interface SignBusinessGuaranteeBo {
  failReason: string; //注释丢失
  state: number; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseAntInstallmentDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseAuditConfigDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseAuditSettingConfigDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseBankCardDetailDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseBankCardInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseCommonResBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseCurrentMerchantAuditConfigDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseDetailInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseEmptyCodeBatchCodeListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseEmptyCodeNewCreateDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseExcelMerchantIdsDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseGetChannelConfigBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseGetPromoterInfoBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseKeywordDetailDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseLastInvoiceInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListChannelFeeConfigDto {
  data: ChannelFeeConfigDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListEmptyCodeBatchDto {
  data: EmptyCodeBatchDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListEmptyCodeDownloadDto {
  data: EmptyCodeDownloadDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListGetChannelBo {
  data: GetChannelBo; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListGetMoneyCodeInfosByOrderIdsDto {
  data: GetMoneyCodeInfosByOrderIdsDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListMerchantInfoListDto {
  data: MerchantInfoListDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListMerchantListDto {
  data: MerchantListDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListPmMerchantPlatformDto {
  data: PmMerchantPlatformDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListSeniorAdminConfigListBo {
  data: SeniorAdminConfigListBo; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListSimpleStructDto {
  data: SimpleStructDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseListenumDto {
  data: enumDto; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantBaseInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantCreditPayLimitInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantDetailDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantEduFurtherAuditDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantFeeBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantFilterDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantMccDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantRiskInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantSignLogBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseMerchantWhitelistApplyLogImportDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseOSSTokenDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageEduWxAuditDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageMerchantEduFurtherAuditDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageMerchantFeeBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageMerchantFeeModifyBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageOrderDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageProductListDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePageSeniorAdminConfigPageListBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePaymentCodeInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseProductDetailDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsePromotionDetailDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseSaveInvoiceInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseSignBusinessGuaranteeBo {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseSubjectInfoDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseWhitelistEnumsDto {
  data: undefined; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseboolean {
  data: boolean; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponseint {
  data: number; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponselong {
  data: string; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleResponsestring {
  data: string; //注释丢失
  errorCode: number; //注释丢失
  errorMessage: string; //注释丢失
  status: boolean; //注释丢失
}
/** 缺少注释 **/
export interface SimpleStructDto {
  id: string; //注释丢失
  name: string; //注释丢失
}
/** 缺少注释 **/
export interface SubjectInfoDto {
  businessLicense: string; //统一社会信用代码/民办非企业证件号
  businessLicenseExpire: string; //营业执照有效期
  businessLicenseForever: number; //营业执照是否永久：1-非长期；2-长期
  businessLicenseImageUrl: string; //营业执照照片
  businessLicenseName: string; //营业执照/民办非企业名称
  businessLicenseRegisterAddress: string; //营业执照注册地址
  businessLicenseValidityStart: string; //营业执照起始日期
  contactCertBackImageUrl: string; //负责人身份证反面照片
  contactCertExpire: string; //负责人身份证有效期
  contactCertForever: number; //负责人身份证是否永久：1-非长期；2-长期
  contactCertFrontImageUrl: string; //负责人身份证正面照片
  contactCertInHandImageUrl: string; //负责人手持身份证照片
  contactCertNo: string; //负责人身份证号
  contactCertValidityStart: string; //负责人身份证起始日期
  contactName: string; //负责人姓名
  eduLicenceImageUrl: string; //注释丢失
  industryQualificationImageUrl: string; //行业资质图片url
  legalCertBackImageUrl: string; //法人身份证反面照片
  legalCertExpire: string; //法人身份证有效期
  legalCertForever: number; //法人身份证是否永久：1-非长期；2-长期
  legalCertFrontImageUrl: string; //法人身份证正面照片
  legalCertNo: string; //法人身份证号
  legalCertValidityStart: string; //法人身份证起始日期
  legalName: string; //法人姓名
  promissoryImageUrl: string; //注释丢失
  subjectType: number; //主体类型：1-企业；2-个体工商户；3-自然人；4-民办非企业
}
/** 缺少注释 **/
export interface TransactionAddressImportVo {
  endDate: string; //结束时间
  merchantId: string; //商户id
  startDate: string; //开始时间
}
/** 缺少注释 **/
export interface TransactionRefundDto {
  cashierName: string; //注释丢失
  courseName: string; //报读课程
  discountFee: number; //贴息手续费
  discountFeeRate: number; //分期费率
  employeeId: string; //收银员ID，展示用
  enableBinding: number; //是否绑定Erp订单(0,1)
  huabeiPlatformType: number; //区分直连与直付通平台的枚举类
  installmentPeriods: number; //分期期数
  merchantNo: string; //商户号，展示用
  merchantTradeNo: string; //外部交易号
  originPaymentTime: string; //退款交易对应的原始交易的支付时间
  outPremiumRate: number; //费率
  payMethodType: number; //支付方式【1：支付宝 ，2：微信】
  paymentChannelType: number; //商户支付渠道
  paymentMethodTradeNo: string; //支付方式交易号
  paymentPlatformType: number; //支付平台
  paymentTime: string; //付款时间
  phone: string; //手机号
  poundage: number; //手续费
  prePoundage: number; //精确前手续费
  realPayAmount: number; //实际支付金额
  refundFeeRate: number; //花呗交易退款时使用的贴息手续费计算字段
  refundOver15Day: boolean; //退款超过15天
  refundReason: string; //退款原因
  remark: string; //备注
  schoolPalCloudPayTradeNo: string; //校宝云支付交易号
  sellerPercent: number; //贴息方式【100-学校贴息 50-费率5折 0-家长付息】
  settlementAmount: number; //结算金额
  shopName: string; //商户简称，展示用
  showOpType: number; //操作按钮显示状态【0-高亮, 1-置灰 2-不可操作】
  studentName: string; //学员姓名
  transactionHappenedSeconds: string; //交易开始时间至服务器时间的秒数
  transactionId: string; //交易Id
  transactionState: number; //交易状态【0：未支付，1：已支付，2：部分支付，3：全部退款，4：部分退款，5：已失效 6:未退款 7:退款失败 8:退款中】
  transactionType: number; //交易类型【0：正常，1：重复交易】
  usage: number; //交易用途【0-正常, 1-退款充值】
}
/** 缺少注释 **/
export interface UpdateKeywordVo {
  endTime: string; //结束时间
  keyword: string; //关键词
  keywordId: string; //关键词序号
  replyContent: string; //文字回复
  replyImageOssUrl: string; //图片回复
  replyType: number; //回复类型
  startTime: string; //开始时间
}
/** 缺少注释 **/
export interface UpdateLogisticsInfoIbo {
  expressNo: string; //注释丢失
  expressType: expressTypeEnum; //注释丢失
  orderId: string; //注释丢失
}
/** 缺少注释 **/
export interface UpdateMccVo {
  mcc: string; //mcc
  merchantId: string; //商户id
}
/** 缺少注释 **/
export interface UpdateMerchantEduVo {
  id: string; //注释丢失
  opeType: number; //注释丢失
  rebateResult: number; //注释丢失
  rebateStatus: number; //注释丢失
  remark: string; //注释丢失
}
/** 缺少注释 **/
export interface UpdateOrderDeliveryInfoIbo {
  address: string; //注释丢失
  cantonId: string; //注释丢失
  name: string; //注释丢失
  orderId: string; //注释丢失
  phone: string; //注释丢失
}
/** 缺少注释 **/
export interface UpdateProductStateIbo {
  id: string; //注释丢失
  productStateEnum: productStateEnumEnum; //注释丢失
}
/** 缺少注释 **/
export interface UpdatePromoterInfoVo {
  channelId: string; //注释丢失
  promoterId: string; //注释丢失
}
/** 缺少注释 **/
export interface UpdatePromotionVo {
  configs: PromotionTipConfigVo; //配置项
  id: string; //序号
  isShow: boolean; //是否展示
}
/** 缺少注释 **/
export interface UpdateSignLimitVo {
  createMerchantLimit: number; //开户上限
  merchantId: string; //商户id
  reason: string; //原因说明
}
/** 缺少注释 **/
export interface WhitelistEnumsDto {
  applyStateEnums: enumDto; //注释丢失
}
/** 缺少注释 **/
export interface enumDto {
  key: number; //注释丢失
  value: string; //注释丢失
}
/** 缺少注释 **/
export interface enumStringDto {
  key: string; //注释丢失
  value: string; //注释丢失
}
