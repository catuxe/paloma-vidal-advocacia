export interface PracticeAreaSummary {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  group: 'Benefícios assistenciais' | 'Proteção à maternidade e à família' | 'Benefícios por incapacidade' | 'Aposentadorias';
  summary: string;
  ctaLabel: string;
  icon: string;
  sensitiveTopic?: boolean;
}

export const PROFESSIONAL = {
  fullName: 'Dulce Paloma Vidal dos Santos Lima',
  professionalName: 'Paloma Vidal',
  brandName: 'Paloma Vidal — Advocacia & Consultoria',
  brandShort: 'Paloma Vidal',
  role: 'Advogada Previdenciarista',
  oab: 'OAB/BA 61.001',
  oabNumber: '61.001',
  oabSectional: 'Ordem dos Advogados do Brasil — Seção Bahia',
  education: 'Pós-graduanda em Direito Previdenciário',
  experience: 'Mais de oito anos de atuação na área do Direito Previdenciário',
  experienceShort: 'Mais de oito anos de experiência',
  coverage: 'Todo o Brasil',
  coverageDetail: 'Atendimento on-line em todo o Brasil',
  language: 'pt-BR',
  domain: 'palomavidaladvocacia.com.br',
  siteUrl: 'https://palomavidaladvocacia.com.br',
  email: 'palomavidal.adv@gmail.com',
  phoneDisplay: '(75) 99234-7812',
  phoneHref: 'tel:+5575992347812',
  whatsappUrl: 'https://wa.me/message/BDO4E64HECG5A1',
  instagramUrl: 'https://www.instagram.com/palomavidal.adv/',
  instagramHandle: '@palomavidal.adv',
  threadsUrl: 'https://www.threads.com/@palomavidal.adv',
  serviceDays: 'Segunda a sexta-feira',
  serviceHours: 'Em horário comercial, mediante agendamento',
  serviceScheduleFull: 'Atendimento mediante agendamento, de segunda a sexta-feira, em horário comercial.',
  serviceModalities: [
    'Atendimento on-line',
    'Videoconferência',
    'WhatsApp profissional',
    'Assistência jurídica em todo o Brasil',
  ],
  bioSummary:
    'Dulce Paloma Vidal dos Santos Lima, conhecida profissionalmente como Paloma Vidal, é advogada inscrita na OAB/BA sob o nº 61.001, pós-graduanda em Direito Previdenciário e possui mais de oito anos de experiência na área, com atuação em benefícios previdenciários e assistenciais e atendimento on-line em todo o Brasil.',
  bioParagraphs: [
    'Dulce Paloma Vidal dos Santos Lima, conhecida profissionalmente como Paloma Vidal, é advogada inscrita na Ordem dos Advogados do Brasil, Seccional Bahia, sob o número 61.001, pós-graduanda em Direito Previdenciário e possui mais de oito anos de experiência na área.',
    'Sua atuação é voltada à orientação jurídica e à defesa dos direitos previdenciários e assistenciais dos segurados do Instituto Nacional do Seguro Social (INSS) e de seus dependentes.',
    'Possui experiência em demandas relacionadas ao Benefício de Prestação Continuada (BPC/LOAS), salário-maternidade, benefícios por incapacidade temporária e permanente, aposentadoria urbana e rural, aposentadoria do professor e pensão por morte rural e urbana.',
    'Seu trabalho é pautado pelo compromisso com a ética, pelo atendimento humanizado e pela prestação de serviços jurídicos individualizados, buscando contribuir para o acesso aos direitos previdenciários e assistenciais.',
    'Por meio do atendimento on-line, presta assistência jurídica a pessoas de diferentes regiões do Brasil, considerando as particularidades de cada caso.',
  ],
  informativeDisclaimer:
    'O conteúdo deste site possui caráter exclusivamente informativo e não substitui a análise jurídica individualizada de cada caso.',
  // Crédito técnico no rodapé (ativado mediante autorização)
  showDeveloperCredit: true,
  developerCreditText: 'Desenvolvido por Mafalda Studio.',
} as const;

export const PRACTICE_AREAS: PracticeAreaSummary[] = [
  {
    slug: 'bpc-loas',
    href: '/direito-previdenciario/bpc-loas',
    title: 'BPC/LOAS',
    shortTitle: 'BPC/LOAS',
    group: 'Benefícios assistenciais',
    summary:
      'Benefício assistencial destinado a pessoas idosas com 65 anos ou mais e pessoas com deficiência de qualquer idade que atendam aos critérios legais e socioeconômicos.',
    ctaLabel: 'Conheça os requisitos',
    icon: 'heart-handshake',
    sensitiveTopic: true,
  },
  {
    slug: 'salario-maternidade',
    href: '/direito-previdenciario/salario-maternidade',
    title: 'Salário-maternidade',
    shortTitle: 'Salário-maternidade',
    group: 'Proteção à maternidade e à família',
    summary:
      'Proteção previdenciária devida em casos de parto, adoção, guarda judicial para fins de adoção ou aborto não criminoso, conforme a categoria da segurada.',
    ctaLabel: 'Leia sobre o benefício',
    icon: 'baby',
    sensitiveTopic: false,
  },
  {
    slug: 'pensao-por-morte',
    href: '/direito-previdenciario/pensao-por-morte',
    title: 'Pensão por morte rural e urbana',
    shortTitle: 'Pensão por morte',
    group: 'Proteção à maternidade e à família',
    summary:
      'Benefício pago aos dependentes legalmente reconhecidos do segurado urbano ou rural falecido, observados a qualidade de segurado e a comprovação do vínculo.',
    ctaLabel: 'Saiba mais',
    icon: 'users',
    sensitiveTopic: false,
  },
  {
    slug: 'auxilio-incapacidade-temporaria',
    href: '/direito-previdenciario/auxilio-incapacidade-temporaria',
    title: 'Auxílio por incapacidade temporária',
    shortTitle: 'Auxílio por incapacidade temporária',
    group: 'Benefícios por incapacidade',
    summary:
      'Anteriormente conhecido como auxílio-doença, é devido ao segurado temporariamente incapacitado para o trabalho habitual, mediante avaliação médico-pericial.',
    ctaLabel: 'Conheça os requisitos',
    icon: 'stethoscope',
    sensitiveTopic: true,
  },
  {
    slug: 'aposentadoria-incapacidade-permanente',
    href: '/direito-previdenciario/aposentadoria-incapacidade-permanente',
    title: 'Aposentadoria por incapacidade permanente',
    shortTitle: 'Aposentadoria por incapacidade permanente',
    group: 'Benefícios por incapacidade',
    summary:
      'Anteriormente chamada de aposentadoria por invalidez, destina-se ao segurado considerado permanente e totalmente incapaz para o trabalho, sem possibilidade de reabilitação.',
    ctaLabel: 'Leia sobre o benefício',
    icon: 'shield-plus',
    sensitiveTopic: true,
  },
  {
    slug: 'aposentadoria-urbana',
    href: '/direito-previdenciario/aposentadoria-urbana',
    title: 'Aposentadoria urbana',
    shortTitle: 'Aposentadoria urbana',
    group: 'Aposentadorias',
    summary:
      'Orientação sobre modalidades de aposentadoria no RGPS/INSS, idade mínima, tempo de contribuição, regras de transição da EC nº 103/2019 e regularização do CNIS.',
    ctaLabel: 'Saiba mais',
    icon: 'building-2',
    sensitiveTopic: false,
  },
  {
    slug: 'aposentadoria-rural',
    href: '/direito-previdenciario/aposentadoria-rural',
    title: 'Aposentadoria rural',
    shortTitle: 'Aposentadoria rural',
    group: 'Aposentadorias',
    summary:
      'Direitos previdenciários de trabalhadores rurais e segurados especiais em regime de economia familiar, incluindo comprovação documental e autodeclaração.',
    ctaLabel: 'Conheça os requisitos',
    icon: 'sprout',
    sensitiveTopic: false,
  },
  {
    slug: 'aposentadoria-professor',
    href: '/direito-previdenciario/aposentadoria-professor',
    title: 'Aposentadoria do professor',
    shortTitle: 'Aposentadoria do professor',
    group: 'Aposentadorias',
    summary:
      'Regras diferenciadas no RGPS/INSS para profissionais com tempo exclusivo nas funções de magistério na educação infantil, ensino fundamental e ensino médio.',
    ctaLabel: 'Leia sobre o benefício',
    icon: 'book-open',
    sensitiveTopic: false,
  },
];

export const PRACTICE_GROUPS = [
  'Benefícios assistenciais',
  'Proteção à maternidade e à família',
  'Benefícios por incapacidade',
  'Aposentadorias',
] as const;

export const BLOG_CATEGORIES = [
  'BPC/LOAS',
  'Salário-maternidade',
  'Benefícios por incapacidade',
  'Aposentadoria urbana',
  'Aposentadoria rural',
  'Aposentadoria do professor',
  'Pensão por morte',
  'Direitos previdenciários',
  'Notícias e atualizações legislativas',
] as const;

export const NAV_ITEMS = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Áreas de atuação', href: '/areas-de-atuacao' },
  { label: 'Blog', href: '/blog' },
  { label: 'Vídeos', href: '/videos' },
  { label: 'Contato', href: '/contato' },
] as const;
