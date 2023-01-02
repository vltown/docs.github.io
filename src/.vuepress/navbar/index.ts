import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "历史",
    icon: "blog",
    prefix: "历史/",
    link: "历史",
    children: [
      {
        text: "2019年",
        prefix: "2019/",
        children: [
          { text: "8月", link: "08" },
          { text: "9月", link: "09" },
          { text: "10月", link: "10" },
          { text: "11月", link: "11" },
          { text: "12月", link: "12" },
        ]
      },
      {
        text: "2020年",
        prefix: "2020/",
        children: [
          { text: "1月", link: "01" },
          { text: "2月", link: "02" },
          { text: "3月", link: "03" },
          { text: "4月", link: "04" },
          { text: "5月", link: "05" },
          { text: "6月", link: "06" },
          { text: "7月", link: "07" },
          { text: "8月", link: "08" },
          { text: "9月", link: "09" },
          { text: "10月", link: "10" },
          { text: "11月", link: "11" },
          { text: "12月", link: "12" },
        ]
      },
      {
        text: "2021年",
        prefix: "2021/",
        children: [
          { text: "1月", link: "01" },
          { text: "2月", link: "02" },
          { text: "3月", link: "03" },
          { text: "4月", link: "04" },
          { text: "5月", link: "05" },
          { text: "6月", link: "06" },
          { text: "7月", link: "07" },
          { text: "8月", link: "08" },
          { text: "9月", link: "09" },
          { text: "10月", link: "10" },
          { text: "11月", link: "11" },
          { text: "12月", link: "12" },
        ]
      },
      {
        text: "2022年",
        prefix: "2022/",
        children: [
          { text: "1月", link: "01" },
          { text: "2月", link: "02" },
          { text: "3月", link: "03" },
          { text: "4月", link: "04" },
          { text: "5月", link: "05" },
          { text: "6月", link: "06" },
          { text: "7月", link: "07" },
          { text: "8月", link: "08" },
          { text: "9月", link: "09" },
          { text: "10月", link: "10" },
          { text: "11月", link: "11" },
          { text: "12月", link: "12" },
        ]
      },
      {
        text: "2023年",
        prefix: "2023/",
        children: [
          { text: "1月", link: "01" },
        ]
      },
    ],
  },
  {
    text: "指南",
    icon: "discover",
    prefix: "指南/",
    children: [
      {
        text: "玩家",
        prefix: "玩家/",
        link: "玩家"
        //children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "地点",
        prefix: "地点/",
        link: "地点"
        //children: ["ray", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "指令",
        prefix: "指令/",
        link: "指令"
        //children: ["ray", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "机器",
        prefix: "机器/",
        link: "机器"
        //children: ["ray", { text: "...", icon: "more", link: "" }],
      }

    ],
  },
  {
    text: "网页地图",
    icon: "map",
    link: "https://bluemap.skimit.cn",
  },
  {
    text: "官网",
    icon: "note",
    link: "https://skimit.cn",
  },
]);
