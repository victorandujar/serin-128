// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL ?? 'https://serin128.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  // Català per defecte (com la web actual del negoci) i castellà a /es
  i18n: { defaultLocale: 'ca', locales: ['ca', 'es'], routing: { prefixDefaultLocale: false } },
  integrations: [sitemap({ i18n: { defaultLocale: 'ca', locales: { ca: 'ca-ES', es: 'es-ES' } } })],
  vite: { plugins: [tailwindcss()] },
});
