// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config';
import globImporter from 'sass-glob-importer';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
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
});
