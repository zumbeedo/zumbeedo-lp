import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://zumbeedo-lp.github.io',
  base: '/zumbeedo-lp',
  integrations: [tailwind()]
});
