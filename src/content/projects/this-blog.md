---
title: 这个博客本身
description: 用 Astro 搭建、Cloudflare Pages 托管的个人博客，支持三个独立编辑的栏目。
pubDate: 2026-09-12
tags: [Astro, Cloudflare]
tech: [Astro, TypeScript, Cloudflare Pages]
---

「项目」栏目的第一个项目，就是这个博客本身。

## 特性

- 纯静态输出，无数据库、无后端，安全省心
- 三个独立栏目（文章 / 随笔 / 项目），各自一个 Markdown 文件夹
- push 到 GitHub 后 Cloudflare Pages 自动构建部署
- 自带 RSS 订阅、sitemap、深色模式自适应

## 用到的东西

- [Astro](https://astro.build)：内容集合（Content Collections）管理三个栏目
- [Cloudflare Pages](https://pages.cloudflare.com)：免费托管与自动部署
