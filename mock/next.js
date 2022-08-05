module.exports = {
    "swagger": "2.0",
    "info": {
        "description": "xxxx swagger Application.",
        "version": "1.0.0",
        "title": "xxxx swagger Application",
        "termsOfService": "TERMS OF SERVICE URL",
        "contact": {
            "name": "xxxx",
            "url": "http://xxxx.com/",
            "email": "xxxx.com"
        },
        "license": {
            "name": "MIT License",
            "url": "LICENSE URL"
        }
    },
    "host": "xxxx",
    "basePath": "xxx",
    "tags": [
        {
            "name": "product",
            "description": "Product Controller"
        }
    ],
    "paths": {
        "/product/createOrUpdate": {
            "post": {
                "tags": [
                    "product"
                ],
                "summary": "创建或编辑商品",
                "operationId": "createOrUpdateUsingPOST",
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
                            "originalRef": "CreateOrUpdateProductVo",
                            "$ref": "#/definitions/CreateOrUpdateProductVo"
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
        "CreateOrUpdateProductVo": {
            "type": "object",
            "properties": {
                "displayOriginalPrice": {
                    "type": "string",
                    "description": "原价（单位：元）"
                },
                "firstImageUrl": {
                    "type": "string",
                    "description": "商品头图url"
                },
                "firstOrderPrice": {
                    "type": "string",
                    "description": "首单优惠价（单位：元），可不传"
                },
                "id": {
                    "type": "integer",
                    "format": "int64",
                    "description": "商品id，创建时传入0",
                    "minimum": 0.0,
                    "exclusiveMinimum": false
                },
                "imageUrls": {
                    "type": "array",
                    "description": "商品详情图片url列表，最多5张",
                    "items": {
                        "type": "string"
                    }
                },
                "limitAmount": {
                    "type": "integer",
                    "format": "int32",
                    "description": "限购数量",
                    "minimum": 1.0,
                    "exclusiveMinimum": false
                },
                "orderNumber": {
                    "type": "integer",
                    "format": "int32",
                    "description": "排序号",
                    "minimum": 1.0,
                    "exclusiveMinimum": false
                },
                "productName": {
                    "type": "string",
                    "description": "商品名称，最长20字符"
                },
                "productState": {
                    "type": "string",
                    "description": "商品状态，1-下架，2-上架",
                    "enum": [
                        "UN_KNOWN",
                        "UN_SALE",
                        "SALE_ING"
                    ]
                },
                "unitPrice": {
                    "type": "string",
                    "description": "单位（单位：元）"
                }
            },
            "title": "CreateOrUpdateProductVo"
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
        },
        "enumDto": {
            "type": "object",
            "properties": {
                "key": {
                    "type": "integer",
                    "format": "int32"
                },
                "value": {
                    "type": "string"
                }
            },
            "title": "enumDto"
        },
        "WhitelistEnumsDto": {
            "type": "object",
            "properties": {
                "applyStateEnums": {
                    "type": "array",
                    "items": {
                        "originalRef": "enumDto",
                        "$ref": "#/definitions/enumDto"
                    }
                }
            },
            "title": "WhitelistEnumsDto"
        }
    }
}