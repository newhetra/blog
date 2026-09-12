# 我的博客

个人博客，基于 [Astro](https://astro.build) 构建，托管在 Cloudflare Pages（免费），push 到 GitHub 后自动部署。

## 三个独立栏目

每个栏目就是一个 Markdown 文件夹，**互相完全独立**，可以单独增删改、重命名、清空：

| 栏目 | 内容文件夹 | 页面 |
| ---- | ---------- | ---- |
| 文章 | `src/content/posts/` | `/posts/` |
| 随笔 | `src/content/notes/` | `/notes/` |
| 项目 | `src/content/projects/` | `/projects/` |

## 如何发布 / 编辑内容

1. **发布**：往对应栏目文件夹里新建一个 `.md` 文件（文件名即 URL，建议英文小写加连字符），顶部 frontmatter 参考现有文章复制修改：

   ```markdown
   ---
   title: 标题
   description: 一句话摘要（可选）
   pubDate: 2026-09-12
   tags: [标签1, 标签2]
   ---

   正文用 Markdown 写……
   ```

   「项目」栏目额外支持 `tech: [技术栈]` 和 `url: https://...`（项目主页链接）字段。

2. **编辑**：直接修改对应的 `.md` 文件。
3. **删除**：删掉对应 `.md` 文件即可。
4. **更新线上**：`git add . && git commit -m "新文章" && git push`，Cloudflare 会在一两分钟内自动重新部署。

## 本地预览

```sh
npm install        # 首次运行前安装依赖
npm run dev        # 启动开发服务器 http://localhost:4321
npm run build      # 构建到 dist/
npm run preview    # 本地预览构建产物
```

## 站点配置

- **站名 / 简介 / 栏目名**：`src/consts.ts`
- **正式域名**：部署好后改 `astro.config.mjs` 里的 `site`（影响 sitemap 和 RSS 的链接）
- **栏目增减**：复制现有栏目的做法 —— 加内容文件夹、在 `src/content.config.ts` 加一个 collection、在 `src/pages/` 下加列表页和 `[...id].astro` 详情页，并在 `src/consts.ts` 的 `SECTIONS` 里注册
