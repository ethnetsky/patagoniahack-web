import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://patagoniahack.com.ar',
  integrations: [tailwind()],
  prefetch: true,
  devToolbar: {
    enabled: false
  }
});