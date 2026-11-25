# Pendências para Publicação Definitiva

Lista exclusiva dos itens que ainda dependem de confirmação, revisão ou autorização antes da publicação oficial em produção.

## Domínio, hospedagem e infraestrutura

- [ ] Confirmar titularidade, situação do registro e acesso administrativo ao domínio `palomavidaladvocacia.com.br`.
- [ ] Verificar registros DNS atuais e preservar eventuais registros de e-mail (`MX`, `SPF`, `DKIM`) antes de apontar para o Netlify.
- [ ] Criar repositório privado no GitHub e conectar o deploy de homologação no Netlify.
- [ ] Configurar a autenticação OAuth do painel administrativo (`/admin`) com GitHub (conforme `docs/HOSPEDAGEM-DOMINIO.md`) e atualizar o campo `repo` em `public/admin/config.yml`.
- [ ] Validar emissão do certificado SSL/HTTPS após apontamento do domínio.

## Identidade visual e mídia

- [ ] Aprovação final das fotografias aplicadas em cada seção do site (`paloma-hero`, `paloma-sobre`, `paloma-retrato`, `paloma-escritorio`).
- [ ] Aprovação das adaptações técnicas da logomarca (versão horizontal recortada, fundo transparente, monograma `PV`, favicon e imagem Open Graph).
- [ ] Identificação do assunto efetivo do quinto vídeo do Instagram (`https://www.instagram.com/reel/DbBA-9kOalh/`), atualmente mantido com status `pendente_classificacao` em `src/data/videos.ts`.

## Revisão jurídica e aprovação editorial

- [ ] Revisão jurídica e aprovação das **10 minutas iniciais do blog** em `src/content/blog/` (todas mantidas como `rascunho` até aprovação expressa).
- [ ] Revisão jurídica das **8 páginas temáticas** de Direito Previdenciário em `/direito-previdenciario/...`.
- [ ] Revisão das **12 perguntas frequentes** em `src/data/faq.ts` e das perguntas específicas de cada área.
- [ ] Revisão e aprovação final da **Política de Privacidade** (`/privacidade`) e da **Política de Cookies** (`/cookies`).

## Google Search Console, mensuração e Google Ads

- [ ] Verificação de propriedade do domínio no Google Search Console (conta Google da advogada) e envio do `sitemap-index.xml`.
- [ ] Definição e configuração opcional dos identificadores (`PUBLIC_GTM_ID`, `PUBLIC_GA4_MEASUREMENT_ID`, `PUBLIC_GOOGLE_ADS_ID`, `PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`) no Netlify, caso aprovados.
- [ ] Definição de orçamento de publicidade, revisão das sugestões de anúncios em `docs/GOOGLE-SEO-ADS.md` e autorização expressa antes de qualquer ativação manual de campanhas.

## Autorizações institucionais (Mafalda Studio)

- [ ] Autorização expressa da advogada para eventual inclusão do projeto no portfólio da Mafalda Studio.
- [x] Crédito técnico no rodapé ativado (`showDeveloperCredit: true` em `src/config/professional.ts`).
