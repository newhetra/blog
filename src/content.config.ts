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


const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    summary: z.string().default(''),
    repo: z.string().default(''),
    license: z.string().default(''),
    version: z.string().default('v1'),
    category: z.string().default('开源工具'),
  }),
});

const mirror = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mirror' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    original: z.string().default(''),
    platforms: z.array(z.string()).default([]),
  }),
});

export const collections = { posts, notes, projects, resources, mirror };
