import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config

const LOCALES: any = [
  {
    code: 'en',
    name: 'English'
  },
  {
    code: 'es',
    name: 'Español'
  },
  {
    code: 'zh',
    name: '中文'
  },
  {
    code: 'ru',
    name: 'Русский'
  },
  {
    code: "de",
    name: "Deutsch"
  }
]

export default defineNuxtConfig({
  ssr: false,

  css: ['~/assets/styles/main.scss'],
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  // runtimeConfig: {
    // public: {
      // apiBase: process.env.NUXT_PUBLIC_API_BASE,
      // siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    // },
  // },
  modules: [
    '@nuxtjs/i18n',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    ['@nuxtjs/google-fonts', {
      families: {
        Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900]
      }
    }],
    'vue3-pixi-nuxt'
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devServer: {
    port: 3022
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    locales: LOCALES
  }
})
