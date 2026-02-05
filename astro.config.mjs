// astro.config.mjs
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  adapter: vercel({ output: "static" }),

  // ✅ 在 Vercel 上建議先不要设 base/site（除非你就是要挂在 /coi-website/ 子路径）
  // site: "https://your-domain.com",
  // base: "/coi-website/",

  vite: {
    plugins: [tailwindcss()],
  },
});


// // @ts-check
// import { defineConfig } from "astro/config";
// import vercel from "@astrojs/vercel/static";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   site: "https://lbai45993-gif.github.io",
//   base: "/coi-website/",
//   output: "static",

//   adapter: vercel({}),

//   vite: {
//     plugins: [tailwindcss()],
//   },
// });
