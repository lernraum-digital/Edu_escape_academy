import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Edu_escape_academy/',
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
