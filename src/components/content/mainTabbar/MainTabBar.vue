<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home">
        <div slot="item-icon" class="iconfont iconshouye"></div>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/Category">
        <div
          slot="item-icon"
          class="iconfont iconleimupinleifenleileibie2"
        ></div>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/Cart">
        <div slot="item-icon" class="iconfont icongouwuchezhengpin"></div>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/Profile">
        <div slot="item-icon" class="iconfont iconwode2"></div>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/tabbar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
