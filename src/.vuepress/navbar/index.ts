import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // {
  //   text: "服务器",
  //   icon: "study",
  //   // prefix: "/规则/",
  //   link: "docs",
  // },
  {
    text: "皮肤站",
    icon: "snow",
    // prefix: "/规则/",
    link: "https://skin.vltown.com/?lang=zh_CN",
  },
  {
    text: "卫星地图",
    icon: "locate",
    // prefix: "/规则/",
    link: "http://map.vltown.com",
  },
  {
    text: "服务器宣传视频",
    icon: "install",
    // prefix: "/规则/",
    link: "https://www.bilibili.com/video/BV1uG411o7C9?t=3.2",
  }
]);
