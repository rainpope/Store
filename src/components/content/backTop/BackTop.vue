<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  position: absolute;
  bottom: 55px;
  right: 10px;
  z-index: 9999;
}
.back-top img{
  width: 40px;
}
</style>
