# Guia de SEO, Google Search Console e Google Ads

Documentação técnica e estratégica para posicionamento orgânico no Google e preparação de campanhas de pesquisa ética para **Paloma Vidal — Advocacia & Consultoria (OAB/BA 61.001)**.

## 1. Google Search Console

> Utilize sempre a conta Google administrada pela própria advogada. Não há códigos fictícios inseridos no código-fonte.

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. Clique em **Adicionar propriedade** e escolha **Domínio** (`palomavidaladvocacia.com.br`).
3. Copie o registro **TXT** fornecido pelo Google e cadastre-o no painel DNS do provedor onde o domínio está registrado (mantendo intactos todos os registros de e-mail existentes).
4. Clique em **Verificar**.
5. No menu **Sitemaps**, informe `sitemap-index.xml` e clique em **Enviar**.
6. Utilize **Inspeção de URL** para solicitar indexação inicial das páginas principais (`/`, `/sobre`, `/areas-de-atuacao` e as 8 páginas em `/direito-previdenciario/...`).
7. Acompanhe mensalmente em **Desempenho**: impressões, cliques orgânicos, consultas de pesquisa, páginas com maior procura e eventuais alertas de indexação em **Páginas**.

## 2. Estrutura de SEO técnico implementada

- HTML 100% estático gerado pelo Astro, com um único `H1` por página.
- Meta `title`, `description`, `canonical`, Open Graph e Twitter Cards individuais em todas as páginas.
- `sitemap-index.xml` automático (excluindo `/admin`, `/404` e artigos em rascunho).
- `robots.txt` bloqueando `/admin`.
- Dados estruturados em JSON-LD (`WebSite`, `Person`, `LegalService`, `Article`, `BlogPosting`, `BreadcrumbList`), utilizando exclusivamente informações reais confirmadas.
- Feed RSS em `/rss.xml` contendo somente artigos publicados.

## 3. Google Ads — Rede de Pesquisa (caráter exclusivamente informativo)

> **Importante:** não utilizar Google AdSense (anúncios de terceiros). Nenhuma campanha é ativada automaticamente; toda ativação exige aprovação prévia da advogada e respeito ao Estatuto da Advocacia, Código de Ética e Disciplina da OAB, Provimento nº 205/2021 e LGPD.

### Variáveis de ambiente (opcionais)

Configure no painel do Netlify apenas os identificadores efetivamente aprovados:

- `PUBLIC_GTM_ID`
- `PUBLIC_GA4_MEASUREMENT_ID`
- `PUBLIC_GOOGLE_ADS_ID`
- `PUBLIC_GOOGLE_ADS_CONVERSION_LABEL`

### Proteção de privacidade e temas sensíveis

- **Google Consent Mode v2:** tags não essenciais ficam bloqueadas por padrão até consentimento explícito no banner de cookies.
- **Rotas sensíveis protegidas (`src/config/analytics.ts`):** em páginas sobre BPC/LOAS, incapacidade, autismo, depressão, câncer e mães menores de idade, as tags de Google Ads permanecem desabilitadas automaticamente até avaliação específica de conformidade.
- **Vedação absoluta:** não implementar remarketing ou públicos personalizados baseados em saúde, deficiência ou condições sensíveis, e nunca transmitir CPF, laudos, diagnósticos ou conteúdo de formulários às plataformas de mensuração.
- **Métricas honestas:** cliques em WhatsApp, telefone ou e-mail representam apenas contatos iniciados, nunca clientes conquistados.

### Hipótese inicial de priorização (mediante validação no Planejador de Palavras-chave)

Avaliar prioritariamente, conforme orçamento autorizado e análise de concorrência local/nacional:
1. **Salário-maternidade** → `/direito-previdenciario/salario-maternidade`
2. **BPC/LOAS** (sujeito à revisão prévia de políticas sobre saúde/deficiência) → `/direito-previdenciario/bpc-loas`
3. **Aposentadoria rural** → `/direito-previdenciario/aposentadoria-rural`

Demais campanhas estruturadas para ativação futura:
- Advocacia Previdenciária → `/areas-de-atuacao`
- Aposentadoria urbana → `/direito-previdenciario/aposentadoria-urbana`
- Benefícios por incapacidade (grupos separados para temporária e permanente) → `/direito-previdenciario/auxilio-incapacidade-temporaria` e `/direito-previdenciario/aposentadoria-incapacidade-permanente`
- Aposentadoria do professor → `/direito-previdenciario/aposentadoria-professor`
- Pensão por morte → `/direito-previdenciario/pensao-por-morte`
- Marca profissional → `/` ou `/sobre`

### Sugestões de palavras-chave negativas iniciais (para revisão)

`gratuito`, `grátis`, `defensoria pública`, `telefone 135`, `agendamento meu inss`, `vaga de emprego`, `concurso inss`, `estágio`, `modelo de petição`, `pdf`, `curso`, `faculdade`, `apostila`, `simulador grátis`.

### Sugestões de anúncios informativos (sujeitas à aprovação da advogada)

**Exemplo — Salário-maternidade**
- Título 1: `Salário-Maternidade no INSS`
- Título 2: `Paloma Vidal | OAB/BA 61.001`
- Título 3: `Atendimento On-line no Brasil`
- Descrição 1: `Entenda os requisitos do salário-maternidade para autônomas, MEI, rurais e urbanas.`
- Descrição 2: `Orientação jurídica individualizada em Direito Previdenciário mediante agendamento.`

**Exemplo — Aposentadoria Rural**
- Título 1: `Aposentadoria Rural no INSS`
- Título 2: `Comprovação de Atividade Rural`
- Título 3: `Advogada Previdenciarista`
- Descrição 1: `Saiba quais documentos e regras se aplicam ao segurado especial em economia familiar.`
- Descrição 2: `Mais de oito anos de experiência em Direito Previdenciário. Atendimento on-line.`

*(Proibido incluir nos anúncios: promessa de concessão, garantia de êxito, valores de honorários, descontos, gratuidade como atrativo ou exploração de vulnerabilidade.)*
