import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "服务器",
    icon: "study",
    // prefix: "/规则/",
    link: "docs",
  },
  {
    text: "皮肤站",
    icon: "snow",
    // prefix: "/规则/",
    link: "https://skin.vltown.com",
  },
  {
    text: "卫星地图",
    icon: "locate",
    // prefix: "/规则/",
    link: "http://map.vltown.com",
  },
  {
    text: "资源站",
    icon: "install",
    // prefix: "/规则/",
    link: "http://pan.vltown.com",
  }
]);
