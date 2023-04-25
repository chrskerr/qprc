import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), image()],
  adapter: vercel(),
});
