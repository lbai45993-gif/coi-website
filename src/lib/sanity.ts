// src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ??
  process.env.PUBLIC_SANITY_PROJECT_ID;

const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ??
  process.env.PUBLIC_SANITY_DATASET;

const apiVersion =
  import.meta.env.PUBLIC_SANITY_API_VERSION ??
  process.env.PUBLIC_SANITY_API_VERSION ??
  "2024-01-01";

if (!projectId || !dataset) {
  throw new Error("Sanity env vars missing: projectId or dataset");
}

export const sanity = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}

// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// // ✅ 同时兼容：Astro 的 import.meta.env（本地/构建） + Vercel 的 process.env（构建时）
// const projectId =
//   import.meta.env.PUBLIC_SANITY_PROJECT_ID ?? process.env.PUBLIC_SANITY_PROJECT_ID;

// const dataset =
//   import.meta.env.PUBLIC_SANITY_DATASET ?? process.env.PUBLIC_SANITY_DATASET;

// const apiVersion =
//   import.meta.env.PUBLIC_SANITY_API_VERSION ?? process.env.PUBLIC_SANITY_API_VERSION;

// // ✅ 早失败：缺了就直接报清楚（比 Vercel log 好排查）
// if (!projectId) throw new Error("Missing PUBLIC_SANITY_PROJECT_ID");
// if (!dataset) throw new Error("Missing PUBLIC_SANITY_DATASET");
// if (!apiVersion) throw new Error("Missing PUBLIC_SANITY_API_VERSION");

// export const sanity = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true,
// });

// const builder = imageUrlBuilder(sanity);

// export function urlFor(source: any) {
//   return builder.image(source);
// }



