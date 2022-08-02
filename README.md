
#### 快速开始
● 1、在 vscode 中安装 vscode 插件 pont 以获取 pont 的全部能力。插件使用方法请参考：[vscode-pont](https://github.com/nefe/vscode-pont)
● 2、添加 pont-config.json
pont 一旦检测到有效的 pont-config.json 文件即可启动。pont 支持 pont start 命令快速生成 pont-config.json 配置文件。
```
全局安装 pont-engine
// npm
npm i -g pont-engine


// 或yarn
yarn global add pont-engine

```

在你的项目中运行 pont start 命令，按照提示输入配置完成接入。
Tips:
● 确保服务端使用 Swagger（目前只支持 Swagger V1、V2、V3），提供的数据源接口是免登录的。如果不是，请后端帮忙简单配置一下，或者使用 fetchMethodPath 配置，通过自定义 fetch 方法获取带鉴权的接口的文档。
● 若需替换默认的请求信息，请参阅[pontCore](https://github.com/alibaba/pont/blob/master/docs/pontCore.md)。

#### 配置pont-config.json

#### 配置pontTemplate

[详情参考](https://juejin.cn/post/7127185421942931493/)