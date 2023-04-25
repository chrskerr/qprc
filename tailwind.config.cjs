/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      pink: {
        900: "#ff00c1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
