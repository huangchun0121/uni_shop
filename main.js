// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import {
  $http
} from '@escook/request-miniprogram'
import store from './store'

uni.$http = $http
// 配置请求根路径
// $http.baseUrl = '' //这里根据自己的接口地址进行填写

// 请求拦截器：请求开始之前做一些事情
// $http.beforeRequest = function(options) {
//   uni.showLoading({
//     title: '数据加载中...',
//   })

// console.log(option),
//判断请求的是否是为有权限的API接口
// if (option.url.indexOf('/my/') !== -1) {
//   //为请求头添加身份认证字段
//   option.header = {
//     //字段的值可以直接从vuex中进行获取
//     Authorization: store.state.m_user.token,
//   }
// }

// }

// 响应拦截器：请求完成之后做一些事情
// $http.afterRequest = function() {
//   uni.hideLoading()
// }

// 封装的展示消息提示的方法
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  //将store挂载到vue实例上
  store,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
