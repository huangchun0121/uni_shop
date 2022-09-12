<template>
  <view>
    <view class="search-box">
      <my-search @click="gotoSearch()"></my-search>
    </view>
    <!--轮播图区域-->
    <swiper class="swipers" indicator-dots autoplay interval="3000" duration="1000" circular>
      <swiper-item v-for="(item,i) in swiperList" :key="i">
        <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
          <!-- 动态绑定图片的 src 属性 -->
          <image :src="item.image_src"></image>
        </navigator>
      </swiper-item>
    </swiper>

    <!--分类导航区域-->
    <view class="nav-list">
      <view class="nav-item" v-for="(item,i) in navList" :key="i" @click="navClickHandler(item)">
        <image :src="item.image_src" class="nav-img"></image>
        <text class="nav-text">{{item.name}}</text>
      </view>
    </view>

    <!-- 楼层区域 -->
    <view class="floor-list">
      <!-- 楼层 item 项 -->
      <view class="floor-item" v-for="(item, i) in floorList" :key="i">
        <!-- 楼层标题 -->
        <image :src="item.floor_title.image_src" class="floor-title"></image>

        <!-- 楼层图片区域 -->
        <view class="floor-img-box">
          <!-- 左侧大图片的盒子 -->
          <navigator class="left-img-box" :url="item.product_list[0].navigator_url">
            <image :src="item.product_list[0].image_src" :style="{width: item.product_list[0].image_width + 'rpx'}"
              mode="widthFix"></image>
          </navigator>
          <!-- 右侧 4 个小图片的盒子 -->
          <view class="right-img-box">
            <navigator class="right-img-item" v-for="(item2, i2) in item.product_list" :key="i2" v-if="i2 !== 0"
              :url="item2.navigator_url">
              <image :src="item2.image_src" mode="widthFix" :style="{width: item2.image_width + 'rpx'}"></image>
            </navigator>
          </view>
        </view>

      </view>
    </view>

  </view>
</template>

<script>
  import badgeMix from '@/mixins/tabbar-badge.js'
  export default {
    mixins: [badgeMix],
    data() {
      return {
        //轮播图的数据
        swiperList: [{
          "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
          "open_type": "navigate",
          "goods_id": 129,
          "navigator_url": "/subpkg/goods_detail/goods_detail?goods_id=129"
        }, {
          "image_src": "https://api-hmugo-web.itheima.net/pyg/banner1.png",
          "open_type": "navigate",
          "goods_id": 130,
          "navigator_url": "/subpkg/goods_detail/goods_detail?goods_id=130"
        }],
        //分类导航区
        navList: [{
            "name": "分类",
            "image_src": "/static/nav_icons/nav_icon1.png",
          },
          {
            "name": "秒杀拍",
            "image_src": "/static/nav_icons/nav_icon2.png"
          },
          {
            "name": "超市购",
            "image_src": "/static/nav_icons/nav_icon3.png"
          },
          {
            "name": "母婴品",
            "image_src": "/static/nav_icons/nav_icon4.png"
          }
        ],
        //获取楼层数据
        floorList: [{
            "floor_title": {
              "name": "时尚女装",
              "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor01_title.png"
            },
            "product_list": [{
                "name": "优质服饰",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor01_1@2x.png",
                "image_width": "232",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=服饰"
              },
              {
                "name": "春季热门",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor01_2@2x.png",
                "image_width": "233",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=热"
              },
              {
                "name": "爆款清仓",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor01_3@2x.png",
                "image_width": "233",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=爆款"
              },
              {
                "name": "倒春寒",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor01_4@2x.png",
                "image_width": "233",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=春季"
              },
              {
                "name": "怦然心动",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor01_5@2x.png",
                "image_width": "233",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=心动"
              }
            ]
          },
          {
            "floor_title": {
              "name": "户外活动",
              "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor02_title.png"
            },
            "product_list": [{
                "name": "勇往直前",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor02_1@2x.png",
                "image_width": "232",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=户外"
              },
              {
                "name": "户外登山包",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor02_2@2x.png",
                "image_width": "273",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=登山包"
              },
              {
                "name": "超强手套",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor02_3@2x.png",
                "image_width": "193",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=手套"
              },
              {
                "name": "户外运动鞋",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor02_4@2x.png",
                "image_width": "193",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=运动鞋"
              },
              {
                "name": "冲锋衣系列",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor02_5@2x.png",
                "image_width": "273",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=冲锋衣"
              }
            ]
          },
          {
            "floor_title": {
              "name": "箱包配饰",
              "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor03_title.png"
            },
            "product_list": [{
                "name": "清新气质",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor03_1@2x.png",
                "image_width": "232",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=饰品"
              },
              {
                "name": "复古胸针",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor03_2@2x.png",
                "image_width": "263",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=胸针"
              },
              {
                "name": "韩版手链",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor03_3@2x.png",
                "image_width": "203",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=手链"
              },
              {
                "name": "水晶项链",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor03_4@2x.png",
                "image_width": "193",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=水晶项链"
              },
              {
                "name": "情侣表",
                "image_src": "https://api-ugo-web.itheima.net/pyg/pic_floor03_5@2x.png",
                "image_width": "273",
                "open_type": "navigate",
                "navigator_url": "/subpkg/goods_list/goods_list?query=情侣表"
              }
            ]
          }
        ]
      }
    },
    methods: {
      //获取轮播图数据
      // async getSwiperList(){
      //   const {data:res} = await uni.$http.get('/api/public/v1/home/swiperdata')
      //   if(res.meta.status == 200){
      //     this.swiperList = res.message
      //   }else{
      //     return uni.$showMsg();
      //   }
      // },

      //获取分类导航区数据
      // async getNavList(){
      //   const {data:res} = await uni.$http.get('/api/public/v1/home/catitems');
      //   if(res.meta.status == 200){
      //     this.navList = res.message
      //   }else{
      //     return uni.$showMsg()
      //   }
      // },

      //搜索点击事件
      gotoSearch() {
        uni.navigateTo({
          url: '/subpkg/search/search'
        })
      },

      //分类导航的点击事件
      navClickHandler(item) {
        if (item.name === '分类') {
          uni.switchTab({
            url: '/pages/cate/cate'
          })
        }
        if (item.name === '秒杀拍') {
          uni.switchTab({
            url: '/pages/cate/cate'
          })
        }
        if (item.name === '超市购') {
          uni.switchTab({
            url: '/pages/cate/cate'
          })
        }
        if (item.name === '母婴品') {
          uni.switchTab({
            url: '/pages/cate/cate'
          })
        }
      },

      //楼层数据获取
      // async getFloorList(){
      //   const{data:res} = await uni.$http.get('/api/public/v1/home/floordata')
      //   if(res.meta.status !==200) return uni.$ShowMsg()

      // 通过双层 forEach 循环，处理 URL 地址
      // res.message.forEach(floor => {
      //   floor.product_list.forEach(prod => {
      //     prod.url = '/subpkg/goods_list/goods_list?' + prod.navigator_url.split('?')[1]
      //   })
      // })

      //   this.floorList = res.message
      // }

    },
    onLoad() {
      // this.getSwiperList()
      // this.getNavList()
      // this.getFloorList()
    }
  }
</script>

<style lang="scss">
  //搜索框吸顶效果
  .search-box {
    // 设置定位效果为“吸顶”
    position: sticky;
    // 吸顶的“位置”
    top: 0;
    // 提高层级，防止被轮播图覆盖
    z-index: 999;
  }

  .swipers {
    height: 330rpx;
  }

  .swiper-item,
  image {
    width: 100%;
    height: 100%;
  }

  .nav-list {
    display: flex;
    justify-content: space-around;
    margin: 15px 0
  }

  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-img {
    width: 90rpx;
    height: 90rpx;
  }

  .nav-text {
    font-size: 24rpx;
    margin-top: 4rpx;
  }

  .floor-title {
    height: 60rpx;
    width: 100%;
    display: flex;
  }

  .right-img-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .floor-img-box {
    display: flex;
    padding-left: 10rpx;
  }
</style>
