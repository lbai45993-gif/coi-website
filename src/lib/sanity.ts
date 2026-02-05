import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// 1) client 先定义好（顺序很重要）
export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION,
  useCdn: true,
});

// 2) builder 用 client 初始化
const builder = imageUrlBuilder(sanity);

// 3) 导出 urlFor 给页面用
export function urlFor(source: any) {
  return builder.image(source);
}