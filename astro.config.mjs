import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://active-matter-guide.vercel.app',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
