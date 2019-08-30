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

# 搜索页面的相关总结

## 页面组件

#### SearchBar

| 属性 | 描述 |
| --- | --- |
| focus | 跳入 search 页时自动弹出手机键盘  |
| hot-search | 关键字搜索（关联组件中的 placeholder 属性） |

|事件 |描述 |
|---|---|
|onChange | 搜索框内 onChange 事件变化 |
|onClear | 删除搜索关键字并且清空搜索数据 |
|onConfirm |确认搜索关键字并展示搜索数据 |
#### TagGroup
|属性|描述|
|---|---|
|header-text|标题栏显示文字|
|btn-text|右上方按钮显示文案|
|value|热门搜索或历史搜索数据|

|事件|描述|
|---|---|
|changeHotSearch|换一批热门搜索数据|
|clearHistorySearch|清除历史记录数据|
|onTagClick|标签点击事件|

注：通过是否有相关数据和SearchList数据展示组件

#### SearchList

|属性|描述|
|---|---|
|data|展示搜索后的列表数据|

注：通过列表数据展示

## 知识点
[REF属性](https://cn.vuejs.org/v2/api/#ref)
TIPS: 若属性置于 DOM 元素则引用该元素，若用于子组件则调用子组件实例，不能用户模板中做数据绑定

