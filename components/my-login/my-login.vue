<template>
  <view class="login-container">
    <!-- 提示登录的图标-->
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <!-- 登录提示按钮-->
    <button type="primary" class="btn-login" open-type="getUserInfo" @getuserinfo="getUserInfo">一键登录</button>
    <!-- 登录提示-->
    <view class="tips-text">登录后尽享更多权益</view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  import loginResult from '../../Json/login.js'
  export default {
    name: "my-login",
    data() {
      return {

      };
    },
    computed: {
      ...mapState("m_user", ['redirectInfo'])
    },
    methods: {
      // 1. 使用 mapMutations 辅助方法，把 m_user 模块中的 updateToken 方法映射到当前组件中使用
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateRedirectInfo']),
      //获取用户的基本信息，用户授权之后
      getUserInfo(e) {
        // 判断是否获取用户信息成功
        if (e.detail.errMsg === 'getUserInfo:fail auth deny') return uni.$showMsg('您取消了登录授权！')

        // 获取用户信息成功， e.detail.userInfo 就是用户的基本信息
        this.updateUserInfo(e.detail.userInfo),
          // console.log(loginResult.message.token)
          //获取登录成功后的token字符串
          this.getToken(e.detail)
      },
      async getToken(info) {
        const [err, res] = await uni.login().catch(err => err)
        // 判断是否 uni.login() 调用失败
        if (err || res.errMsg !== 'login:ok') return uni.$showError('登录失败！'),
          // 准备参数对象
          // const query = {
          //     code: res.code,
          //     encryptedData: info.encryptedData,
          //     iv: info.iv,
          //     rawData: info.rawData,
          //     signature: info.signature
          //   },

          //换取token
          // const { data: loginResult } = await uni.$http.post('/api/public/v1/users/wxlogin', query)
          // if (loginResult.meta.status !== 200)
          //   return uni.$showMsg("登录失败！"),
          // 2. 更新 vuex 中的 token
          this.updateToken(loginResult.message.token),
          //登录成功则跳转到相应页面
          this.navigateBack()
      },
      navigateBack() {
        if (this.redirectInfo && this.redirectInfo.openType === 'switchTab') {
          uni.switchTab({
            url: this.redirectInfo.from,
            complete: () => {
              this.updateRedirectInfo(null)
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss">
  .login-container {
    width: 100%;
    height: 800rpx;
    background-color: #e0e0e0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 40px;
      background-color: whitesmoke;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 100%;
      transform: translateY(50%);
    }

    .btn-login {
      width: 90%;
      border-radius: 100px;
      margin: 15px 0;
      background-color: #C00000;
    }

    .tips-text {
      font-size: 12px;
      color: gray;
    }
  }
</style>
