import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { PROFESSIONAL } from '../config/professional';
import { getPublishedPosts, getPostSlug } from '../utils/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${PROFESSIONAL.brandName} — Blog Jurídico`,
    description:
      'Artigos informativos e atualizações sobre Direito Previdenciário brasileiro, por Paloma Vidal (OAB/BA 61.001).',
    site: context.site || PROFESSIONAL.siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/blog/${getPostSlug(post)}`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: '<language>pt-br</language>',
  });
}
