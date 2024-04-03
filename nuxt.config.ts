// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-quasar-ui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: ['en', 'ko'], // used in URL path prefix
    defaultLocale: 'ko', // default locale of your project for Nuxt pages and routings
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
  },
  quasar: {
    plugins: ['Notify'],
    config: {
      notify: {
        position: 'top-right',
      },
    },
  },
  imports: {
    // presets: [
    //   {
    //     from: 'vue-i18n',
    //     imports: ['useI18n'],
    //   },
    // ],
  },
  ssr: true, // universal로 동작함(server-side + client-side)
  // ssr: false, // SPA로동작함
  app: {
    head: {
      title: 'Vue & Nuxt 강의',
      meta: [
        {
          name: 'description',
          content: '짐코딩 Vue&Nuxt 강의입니다.',
        },
      ],
    },
  },
});
