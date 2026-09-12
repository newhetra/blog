import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

// 全站 RSS 订阅：合并 文章 + 随笔 两个栏目
export async function GET(context) {
  const posts = await getCollection('posts');
  const notes = await getCollection('notes');
  const items = [...posts, ...notes]
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? '',
      pubDate: entry.data.pubDate,
      link: `/${entry.collection}/${entry.id}/`,
    }));

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items,
  });
}
