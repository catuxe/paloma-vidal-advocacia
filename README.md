# Paloma Vidal — Advocacia & Consultoria

Plataforma institucional, páginas temáticas de Direito Previdenciário, biblioteca de vídeos e blog jurídico desenvolvida pela **Mafalda Studio** para **Paloma Vidal — Advocacia & Consultoria** (OAB/BA 61.001).

- **Desenvolvimento:** Mafalda Studio (Catuxe) — `mafaldastudio.dev@gmail.com`
- **Site em homologação:** https://paloma-vidal-advocacia.netlify.app/
- **Segmento:** Advocacia Previdenciária (INSS — atendimento on-line em todo o Brasil)

## Tecnologias utilizadas

- **Astro 5** + **TypeScript** (geração estática com validação de schemas em tempo de build)
- **Tailwind CSS v4** (tokens oficiais da identidade visual em `src/styles/global.css`)
- **Fontsource** (`Cormorant Garamond` e `Source Sans 3` hospedadas localmente)
- **Astro Content Collections** (blog jurídico em Markdown com controle de status editorial)
- **Decap CMS** (`/admin`) + **@astrojs/sitemap** + **@astrojs/rss**
- **Python (ReportLab + Pillow + FFmpeg)** para scripts reutilizáveis de exportação de PDF editorial (`scripts/export-articles-pdf.py`) e produção audiovisual (`scripts/render-institutional-video.py`)
- **Hospedagem:** Netlify com deploy contínuo via GitHub

## Funcionalidades principais

- **Identidade visual editorial:** paleta bordô (`#44121E`), dourado (`#E8D694` / `#7D6428`), marfim (`#FAF7F2`) e grafite (`#292326`), preservando integralmente a logomarca oficial e as fotografias reais da advogada.
- **8 landing pages temáticas de Direito Previdenciário:** BPC/LOAS, salário-maternidade, auxílio por incapacidade temporária, aposentadoria por incapacidade permanente, aposentadoria urbana, aposentadoria rural, aposentadoria do professor e pensão por morte.
- **Blog jurídico estratégico:** artigos objetivos voltados ao público geral, busca interna, filtros por categoria, paginação, índice de leitura, feed RSS e controle estrito de publicação (`editorialStatus` + `draft`).
- **Vídeo institucional HTML5 + integração Instagram:** player responsivo com legendas WebVTT e `preload="metadata"` na página inicial, Sobre e Vídeos, além de galeria do Instagram carregada sob demanda.
- **SEO, acessibilidade e LGPD:** WCAG 2.2 AA, JSON-LD completo, banner de consentimento com Google Consent Mode v2, bloqueio de tags publicitárias em temas sensíveis e integração com WhatsApp, telefone e e-mail.

## Execução local e manutenção

```bash
npm install
npm run dev      # Servidor local em http://localhost:4321
npm run build    # Build estático de produção em dist/
npm run preview  # Visualização local do build de produção
```

### Scripts auxiliares (Mafalda Studio)

- **Exportar PDF dos artigos:** `python scripts/export-articles-pdf.py`
- **Renderizar vídeo institucional (Web, Full HD e Reels):** `python scripts/render-institutional-video.py`

> **Proteção de materiais privados:** arquivos de entrega privada (backups integrais, PDF interno e masters de vídeo de alta resolução) ficam em `private-deliverables/`, ignorado pelo `.gitignore` e fora de `public/` e `dist/`.

## Documentação do projeto

- [Estudo de Caso — Portfólio Mafalda Studio](docs/CASE-PORTFOLIO-MAFALDA-STUDIO.md)
- [Relatório de Migração GitHub e Netlify](docs/RELATORIO-MIGRACAO-GITHUB-NETLIFY.md)
- [Relatório de Revisão Editorial e Jurídica](docs/RELATORIO-REVISAO-EDITORIAL.md)
- [Roteiro e Storyboard do Vídeo Institucional](docs/ROTEIRO-VIDEO-INSTITUCIONAL.md)
- [Manual Editorial do Blog](docs/MANUAL-EDITORIAL.md)
- [Guia de SEO, Search Console e Google Ads](docs/GOOGLE-SEO-ADS.md)
- [Identidade Visual e Design System](docs/IDENTIDADE-VISUAL.md)
- [Planejamento Editorial Futuro](docs/PLANEJAMENTO-EDITORIAL.md)
- [Hospedagem, Domínio e CMS](docs/HOSPEDAGEM-DOMINIO.md)
- [Pendências para Publicação](docs/PENDENCIAS-PUBLICACAO.md)
