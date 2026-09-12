// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: 部署到 Cloudflare Pages 后，把 site 改成你的 pages.dev 正式地址（用于 sitemap 和 RSS 的绝对链接）
export default defineConfig({
  site: 'https://blog.pages.dev',
  integrations: [sitemap()],
});
