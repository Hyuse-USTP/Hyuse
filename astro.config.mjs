// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isBuild = process.argv.includes('build');
const isGitHubActions = !!process.env.GITHUB_ACTIONS;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    assets: 'assets', // Renames '_astro' folder to 'assets' to avoid GitHub Pages ignore issues
  },
  site: 'https://hyuse-ustp.github.io',
  base: (isBuild || isGitHubActions) ? '/Hyuse' : '/',
});