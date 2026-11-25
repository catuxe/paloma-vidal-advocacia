import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/**
 * Regra editorial estrita:
 * Somente artigos com editorialStatus === 'publicado' e draft === false
 * são exibidos no site público, busca interna, sitemap, RSS e artigos relacionados.
 */
export function isPostPublished(post: BlogPost): boolean {
  return post.data.editorialStatus === 'publicado' && post.data.draft === false;
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const all = await getCollection('blog');
  return all
    .filter(isPostPublished)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime());
}

export function getPostSlug(post: BlogPost): string {
  return post.data.slug || post.id.replace(/\.mdx?$/, '');
}

export function estimateReadingTime(body: string | undefined): number {
  if (!body) return 4;
  const words = body.trim().split(/\s+/).length;
  return Math.max(2, Math.ceil(words / 210));
}

export function formatDatePtBr(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
