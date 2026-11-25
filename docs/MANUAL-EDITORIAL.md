# Manual Editorial — Painel Administrativo do Blog

Guia prático para **Paloma Vidal** gerenciar artigos do blog jurídico sem necessidade de conhecimentos de programação.

## 1. Como acessar o painel

1. Acesse `https://palomavidaladvocacia.com.br/admin`.
2. Clique em **“Entrar com GitHub”** (autenticação segura configurada na etapa de publicação).
3. Após o login, você verá a lista **Artigos do Blog** e a aba **Fluxo de Trabalho (Workflow)**.

## 2. Estados editoriais (proteção contra publicação indevida)

O site foi programado com trava dupla de segurança editorial. Um artigo **somente aparece no site público, na busca, no sitemap e no RSS** quando atender às duas condições abaixo simultaneamente:

- **Status editorial:** `Publicado (visível no site)`
- **Manter como rascunho:** desmarcado (`false`)

Enquanto estiver em `Rascunho`, `Em revisão jurídica`, `Aprovado` ou `Arquivado` (ou com a opção de rascunho marcada), o texto permanece totalmente oculto do público e dos buscadores.

## 3. Como revisar e publicar um dos 10 artigos iniciais

1. Abra o artigo desejado na lista **Artigos do Blog**.
2. Leia atentamente o título, subtítulo, resumo, corpo do texto e links de referências oficiais.
3. Faça os ajustes técnicos e jurídicos que considerar pertinentes.
4. No campo **Autoria**, mantenha ou ajuste para `Paloma Vidal — OAB/BA 61.001`.
5. No campo **Revisão jurídica**, preencha `Paloma Vidal — OAB/BA 61.001` e informe a **Data da revisão jurídica**.
6. Altere **Status editorial** para `Publicado (visível no site)` e desmarque **Manter como rascunho**.
7. Clique em **Salvar** e, no fluxo editorial, clique em **Publicar agora**. O Netlify reconstruirá e atualizará o site automaticamente em cerca de 1 a 2 minutos.

## 4. Como criar um novo artigo

1. Clique em **Novo Artigo**.
2. Preencha:
   - **Título principal:** claro, informativo e sem promessas de resultado.
   - **URL amigável (slug):** palavras em minúsculas separadas por hífen, sem acentos (ex.: `periodo-de-graca-inss`).
   - **Resumo / Descrição:** 1 a 2 frases explicando o conteúdo (usado nos cards e no Google).
   - **Categoria:** escolha uma das nove categorias oficiais.
   - **Imagem de capa** e **Texto alternativo (acessibilidade):** envie uma imagem otimizada e descreva brevemente o que ela mostra.
   - **Referências jurídicas oficiais:** adicione os links do Planalto, STF, STJ, TRFs ou Gov.br.
   - **SEO (opcional):** personalize título e descrição para o Google, se desejar.
3. Escreva o conteúdo utilizando subtítulos (`##` para tópicos principais e `###` para subtópicos) para gerar automaticamente o índice de leitura.
4. Salve como `Rascunho` para revisar depois, ou publique quando estiver pronto.

## 5. Como incorporar vídeos do Instagram

Para associar um vídeo cadastrado em `src/data/videos.ts` ao artigo, informe o ID do vídeo no campo **IDs de vídeos relacionados** (por exemplo: `direito-salario-maternidade`, `depressao-bpc-loas`, `cancer-bpc-loas`). O site carregará o vídeo sob demanda com botão “Assistir no Instagram”.

## 6. Como atualizar referências ou despublicar um artigo

- **Atualização legislativa:** edite o texto, atualize as referências oficiais e preencha o campo **Data da última atualização** (essa data aparecerá no topo do artigo).
- **Despublicar / Arquivar:** altere o **Status editorial** para `Arquivado` e marque **Manter como rascunho**, depois salve. O artigo sairá do ar na próxima atualização automática.
