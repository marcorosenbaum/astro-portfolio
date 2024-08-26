import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://marco-developer-portfolio.netlify.app',
  integrations: [react(), tailwind(), icon(), sitemap()],
  devToolbar: {
    enabled: false
  }
});