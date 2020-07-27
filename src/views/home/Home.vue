<template>
  <div id="home">
    <!-- 顶部nav -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners" />
      <!-- 推荐栏 -->
      <recommend-view :recommends="recommends" />
      <!-- 特色栏 -->
      <feature-view />
      <!-- 商品列表控制 -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="home-tab-control"
      ></tab-control>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
      </ul>
    </scroll>

    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 引入公共组件
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
// 引入首页组件
import HomeSwiper from "./chlidComps/HomeSwiper";
import RecommendView from "./chlidComps/RecommendView";
import FeatureView from "./chlidComps/FeatureView";
// 引入网络方法
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    TabControl,
    Scroll,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      isShowBackTop: false
    };
  },
  // 初始化完组件后发送网络请求
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners);
      // console.log(this.recommends);
    });
  },
  methods: {
    /**
     * 返回顶部
     */
    backTop() {
      // 拿到组件对象，使用组件对象的scrollTo方法(x,y,time)
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 360;
    }
  }
};
</script>

<style scoped>
/* 让顶部和底部不被遮挡 */
#home {
  padding-top: 44px;
  padding-bottom: 49px;
}

/* 首页顶部样式 */
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9999;
}
.home-tab-control {
  position: sticky;
  top: 44px;
  background-color: #fff;
}
.content {
  height: calc(100vh - 93px);
}
</style>
