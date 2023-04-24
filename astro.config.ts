import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [image()],
  adapter: vercel(),
});
