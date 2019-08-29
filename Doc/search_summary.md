# search 页面笔记

# 知识点
1. 创建新页面时要添加`vue` 与 `main.js` 文件
2. 配置页面样式时要添加与 `main.js` 同文件名的`main.json`
3. 配置页面路由需要至 `app.json` 中配置页面
3. `main.js`中的文件编写框架如下
```javascript
import Vue from 'vue' // 引进 vue 文件
import Search from 'page路径'

const app = new Vue(Page组件名)
app.$mount() // 调用 app 的$mount 方法，挂载页面
```
