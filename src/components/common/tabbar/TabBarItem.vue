<template>
  <div id="tabBarItem" class="tabBarItem" @click="item_click">
    <div :style="activeStyle" class="icon">
      <slot name="item-icon"></slot>
    </div>

    <div :style="activeStyle" class="text">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "#ff5777"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  },
  methods: {
    item_click() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style>
.tabBarItem {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
#tabBarItem .icon{
 font-size: 24px;
 margin-top: 4px;
}
</style>
