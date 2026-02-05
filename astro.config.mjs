// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const isVercel = !!process.env.VERCEL;

export default defineConfig({
  output: "static",
  adapter: vercel({ output: "static" }),
  vite: { plugins: [tailwindcss()] },

  //  Vercel：部署在根目錄 /
  // ✅GitHub Pages：部署在 /coi-website/
  site: isVercel ? undefined : "https://lbai45993-gif.github.io",
  base: isVercel ? "/" : "/coi-website/",
});


// import { defineConfig } from "astro/config";
// import vercel from "@astrojs/vercel";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   output: "static",
//   adapter: vercel({ output: "static" }),
//   vite: { plugins: [tailwindcss()] },
// });
