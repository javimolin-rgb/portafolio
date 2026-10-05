// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Publicado en GitHub Pages: https://javimolin-rgb.github.io/portafolio/
// Con dominio propio: cambia `site` y deja `base` en '/'.
export default defineConfig({
  site: 'https://javimolin-rgb.github.io',
  base: '/portafolio',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  image: { responsiveStyles: false },
  devToolbar: { enabled: false },
});
