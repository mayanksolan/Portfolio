import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://mayanksolan.github.io/Portfolio',
  base: '/Portfolio/',
  trailingSlash: 'ignore',
});
