import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";
import { imagetools } from "vite-imagetools";
import tailwind from "@astrojs/tailwind";
import { baseUrl } from "./src/lib/constants";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: baseUrl,
  output: "server",
  integrations: [
    tailwind(),
    prefetch({
      selector: "a[href^='/']",
    }),
  ],
  adapter: vercel({
    analytics: true,
  }),
  vite: {
    plugins: [imagetools()],
  },
});
