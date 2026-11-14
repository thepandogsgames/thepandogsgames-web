import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import alpine from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://thepandogsgames.com',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['es', 'en', 'gal'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    alpine(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          gal: 'gl',
        },
      },
    }),
  ],
})
