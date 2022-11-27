const {
  defineConfig
} = require("@vue/cli-service");
const path = require("path");
//自动导入element-plus需要的依赖
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const {
  ElementPlusResolver
} = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  //配置element-plus自动导入
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: "@/components",
      },
    },
  },
});