import cnzzAnalytics from 'vue-cnzz-analytics'

export default ({ Vue, router }) => {
  Vue.use(cnzzAnalytics, {
    router: router,
    siteIdList: [
      1279667282
    ],
    isDebug: false
  });
};