// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real domain before going live.
const SITE_URL = 'https://www.example.it';

export default defineConfig({
  site: SITE_URL,
  // Italian is the default language and lives at the root (/servizi, /contatti…).
  // English pages can be added later under src/pages/en/ (→ /en/...).
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'it', locales: { it: 'it-IT', en: 'en-US' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
