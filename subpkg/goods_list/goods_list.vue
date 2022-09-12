<template>
  <view>
    <view class="goods-list">
      <view v-for="(item, i) in goodsList" :key="i" @click="gotoDetail(item)">
        <my-goods :goods="item"></my-goods>
      </view>
    </view>
  </view>
</template>

<script>
  import goodslist from '../../Json/goods-list.js'
  export default {
    data() {
      return {
        // 请求参数对象
        queryObj: {
          // 查询关键词
          query: '',
          // 商品分类Id
          cid: '',
          // 页码值
          pagenum: 1,
          // 每页显示多少条数据
          pagesize: 10
        },
        //商品列表数据
        goodsList: [

        ],
        //商品列表总数
        total: 0,
        // 是否正在请求数据
        isloading: false
      }
    },
    onLoad(options) {
      // // 将页面参数转存到 this.queryObj 对象中
      this.queryObj.query = options.query || ''
      this.queryObj.cid = options.cid || ''
      this.getGoodsList()
    },
    onReachBottom() {
      // 判断是否还有下一页数据
      if (this.queryObj.pagenum * this.queryObj.pagesize >= this.total) return uni.$showMsg('数据加载完毕！')
      // 判断是否正在请求其它数据，如果是，则不发起额外的请求
      if (this.isloading) return

      this.queryObj.pagenum += 1
      this.getGoodsList()
    },
    onPullDownRefresh() {
      this.queryObj.pagenum = 1,
        this.total = 0
      this.isloading = false
      this.goodsList = []

      this.getGoodsList(() => uni.stopPullDownRefresh())
    },
    methods: {
      // async getGoodsList(cb) {
      //   this.isloading = true // ** 打开节流阀
      //   const { data: res } = await uni.$http.get('/api/public/v1/goods/search', this.queryObj)
      //   this.isloading = false  // ** 关闭节流阀
      //   // 只要数据请求完毕，就立即按需调用 cb 回调函数
      //   cb && cb()

      //   if (res.meta.status !== 200) return uni.$showMsg()
      //   this.goodsList = [...this.goodsList, ...res.message.goods] // 为数据赋值：通过展开运算符的形式，进行新旧数据的拼接
      //   this.total = res.message.total
      // }

      getGoodsList(cb) {
        this.isloading = true // ** 打开节流阀
        // const { data: res } = await uni.$http.get('/api/public/v1/goods/search', this.queryObj)
        const res = goodslist
        this.isloading = false // ** 关闭节流阀
        // 只要数据请求完毕，就立即按需调用 cb 回调函数
        cb && cb()

        if (res.meta.status !== 200) return uni.$showMsg()
        this.goodsList = [...this.goodsList, ...res.message.goods] // 为数据赋值：通过展开运算符的形式，进行新旧数据的拼接
        this.total = res.message.total
      },
      // 点击跳转到商品详情页面
      gotoDetail(item) {
        uni.navigateTo({
          url: '../goods_detail/goods_detail?goods_id=' + item.goods_id
        })
      }
    }
  }
</script>

<style lang="scss">
  .goods-item {
    display: flex;
    padding: 10px 5px;
    border-bottom: 1px solid #f0f0f0;

    .goods-item-left {
      margin-right: 5px;

      .goods-pic {
        width: 100px;
        height: 100px;
        display: block;
      }
    }

    .goods-item-right {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .goods-name {
        font-size: 13px;
      }

      .goods-price {
        font-size: 16px;
        color: #c00000;
      }
    }
  }
</style>
