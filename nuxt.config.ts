// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import globImporter from 'sass-glob-importer';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/css/main.scss',
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n'],
  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: '',
    /**
     * Directory that the components live in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          importer: globImporter(),
          sourceMap: true, // Enable source maps
          sourceMapContents: true, // Include the source contents in the map
        },
      },
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    // lazy: true,
    langDir: 'locales',
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'en',
        file: 'en.json',
      },
      {
        code: 'ar',
        iso: 'ar',
        name: 'ar',
        file: 'ar.json',
      },
    ],
    vueI18n: './i18n.config.ts',
  },
});
