# Paloma Vidal — Advocacia & Consultoria

Site institucional, páginas temáticas de Direito Previdenciário, biblioteca de vídeos e blog jurídico de **Dulce Paloma Vidal Santos (Paloma Vidal — OAB/BA 61.001)**, desenvolvido pela **Mafalda Studio**.

## Tecnologias utilizadas

- **Astro 5** (geração estática com HTML semântico e zero JavaScript desnecessário)
- **TypeScript** (tipagem estrita e validação de schema dos artigos em tempo de build)
- **Tailwind CSS v4** (tokens oficiais da identidade visual em `src/styles/global.css`)
- **Fontsource** (`Cormorant Garamond` e `Source Sans 3` hospedadas localmente)
- **Astro Content Collections** (gestão tipada de artigos em Markdown)
- **Decap CMS** (`/admin`, configurado para fluxo editorial via GitHub)
- **@astrojs/sitemap** e **@astrojs/rss** (geração automática de sitemap e feed RSS excluindo rascunhos e `/admin`)

## Requisitos

- Node.js 22+
- npm 10+

## Instalação e execução local

```bash
npm install
npm run dev
```

Acesse `http://localhost:4321` no navegador.

### Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento local |
| `npm run build` | Valida schemas e gera o site estático em `dist/` |
| `npm run preview` | Visualiza localmente o build de produção gerado em `dist/` |

## Estrutura de diretórios

```text
├── LOGO/                        # Arquivo original da logomarca (preservado)
├── FOTOS/                       # Fotografias originais da advogada (preservadas)
├── public/
│   ├── admin/                   # Decap CMS (index.html + config.yml)
│   ├── images/
│   │   ├── logo/                # Versões otimizadas da logomarca e monograma PV
│   │   ├── paloma/              # Fotografias otimizadas em WebP
│   │   ├── blog/                # Capas editoriais dos artigos
│   │   └── og-paloma-vidal.jpg  # Imagem Open Graph (1200x630)
│   ├── favicon.ico / .png       # Favicons gerados a partir do monograma PV
│   └── robots.txt               # Diretrizes de indexação (exclui /admin)
├── src/
│   ├── components/
│   │   ├── blog/                # ArticleCard, AuthorBox
│   │   ├── layout/              # Header, Footer
│   │   ├── sections/            # ContactSection
│   │   ├── seo/                 # SeoHead (JSON-LD), AnalyticsScripts
│   │   ├── ui/                  # Breadcrumbs, CookieConsent, FaqAccordion, LegalNotice, WhatsAppFloat
│   │   └── videos/              # InstagramEmbed (carregamento sob demanda)
│   ├── config/
│   │   ├── professional.ts      # Fonte única de dados oficiais da advogada
│   │   └── analytics.ts         # Variáveis opcionais de mensuração e rotas sensíveis
│   ├── content/blog/            # 10 minutas iniciais (mantidas como rascunho até revisão)
│   ├── data/                    # Vídeos, FAQ e conteúdo das 8 áreas de atuação
│   ├── layouts/BaseLayout.astro # Layout base acessível e responsivo
│   ├── pages/                   # Todas as rotas institucionais, temáticas, blog e RSS
│   ├── styles/global.css        # Design system (tokens bordô, dourado, marfim, grafite)
│   └── utils/blog.ts            # Filtro estrito de publicação (editorialStatus + draft)
├── docs/                        # Documentação completa do projeto
├── astro.config.mjs             # Configuração do Astro e sitemap
├── netlify.toml                 # Configuração de build, redirecionamentos e cabeçalhos de segurança
└── .env.example                 # Modelo de variáveis de ambiente
```

## Variáveis de ambiente

Copie `.env.example` para `.env` (não versionar `.env`):

```env
PUBLIC_SITE_URL=https://palomavidaladvocacia.com.br
PUBLIC_GTM_ID=
PUBLIC_GA4_MEASUREMENT_ID=
PUBLIC_GOOGLE_ADS_ID=
PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=
```

O site funciona integralmente mesmo sem nenhuma dessas variáveis preenchidas.

## Atualização de dados, fotos, artigos e vídeos

- **Dados profissionais:** edite exclusivamente `src/config/professional.ts`. Todos os componentes consomem esse arquivo.
- **Fotografias:** substitua as versões otimizadas em `public/images/paloma/` mantendo os originais em `FOTOS/`.
- **Artigos:** gerencie pelo painel `/admin` ou em `src/content/blog/`. Apenas artigos com `editorialStatus: "publicado"` e `draft: false` aparecem no site público, busca, sitemap e RSS.
- **Vídeos:** gerencie no cadastro centralizado em `src/data/videos.ts`.

## Documentação complementar

- [Manual Editorial](docs/MANUAL-EDITORIAL.md)
- [Google Search Console, SEO e Google Ads](docs/GOOGLE-SEO-ADS.md)
- [Identidade Visual e Design System](docs/IDENTIDADE-VISUAL.md)
- [Planejamento Editorial Futuro](docs/PLANEJAMENTO-EDITORIAL.md)
- [Hospedagem, Domínio e CMS](docs/HOSPEDAGEM-DOMINIO.md)
- [Pendências para Publicação](docs/PENDENCIAS-PUBLICACAO.md)
