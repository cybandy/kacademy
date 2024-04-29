// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 443,
    host: 'kacademy.local',
    https: {
      key: './ssl/kacademy.local-key.pem',
      cert: './ssl/kacademy.local.pem',
    },
  },
  css: [
    '~/assets/css/main.css',
  ],

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxt/fonts',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  ui: {

  },
  colorMode: {
    preference: 'light',
  },
  fonts: {
    families: [
      {
        name: 'DM Sans', provider: 'google',
      },
    ],
  },
  image: {
    quality: 90,
    format: ['webp', 'avif', 'png', 'jpg'],
    domains: [
      'images.unsplash.com', 'images.pexels.com'
    ]
  }
})
