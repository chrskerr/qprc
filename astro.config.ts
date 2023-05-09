import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";
import { imagetools } from "vite-imagetools";
import tailwind from "@astrojs/tailwind";
import { baseUrl } from "./src/lib/constants";

// https://astro.build/config
export default defineConfig({
  site: baseUrl,
  output: "server",
  integrations: [tailwind()],
  adapter: vercel({
    analytics: true,
  }),
  vite: {
    plugins: [imagetools()],
  },
});
