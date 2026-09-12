---
title: 你好，世界：这个博客是怎么搭起来的
description: 介绍本博客的技术栈与三个栏目结构，以及如何发布第一篇文章。
pubDate: 2026-09-12
tags: [博客, Astro]
---

欢迎来到我的博客！这是「文章」栏目的第一篇文章。

## 技术栈

- **框架**：[Astro](https://astro.build) —— 静态站点生成器，纯 Markdown 写作，构建产物是纯 HTML，访问飞快
- **托管**：[Cloudflare Pages](https://pages.cloudflare.com) —— 免费托管，全球 CDN，push 到 GitHub 后自动部署

## 三个独立栏目

| 栏目 | 内容文件夹 | 定位 |
| ---- | ---------- | ---- |
| 文章 | `src/content/posts/` | 技术分享与深度内容 |
| 随笔 | `src/content/notes/` | 日常记录与碎片想法 |
| 项目 | `src/content/projects/` | 个人项目与作品 |

三个栏目互相独立：各自的文件夹、列表页、文章详情互不影响，可以单独增删改任何一个栏目。

## 发布新文章的步骤

1. 在对应栏目文件夹下新建一个 `.md` 文件（文件名会成为 URL 的一部分，建议用英文）
2. 顶部写上 frontmatter（本文件就是示例，可直接复制修改）
3. 下面用 Markdown 写正文
4. 提交并 push，一两分钟后线上自动更新

```markdown
---
title: 文章标题
description: 一句话摘要（可选）
pubDate: 2026-09-12
tags: [标签1, 标签2]
---

正文从这里开始……
```
