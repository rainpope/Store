<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div id="recommend-item-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style >
.recommend {
  display: flex;
  text-align: center;
  padding: 15px 0 30px 0;
  border-bottom: 8px solid #eeeeee;
}
.recommend-item {
  flex: 1;
  font-size: 16px;
}
.recommend-item img {
  width: 70px;
}
#recommend-item-title {
  color: rgb(121, 117, 117);
}
</style>