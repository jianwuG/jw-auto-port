module.exports = {
    "swagger": "2.0",
    "info": {
        "description": "xxx swagger Application.",
        "version": "1.0.0",
        "title": "xxx swagger Application",
        "termsOfService": "TERMS OF SERVICE URL",
        "contact": {
            "name": "xxx",
            "url": "http://www.xxx.com/",
            "email": "xxxx.com"
        },
        "license": {
            "name": "MIT License",
            "url": "LICENSE URL"
        }
    },
    "host": "xxxx.cn",
    "basePath": "/api/pm-scp",
    "tags": [
        {
            "name": "promotion",
            "description": "广告配置"
        }
    ],
    "paths": {
        "/promotion/updatePromotion": {
            "post": {
                "tags": [
                    "promotion"
                ],
                "summary": "广告详情-修改广告配置",
                "operationId": "updatePromotionUsingPOST",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "*/*"
                ],
                "parameters": [
                    {
                        "in": "body",
                        "name": "vo",
                        "description": "vo",
                        "required": true,
                        "schema": {
                            "originalRef": "UpdatePromotionVo",
                            "$ref": "#/definitions/UpdatePromotionVo"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "originalRef": "SimpleResponse«boolean»",
                            "$ref": "#/definitions/SimpleResponse«boolean»"
                        }
                    },
                    "201": {
                        "description": "Created"
                    },
                    "401": {
                        "description": "Unauthorized"
                    },
                    "403": {
                        "description": "Forbidden"
                    },
                    "404": {
                        "description": "Not Found"
                    }
                },
                "deprecated": false
            }
        }
    },
    "definitions": {
        "UpdatePromotionVo": {
            "type": "object",
            "properties": {
                "configs": {
                    "type": "array",
                    "description": "配置项",
                    "items": {
                        "originalRef": "PromotionTipConfigVo",
                        "$ref": "#/definitions/PromotionTipConfigVo"
                    }
                },
                "id": {
                    "type": "integer",
                    "format": "int64",
                    "description": "序号"
                },
                "isShow": {
                    "type": "boolean",
                    "description": "是否展示"
                }
            },
            "title": "UpdatePromotionVo"
        },
        "PromotionTipConfigVo": {
            "type": "object",
            "properties": {
                "configKey": {
                    "type": "string",
                    "description": "配置项的Key"
                },
                "configKeyName": {
                    "type": "string",
                    "description": "编辑项的字段名"
                },
                "configValue": {
                    "type": "string",
                    "description": "配置项的Value"
                },
                "description": {
                    "type": "string",
                    "description": "编辑项的描述"
                },
                "id": {
                    "type": "integer",
                    "format": "int64",
                    "description": "广告配置项信息表序号"
                }
            },
            "title": "PromotionTipConfigVo"
        },
        "SimpleResponse«boolean»": {
            "type": "object",
            "properties": {
                "data": {
                    "type": "boolean"
                },
                "errorCode": {
                    "type": "integer",
                    "format": "int32"
                },
                "errorMessage": {
                    "type": "string"
                },
                "status": {
                    "type": "boolean"
                }
            },
            "title": "SimpleResponse«boolean»"
        }
    }
}