export interface VideoItem {
  id: string;
  reelCode: string;
  title: string;
  description: string;
  instagramUrl: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  relatedArticles: string[];
  relatedAreaSlug?: string;
  featured?: boolean;
  publishedAt?: string;
  editorialStatus: 'publicado' | 'pendente_classificacao' | 'rascunho';
}

export const VIDEOS: VideoItem[] = [
  {
    id: 'apresentacao-profissional',
    reelCode: 'DbVnRJTu7Pl',
    title: 'Apresentação profissional — Paloma Vidal',
    description:
      'Vídeo de apresentação institucional de Paloma Vidal, advogada previdenciarista (OAB/BA 61.001), explicando sua atuação em Direito Previdenciário e o atendimento on-line em todo o Brasil.',
    instagramUrl: 'https://www.instagram.com/reel/DbVnRJTu7Pl/',
    category: 'Apresentação',
    coverImage: '/images/paloma/paloma-retrato-md.webp',
    coverAlt: 'Paloma Vidal, advogada previdenciarista, em vídeo de apresentação profissional',
    relatedArticles: [],
    featured: true,
    editorialStatus: 'publicado',
  },
  {
    id: 'depressao-bpc-loas',
    reelCode: 'DbvgzzIu5l8',
    title: 'Quem tem depressão pode ter direito ao BPC/LOAS?',
    description:
      'Esclarecimentos gerais sobre a avaliação biopsicossocial, os impedimentos de longo prazo e os critérios socioeconômicos exigidos pela LOAS para análise de pedidos relacionados à depressão.',
    instagramUrl: 'https://www.instagram.com/reel/DbvgzzIu5l8/',
    category: 'BPC/LOAS',
    coverImage: '/images/blog/depressao-direito-bpc-loas.svg',
    coverAlt: 'Capa editorial do vídeo sobre depressão e critérios do BPC/LOAS',
    relatedArticles: ['depressao-direito-bpc-loas'],
    relatedAreaSlug: 'bpc-loas',
    featured: true,
    editorialStatus: 'publicado',
  },
  {
    id: 'direito-salario-maternidade',
    reelCode: 'DYm8NLFOTwr',
    title: 'Quem tem direito ao salário-maternidade?',
    description:
      'Informações gerais sobre as categorias de seguradas do INSS, qualidade de segurada e regras aplicáveis ao salário-maternidade no Regime Geral de Previdência Social.',
    instagramUrl: 'https://www.instagram.com/reel/DYm8NLFOTwr/',
    category: 'Salário-maternidade',
    coverImage: '/images/blog/quem-tem-direito-salario-maternidade.svg',
    coverAlt: 'Capa editorial do vídeo sobre quem pode ter direito ao salário-maternidade',
    relatedArticles: ['quem-tem-direito-salario-maternidade', 'manicure-gravida-salario-maternidade'],
    relatedAreaSlug: 'salario-maternidade',
    featured: true,
    editorialStatus: 'publicado',
  },
  {
    id: 'cancer-bpc-loas',
    reelCode: 'DbJG58xu_bZ',
    title: 'Tratamento contra o câncer e possibilidade de BPC/LOAS',
    description:
      'Explicação didática sobre os requisitos assistenciais do BPC/LOAS para pessoas em tratamento oncológico e a diferença em relação aos benefícios previdenciários por incapacidade.',
    instagramUrl: 'https://www.instagram.com/reel/DbJG58xu_bZ/',
    category: 'BPC/LOAS',
    coverImage: '/images/blog/cancer-direito-bpc-loas.svg',
    coverAlt: 'Capa editorial do vídeo sobre tratamento contra o câncer e critérios do BPC/LOAS',
    relatedArticles: ['cancer-direito-bpc-loas'],
    relatedAreaSlug: 'bpc-loas',
    featured: true,
    editorialStatus: 'publicado',
  },
  {
    id: 'conteudo-complementar-pendente',
    reelCode: 'DbBA-9kOalh',
    title: 'Conteúdo informativo complementar (pendente de classificação)',
    description:
      'Registro técnico do quinto vídeo indicado para o acervo. Mantido fora da vitrine pública até confirmação do tema exato, título e revisão editorial pela advogada.',
    instagramUrl: 'https://www.instagram.com/reel/DbBA-9kOalh/',
    category: 'Direitos previdenciários',
    coverImage: '/images/paloma/paloma-sobre-md.webp',
    coverAlt: 'Vídeo complementar do perfil @palomavidal.adv aguardando classificação editorial',
    relatedArticles: [],
    featured: false,
    editorialStatus: 'pendente_classificacao',
  },
];

export function getPublishedVideos(): VideoItem[] {
  return VIDEOS.filter((v) => v.editorialStatus === 'publicado');
}

export function getVideoById(id: string): VideoItem | undefined {
  return VIDEOS.find((v) => v.id === id && v.editorialStatus === 'publicado');
}

export function getVideosByArea(areaSlug: string): VideoItem[] {
  return VIDEOS.filter((v) => v.editorialStatus === 'publicado' && v.relatedAreaSlug === areaSlug);
}
