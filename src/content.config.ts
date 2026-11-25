import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(5),
    subtitle: z.string().optional(),
    slug: z.string().optional(),
    description: z.string().min(20),
    category: z.enum([
      'BPC/LOAS',
      'Salário-maternidade',
      'Benefícios por incapacidade',
      'Aposentadoria urbana',
      'Aposentadoria rural',
      'Aposentadoria do professor',
      'Pensão por morte',
      'Direitos previdenciários',
      'Notícias e atualizações legislativas',
    ]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string(),
    coverImageAlt: z.string().min(10),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default('Equipe Editorial — Minuta técnica'),
    reviewedBy: z.string().optional(),
    reviewedAt: z.coerce.date().optional(),
    references: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
    relatedVideos: z.array(z.string()).default([]),
    relatedArticles: z.array(z.string()).default([]),
    relatedAreaSlug: z.string().optional(),
    featured: z.boolean().default(false),
    editorialStatus: z
      .enum(['rascunho', 'em_revisao_juridica', 'aprovado', 'publicado', 'arquivado'])
      .default('rascunho'),
    draft: z.boolean().default(true),
    sensitiveTopic: z.boolean().default(false),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
