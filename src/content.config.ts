import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 每个栏目是一个独立的内容集合（content collection），
// 对应 src/content/ 下的一个文件夹，往文件夹里加 .md 文件即发布新内容。

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    tech: z.array(z.string()).default([]),
    url: z.string().url().optional(),
  }),
});

export const collections = { posts, notes, projects };
