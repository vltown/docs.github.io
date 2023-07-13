import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "小镇成长记",
    icon: "map",
    link: "Town",
  },
  {
    text: "规则",
    icon: "calculate",
    // prefix: "/规则/",
    link: "规则",
  },
]);
