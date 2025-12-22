// src/content/config.ts
import { z, defineCollection } from "astro:content";

const eventSchema = z.object({
  title: z.string(),
  // slug 不强制写在 frontmatter，页面将用 entry.slug 作为路由参数
  start: z.string().datetime({ offset: true }), // ISO 8601
  end: z.string().datetime({ offset: true }).optional(), // 可选：无则默认用 start 渲染
  location: z
    .object({
      name: z.string(),
      address: z.string().optional(),
      geo: z.tuple([z.number(), z.number()]).optional(), // [lat, lng]
    })
    .optional(),
  tags: z.array(z.string()).default([]),
  register_url: z.string().url().optional(),
  cover: z.string().optional(), // /images/events/xxx.jpg
  summary: z.string().optional(),
  facebook_post_url: z.string().url().optional(),
  a11y_notes: z.string().optional(),
  published: z.boolean().default(true),
});

const recapSchema = z.object({
  title: z.string(),
  date: z.string(), // YYYY-MM-DD
  gallery: z.array(z.string()).default([]),
  summary: z.string().optional(),
  facebook_post_url: z.string().url().optional(),
  published: z.boolean().default(true),
});

const pageSchema = z.object({
  title: z.string(),
  published: z.boolean().default(true),
});

export const collections = {
  events: defineCollection({ type: "content", schema: eventSchema }),
  recap: defineCollection({ type: "content", schema: recapSchema }),
  pages: defineCollection({ type: "content", schema: pageSchema }),
};
