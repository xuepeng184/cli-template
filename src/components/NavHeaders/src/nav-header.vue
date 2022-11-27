<template>
  <div class="nav-header">
    <i class="fold-menu" @click="handleCLickChange">
      <Fold style="height: 20px; width: 20px" v-show="!isFold" />
      <Expand style="height: 20px; width: 20px" v-show="isFold" />
    </i>
    <div class="content">xp后台模板</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import xpBread from "@/base-ui/bread/index";
export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false);
    const handleCLickChange = () => {
      isFold.value = !isFold.value;
      emit("foldChange", isFold.value);
    };

    return {
      handleCLickChange,
      isFold,
    };
  },
  components: {
    xpBread,
  },
});
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
.fold-menu {
  cursor: pointer;
}
</style>