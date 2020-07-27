<template>
  <div id="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active: index === currentIndex}"
      @click="tabControlClick(index)"
    >
      <span>{{item}}</span>
    </div>

  </div>

</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    tabControlClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>>

<style>
#tab-control {
  display: flex;
  text-align: center;
  font-size: 16px;
  height: 44px;
  line-height: 44px;
}

.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-tint);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>