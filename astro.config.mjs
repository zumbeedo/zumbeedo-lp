import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://zumbeedo.com.br',
  base: '/zumbeedo-lp',
  integrations: [tailwind()]
});
