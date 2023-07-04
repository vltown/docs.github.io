import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { gitPlugin } from '@vuepress/plugin-git'
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Vltown官网",
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
