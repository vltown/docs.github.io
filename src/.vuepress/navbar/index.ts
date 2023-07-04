import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "教程",
    icon: "map",
    prefix: "/账本/",
    link: "tutorial",
  },
  {
    text: "规则",
    icon: "calculate",
    prefix: "/规则/",
    link: "rule",
  },
]);
