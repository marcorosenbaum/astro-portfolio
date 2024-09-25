import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://marcorosenbaum.com',
  integrations: [
    react(),
    tailwind(),
    icon(),
    sitemap({
      filter: (page) => !page.includes('/exclude-this-page'),
      serialize: (page) => {
        return {
          url: page,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
