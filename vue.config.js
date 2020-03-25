module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  // サブドメイン時のためのパラメータです。
  // ./ にすると assets は解決する。だけど spa が解決しなかった。
  publicPath: '/ptf-vue/'
}
