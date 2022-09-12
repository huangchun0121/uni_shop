<template>
  <view class="my-container">
    <!-- 登录页面-->
    <my-login v-if="!this.token"></my-login>
    <!-- 用户信息页面-->
    <!-- <my-userinfo v-else></my-userinfo> -->
    <my-userinfo v-else></my-userinfo>


    <!-- 面板区域-->
    <view class="panel-list" v-else>
      <!-- 第一个面板 -->
      <view class="panel">
        <!-- panel 的主体区域 -->
        <view class="panel-body">
          <!-- panel 的 item 项 -->
          <view class="panel-item">
            <text>8</text>
            <text>收藏的店铺</text>
          </view>
          <view class="panel-item">
            <text>14</text>
            <text>收藏的商品</text>
          </view>
          <view class="panel-item">
            <text>18</text>
            <text>关注的商品</text>
          </view>
          <view class="panel-item">
            <text>84</text>
            <text>足迹</text>
          </view>
        </view>
      </view>
      <!-- 第二个面板-->
      <view class="panel">
        <!-- 面板的标题 -->
        <view class="panel-title">我的订单</view>
        <!-- 面板的主体 -->
        <view class="panel-body">
          <!-- 面板主体中的 item 项 -->
          <view class="panel-item">
            <image src="/static/my_icons/icon1.png" class="icon"></image>
            <text>待付款</text>
          </view>
          <view class="panel-item">
            <image src="/static/my_icons/icon2.png" class="icon"></image>
            <text>待收货</text>
          </view>
          <view class="panel-item">
            <image src="/static/my_icons/icon3.png" class="icon"></image>
            <text>退款/退货</text>
          </view>
          <view class="panel-item">
            <image src="/static/my_icons/icon4.png" class="icon"></image>
            <text>全部订单</text>
          </view>
        </view>
      </view>
      <!-- 第三个面板 -->
      <view class="panel">
        <view class="panel-list-item">
          <text>收货地址</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item">
          <text>联系客服</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item" @click="logout">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import badgeMix from '@/mixins/tabbar-badge.js'
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    mixins: [badgeMix],
    computed: {
      ...mapState('m_user', ['token'])
    },
    data() {
      return {

      }
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateAddress']),
      // 退出登录
      async logout() {
        // 询问用户是否退出登录
        const [err, succ] = await uni.showModal({
          title: '提示',
          content: '确认退出登录吗？'
        }).catch(err => err)

        if (succ && succ.confirm) {
          // 用户确认了退出登录的操作
          // 需要清空 vuex 中的 userinfo、token 和 address
          this.updateUserInfo({})
          this.updateToken('')
          this.updateAddress({})
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-container {
    height: 100%;

    .panel-list {
      padding: 0 10px;
      position: relative;
      top: -10px;

      .panel {
        background-color: white;
        border-radius: 3px;
        margin-bottom: 8px;

        .panel-title {
          line-height: 45px;
          padding-left: 10px;
          font-size: 15px;
          border-bottom: 1px solid #f4f4f4;
        }

        .panel-body {
          display: flex;
          justify-content: space-around;

          .panel-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 13px;
            padding: 10px 0;
          }

          .icon {
            width: 35px;
            height: 35px;
          }
        }
      }

    }

    .panel-list-item {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      padding: 0 10px;
    }
  }
</style>
