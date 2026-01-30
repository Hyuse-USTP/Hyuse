// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://hyuse-ustp.github.io',
  // Only add the base path for production builds (GitHub Pages)
  // This ensures 'npm run dev' works at http://localhost:4321/
  base: process.env.NODE_ENV === 'production' ? '/major-mercury' : '/',
});