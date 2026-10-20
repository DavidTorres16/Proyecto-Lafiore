// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// En GitHub Pages el sitio vive en /<repo>/. El workflow define SITE_URL y BASE_PATH;
// en local quedan vacíos y el sitio se sirve desde la raíz.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  vite: { plugins: [tailwindcss()] },
});
