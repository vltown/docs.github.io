import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "教程",
    icon: "map",
    link: "教程",
  },
  {
    text: "规则",
    icon: "calculate",
    // prefix: "/规则/",
    link: "规则",
  },
]);
