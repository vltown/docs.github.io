const { resolve } = require('path')
const r = (path) => resolve(__dirname, path)
module.exports = {
  theme: 'antdocs',
  markdown: {
    toc: { includeLevel: [2, 3] },
  },
  head: [
    [
      "script",
      {
        src: '/assets/js/mc-player-counter.js'
      }
    ],
    [
      "script",
      {
        src: '/assets/js/runtime.js'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/title.ico'
      }
    ],
  ],
  plugins: {
    '@vuepress/plugin-back-to-top': {},
    'graysite': {
      startDate: '2021-12-13 00:00:00',
      endDate: '2021-12-13 23:59:59'
    },
  },
  locales: {
    /*'/en/': {
      lang: 'en-US',
      title: 'skimit server',
      description: 'A Minecraft 1.17 vanilla survival server',
    },*/
    '/': {
      lang: 'zh-CN',
      title: 'skimit服务器',
      description:
        '一个Minecraft1.17原版公益生存服务器',
      serviceWorker: {
        updatePopup: {
          message: "发现新内容可用。",
          buttonText: "刷新"
        }
      }
    },
  },
  themeConfig: {
    logo: '/title.ico',
    //backToTop: true,
    displayAllHeaders: true,
    banner: '/banner.jpg',
    smoothScroll: true,
    /*ads:{
      style: 3, 
      title: '赞助商', 
      btnText: '成为赞助商',
      msgTitle: '成为赞助商',
      msgText: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在 AndDocs 文档侧边栏等页面。',
      msgOkText: '确定',
    },*/
    /*sidebar: {
      //'/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
      '/manual/': ['', 'general', 'route'],
      '/hacking/': ['', 'manuallybuild', 'cmake-argument'],
      '/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
      '/faq/': ['', 'v2ray-core'],
      '/en/getting-started/': ['', 'step1', 'step2', 'step3', 'step4', 'step5'],
      '/en/hacking/': ['', 'manuallybuild', 'cmake-argument', 'distribute'],
      '/en/manual/': ['', 'general', 'route'],
      '/en/plugins/': ['', 'usage', 'v2ray-integration', 'development'],
      '/en/faq/': ['', 'v2ray-core'],
    },*/
    locales: {
      /*'/en/': {
        selectText: '选择语言',
        ariaLabel: '选择语言',
        label: 'English',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
          {
            text: '',
            link: '',
          },
        ],
      },*/
      '/': {
        selectText: 'Languages',
        ariaLabel: 'Select language',
        label: '简体中文',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        contributorsLabel: '贡献者',
        nav: [
          {
            text: '指南',
            link: '/guide/',
          },
          {
            text: '服务器地图',
            link: '/map/',
          },
          {
            text: '规定',
            link: '/rules/',
          },
          {
            text: '捐助',
            link: '/donate/',
          },
        ],
      },
    },
    repo: 'skimitmc/skimit.cn',
    repoLabel: 'GitHub',
    docsRepo: 'skimitmc/skimit.cn',
    docsBranch: 'master',
    docsDir: '.',
    editLinks: true,
    
  }
}
