import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import vercel from "@astrojs/vercel/edge";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [image()],
  adapter: vercel(),
});
