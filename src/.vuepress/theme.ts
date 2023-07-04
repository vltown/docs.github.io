import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";

export default hopeTheme({
  hostname: "https://vltown.com",

  //图标使用vuepress-theme-hope的iconfont精选图标（https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87）
  iconAssets: "iconfont",

  author: "xiaoccc",

  logo: "/logo.png",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  locales: {
    "/": {
      navbar: zhNavbar,

      sidebar: "heading",

      docsDir: "src",

      docsBranch: "v3",
    },
  },

  plugins: {
   
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      // imageLazyload: true,
      // imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/logo.png",
   
    },
  },
});
