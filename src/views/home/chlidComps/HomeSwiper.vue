<template>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a :href="item.url">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/banner/index";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
}
</script>