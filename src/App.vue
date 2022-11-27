<template>
  <div class="app">
    <mainA></mainA>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ElConfigProvider } from "element-plus";
import mainA from "./views/main/main.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
export default defineComponent({
  name: "App",
  components: {
    ElConfigProvider,
    mainA,
  },
  setup() {
    return {
      locale: zhCn,
    };
  },
});
</script>



<style lang="less">
.app {
  height: 100%;
}
</style>


