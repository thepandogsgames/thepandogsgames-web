import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpine from "@astrojs/alpinejs";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://thepandogsgames.com',
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en", "gal"],
  },
  integrations: [alpine(), tailwind(), sitemap()],
});
