import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";
import { imagetools } from "vite-imagetools";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  adapter: vercel(),
  vite: {
    plugins: [imagetools()],
  },
});
