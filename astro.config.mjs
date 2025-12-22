// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://lbai45993-gif.github.io",
  base: "/coi-website/",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },
});
