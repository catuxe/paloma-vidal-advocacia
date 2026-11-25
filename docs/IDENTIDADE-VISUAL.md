# Identidade Visual e Design System

Documentação dos tokens visuais derivados diretamente da logomarca oficial em `LOGO/logo.jpeg`.

## 1. Paleta cromática oficial

| Token | Código HEX | Função principal |
| --- | --- | --- |
| `--color-bordo` | `#44121E` | Cor institucional extraída do fundo original da logomarca (cabeçalho, hero, rodapé, títulos sobre fundo claro) |
| `--color-bordo-escuro` | `#350F1A` | Profundidade visual, estados de interação, barra de credenciais e menu mobile |
| `--color-dourado` | `#E8D694` | Elementos decorativos, linhas divisórias e destaques sobre fundo bordô |
| `--color-dourado-escuro` | `#7D6428` | Rótulos e detalhes sobre fundos claros (garante contraste WCAG AA em vez de dourado claro) |
| `--color-marfim` | `#FAF7F2` | Fundo principal das páginas de leitura, blog e áreas temáticas |
| `--color-bege` | `#D9C8B8` | Bordas editoriais, separadores e elementos auxiliares |
| `--color-grafite` | `#292326` | Textos corridos e conteúdo jurídico de longa leitura |
| `--color-branco` | `#FFFFFF` | Cartões editoriais, caixas de identificação e áreas de destaque |

## 2. Tipografia (hospedada localmente via Fontsource)

- **Títulos e elementos editoriais:** `Cormorant Garamond` (pesos 400, 500, 600 e itálico 400).
- **Textos corridos, menus e formulários:** `Source Sans 3` (pesos 400, 500, 600, 700).

## 3. Logomarca e versões geradas

O arquivo original `LOGO/logo.jpeg` (1600×1600) foi preservado integralmente. A partir dele foram produzidas versões técnicas sem alteração de traços, proporções ou tipografia:

- `public/images/logo/logo-horizontal.webp` e `.png` — recorte horizontal otimizado para cabeçalho e rodapé.
- `public/images/logo/logo-mobile.webp` — versão horizontal compacta para dispositivos móveis.
- `public/images/logo/logo-horizontal-transparent.png` — versão com fundo transparente preservando os elementos dourados.
- `public/images/logo/monograma-pv.webp` e `.png` — versão reduzida utilizando exclusivamente o monograma caligráfico `PV` original.
- `public/favicon.ico`, `public/favicon.png`, `public/apple-touch-icon.png`, `public/icon-192.png`, `public/icon-512.png` — ícones de navegador e dispositivos móveis.
- `public/images/og-paloma-vidal.jpg` — imagem Open Graph (1200×630) combinando a logomarca oficial e fotografia real da advogada.

## 4. Fotografias profissionais reais

Os arquivos originais em `FOTOS/` foram preservados. Versões otimizadas em WebP foram geradas sem alteração de traços físicos ou faciais:

- `FOTOS/2.jpeg` → `public/images/paloma/paloma-hero.webp` (Hero principal e imagem Open Graph).
- `FOTOS/1.jpeg` → `public/images/paloma/paloma-sobre.webp` (Seção Sobre na página inicial e página `/sobre`).
- `FOTOS/3.jpeg` → `public/images/paloma/paloma-retrato-md.webp` (Identificação profissional nos artigos, página de contato e miniatura do vídeo de apresentação).
- `FOTOS/4.jpeg` → `public/images/paloma/paloma-escritorio-md.webp` (Foto complementar institucional na página `/sobre`).

## 5. Acessibilidade (WCAG 2.2 AA)

- Contraste validado: dourado claro (`#E8D694`) utilizado exclusivamente sobre fundos bordô (`#44121E` / `#350F1A`); sobre fundos claros (`#FAF7F2` / `#FFFFFF`), utilizam-se `#44121E`, `#292326` e `#7D6428`.
- Link de salto para o conteúdo principal (`Ir para o conteúdo principal`), navegação integral por teclado com foco visível (`focus-visible`), textos alternativos em todas as imagens e respeito a `prefers-reduced-motion`.
