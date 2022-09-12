import Vue from 'vue'
import Vuex from 'vuex'
import moduleUser from './user.js'
import moduleCart from './cart.js'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    //    购物车模块中 cart 数组的访问路径是 m_cart/cart
    m_cart: moduleCart,
    // 挂载用户的 vuex 模块，访问路径为 m_user
    m_user: moduleUser,
  },
})

export default store
