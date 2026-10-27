import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://patagoniahack.com.ar',
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
  devToolbar: {
    enabled: false
  }
});