# 登录系统逻辑
* 示意图
   ![示意图](http://www.youbaobao.xyz/mpvue-docs/assets/img/auth.ee6f8530.png)
* 代码逻辑
    * 首页挂载时加载`init`函数，主要挂载用户登录授权
    * 用户选择允许授权，展示首页并加载首页数据
* 知识点
    - 通过 [button](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) 组件中的`open-type`属性与`bindgetuserinfo`事件触发获取用户授权
    - 通过 [wx.getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html) 获取用户选择的授权操作
    - 通过 [wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html) 获取用户`code`,再通过`code`获取用户`openid`
    - 通过`openid`注册用户信息，方便未来更新或查找用户数据做准备
* 资料
    - [小程序组件](https://developers.weixin.qq.com/miniprogram/dev/component/)
    - [小幕读书 API](http://www.youbaobao.xyz/mpvue-docs/api/)
