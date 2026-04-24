// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Agregamos esta línea para el despliegue
  site: 'https://patagoniahack.com.ar', 
  vite: {
    plugins: [tailwindcss()]
  }
});