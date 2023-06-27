import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3141 // Gwynn
  },
  integrations: [mdx()]
});