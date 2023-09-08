/**
 * @file Nuxt config
 * @see https://nuxt.com/docs/api/configuration/nuxt-config
 */

import { META } from './constants'

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@unocss/nuxt'],

  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  app: {
    head: {
      title: META.appName,
      viewport: 'width=device-width,initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/icon_48.png' }],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: META.appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  nitro: {
    preset: 'vercel-edge',

    prerender: {
      routes: ['/'],
    },

    publicAssets: [],
  },

  css: ['@unocss/reset/tailwind.css'],

  // ssr: false,

  devtools: { enabled: false },

  routeRules: {},

  $production: {
    routeRules: {},
  },
})
