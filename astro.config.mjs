import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://patagoniahack.com.ar',
  integrations: [tailwind()],
  prefetch: true,

  devToolbar: {
    enabled: false
  },

  adapter: cloudflare()
});