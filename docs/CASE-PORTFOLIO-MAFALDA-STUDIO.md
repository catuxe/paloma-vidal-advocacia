# Estudo de Caso — Paloma Vidal | Advocacia & Consultoria

**Estúdio responsável:** Mafalda Studio  
**Desenvolvedora:** Catuxe  
**Contato comercial:** mafaldastudio.dev@gmail.com  
**Site publicado (homologação):** https://paloma-vidal-advocacia.netlify.app/  
**Status de divulgação no portfólio:** Aguardando autorização expressa da cliente antes da publicação externa.

---

## Descrição curta para o site da Mafalda Studio

> “Desenvolvimento de uma plataforma institucional e editorial para uma profissional do Direito Previdenciário, com identidade visual personalizada, páginas temáticas, blog jurídico, gerenciamento de conteúdo, integração com redes sociais e infraestrutura preparada para posicionamento orgânico no Google.”

---

## 1. Apresentação e contexto da cliente

**Dulce Paloma Vidal Santos Lima (Paloma Vidal — OAB/BA 61.001)** é advogada previdenciarista com mais de oito anos de atuação em Direito Previdenciário e atendimento on-line em todo o Brasil. O projeto foi concebido para consolidar sua presença digital com sobriedade, acolhimento e conformidade rigorosa às normas éticas da advocacia brasileira (Provimento OAB nº 205/2021) e à LGPD.

## 2. Necessidades identificadas e objetivos

- Traduzir a identidade visual oficial da advogada (bordô profundo `#44121E`, dourado `#E8D694`, marfim `#FAF7F2` e monograma caligráfico `PV`) para uma interface editorial contemporânea, acessível e responsiva.
- Estruturar oito páginas temáticas independentes para os benefícios atendidos (BPC/LOAS, salário-maternidade, incapacidade temporária e permanente, aposentadorias urbana, rural e do professor, e pensão por morte), prontas para busca orgânica e futuras campanhas de pesquisa.
- Criar um blog jurídico escalável com gerenciamento simplificado e estratégia editorial voltada ao público geral, preservando um acervo integral em PDF para uso interno da advogada.
- Produzir um vídeo institucional autoral integrado em HTML5, mantendo carregamento leve e acessibilidade com legendas WebVTT.

## 3. Solução técnica e arquitetura

- **Stack:** Astro 5, TypeScript, Tailwind CSS v4, Astro Content Collections, Fontsource (`Cormorant Garamond` e `Source Sans 3`), Decap CMS (`/admin`), `@astrojs/sitemap`, `@astrojs/rss`, hospedagem estática no Netlify.
- **Identidade visual e mídia:** preservação integral dos arquivos originais, recorte técnico da logomarca, extração do monograma `PV` para favicons, otimização de fotografias reais em WebP e imagem Open Graph 1200×630.
- **Produção audiovisual:** vídeo institucional original de 60 segundos (“Quem sou e o que faço — Paloma Vidal”) em 16:9 Web, 16:9 Full HD e 9:16 Reels, acompanhado de poster WebP e legendas sincronizadas `.vtt`.
- **SEO, privacidade e ética:** HTML estático, JSON-LD (`WebSite`, `Person`, `LegalService`, `Article`, `BlogPosting`, `BreadcrumbList`), Google Consent Mode v2, bloqueio automático de tags publicitárias em páginas de temas sensíveis (saúde, deficiência e crianças) e aviso informativo explícito.

## 4. Resultados técnicos efetivamente verificados

- Geração estática completa sem erros de build (26 páginas públicas + sitemap + RSS).
- 100% das páginas públicas validadas com um único `<h1>`, metadados canônicos, JSON-LD válido e zero ativos quebrados.
- Proteção estrita de conteúdos privados (`private-deliverables/` fora de `public/`, `dist/`, sitemap e controle de versão).
- *(Nota: não são reportadas métricas de tráfego, conversões ou resultados comerciais neste documento, pois o site encontra-se em etapa de homologação.)*

## 5. Materiais de demonstração

- URL publicada: https://paloma-vidal-advocacia.netlify.app/
- Capturas de tela: deverão ser registradas e selecionadas somente após aprovação final da cliente.
