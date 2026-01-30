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
  site: 'https://hyuse-ustp.github.io',
  base: (isBuild || isGitHubActions) ? '/major-mercury' : '/',
});