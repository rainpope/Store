<template>
  <div id="tabBar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "tabbar",
  components: {
    TabBarItem
  }
};
</script>

<style>
#tabBar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
}
</style>
