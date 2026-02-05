// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://lbai45993-gif.github.io",
  base: "/coi-website/",
  output: "static",

  adapter: vercel({}),

  vite: {
    plugins: [tailwindcss()],
  },
});
