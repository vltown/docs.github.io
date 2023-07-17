import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "VLTown官网",
    },
  },
  theme,

  shouldPrefetch: false,
});
