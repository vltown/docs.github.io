import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",

  locales: {
    /*"/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },*/
    "/": {
      lang: "zh-CN",
      title: "skimit服务器中文文档",
      //description: "skimit服务器中文文档",
    },
  },
  theme,
  plugins: [
    gitPlugin({
      updatedTime: false
    })
  ],

  shouldPrefetch: false,
});
