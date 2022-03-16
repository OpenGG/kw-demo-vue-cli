const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@ks/kw": path.resolve(__dirname, "./k"),
        "@ks/kwcolor": path.resolve(__dirname, "./k"),
      },
    },
  },
});
