# Relatório de Revisão Editorial, Jurídica e Audiovisual

**Data:** 25 de novembro de 2026  
**Branch de homologação:** `revisao-editorial-video-institucional`  
**Backup integral e PDF:** preservados em `private-deliverables/backup-artigos-originais/` e `private-deliverables/Paloma_Vidal_Coletanea_Artigos_Juridicos_Versao_Integral.pdf` (25 páginas, fora do diretório público e do controle de versão).

---

## 1. Resumo das alterações por artigo

| # | Artigo e URL | Palavras (antes → depois) | Seções removidas / resumidas | Informações preservadas e atualizações jurídicas | Status |
| --- | --- | --- | --- | --- | --- |
| 01 | **BPC/LOAS para criança com autismo** (`/blog/bpc-loas-crianca-autismo`) | 939 → ~270 | Lista exaustiva de documentos, tutorial passo a passo no Meu INSS, exemplo longo e FAQ repetitivo | Reconhecimento legal do TEA (Lei nº 12.764/2012), natureza assistencial, avaliação biopsicossocial e **atualização do Bolsa Família (Lei nº 15.077/2024 e Decreto nº 12.534/2025)** | Homologação |
| 02 | **O que pode levar à negativa do BPC/LOAS?** (`/blog/motivos-negativa-bpc-loas`) | 694 → ~280 | **Removida integralmente** a seção “Como consultar o motivo exato do indeferimento?” e instruções operacionais no Meu INSS (preservadas no PDF interno) | Substituída por “Seu BPC foi negado?”, preservando os motivos principais, distinção entre negativa administrativa e ausência de direito, menção ao prazo de 30 dias e atualização sobre Bolsa Família | Homologação |
| 03 | **Salário-maternidade para mães menores de idade** (`/blog/salario-maternidade-maes-menores-de-idade`) | 693 → ~270 | Detalhamento documental extenso e FAQ repetitivo | Proteção previdenciária, qualidade de segurada, Súmula 657 STJ, Portaria DIRBEN/INSS nº 1.132/2023 e necessidade de representação legal | Homologação |
| 04 | **Quem tem direito ao salário-maternidade?** (`/blog/quem-tem-direito-salario-maternidade`) | 659 → ~260 | Procedimentos operacionais detalhados e FAQ | Categorias abrangidas, período de graça, efeitos das ADIs 2110 e 2111 do STF, prazo legal de 5 anos e vídeo `DYm8NLFOTwr` preservado | Homologação |
| 05 | **Manicure grávida pode receber salário-maternidade?** (`/blog/manicure-gravida-salario-maternidade`) | 611 → ~265 | Estratégias contributivas detalhadas, exemplo longo e lista documental | Diferença entre informalidade e MEI/contribuinte individual, qualidade de segurada, ressalva sobre boa-fé após ADIs 2110/2111 e vídeo `DYm8NLFOTwr` | Homologação |
| 06 | **Aposentadoria pelo INSS em 2027** (`/blog/regras-aposentadoria-inss-2027`) | 929 → ~330 | Explicações extensas e FAQ redundante | Preservada a tabela comparativa oficial 2026 × 2027 (EC nº 103/2019, pontos e idade progressiva para urbanos e professores), regras inalteradas e direito adquirido | Homologação |
| 07 | **Trabalho na roça antes dos 12 anos** (`/blog/trabalho-rural-antes-12-anos-aposentadoria`) | 584 → ~275 | Detalhes processuais extensos e FAQ | Preservado precedente da 10ª Turma do TRF3 (Apelação Cível nº 5011109-10.2022.4.03.6183), distinção entre proteção previdenciária e trabalho infantil e ausência de garantia automática | Homologação |
| 08 | **Como comprovar trabalho rural?** (`/blog/como-comprovar-trabalho-rural-aposentadoria`) | 743 → ~255 | Listas exaustivas de documentos, passo a passo no Meu INSS e FAQ | Segurado especial, idade mínima rural (55/60 anos), autodeclaração, exemplos gerais de prova material e relação com prova testemunhal | Homologação |
| 09 | **Quem tem depressão pode ter direito ao BPC/LOAS?** (`/blog/depressao-direito-bpc-loas`) | 578 → ~255 | Lista documental extensa e FAQ | Impedimentos de longo prazo, avaliação biopsicossocial, atualização do Bolsa Família (Lei nº 15.077/2024 e Decreto nº 12.534/2025) e vídeo `DbvgzzIu5l8` | Rascunho |
| 10 | **Câncer e BPC/LOAS** (`/blog/cancer-direito-bpc-loas`) | 519 → ~250 | Lista documental extensa e FAQ | Critérios assistenciais, isenção de carência no art. 151 da Lei nº 8.213/1991 para segurados do INSS, atualização do Bolsa Família e vídeo `DbJG58xu_bZ` | Rascunho |

*Em todos os artigos, o componente `AuthorBox.astro` foi atualizado para exibir de forma discreta o botão **“Informações de atendimento”** direcionado ao WhatsApp oficial (`https://wa.me/message/BDO4E64HECG5A1`), mantendo todas as URLs, slugs, categorias, referências e SEO intactos.*

---

## 2. Atualização jurídica — Bolsa Família e BPC/LOAS

**Fontes oficiais consultadas:**
- Lei nº 15.077/2024 (Planalto)
- Decreto nº 6.214/2007 atualizado pelo Decreto nº 12.534/2025 (Planalto)
- Orientações administrativas do MDS/INSS sobre cômputo do Bolsa Família e desligamento voluntário condicionado.

**Páginas e arquivos atualizados:**
- `src/content/blog/bpc-loas-crianca-autismo.md` (corrigida a afirmação anterior que excluía o Bolsa Família do cálculo)
- `src/content/blog/motivos-negativa-bpc-loas.md`
- `src/content/blog/depressao-direito-bpc-loas.md`
- `src/content/blog/cancer-direito-bpc-loas.md`
- `src/data/practiceAreasPart1.ts` (página `/direito-previdenciario/bpc-loas`)
- `src/data/faq.ts` (página inicial e `/perguntas-frequentes`)

**Pendência de validação jurídica pela advogada:** a interpretação acerca da irretroatividade da alteração do Decreto nº 6.214/2007 aos benefícios concedidos anteriormente foi registrada com cautela (“particularidades relacionadas à data de concessão”), aguardando confirmação jurídica final de Paloma Vidal antes de eventual detalhamento adicional.

---

## 3. Alterações no vídeo institucional

- Produzido vídeo institucional original de 60 segundos (“Quem sou e o que faço — Paloma Vidal”) exclusivamente com fotografias reais da advogada (`FOTOS/1..4.jpeg`), logomarca oficial, paleta do site e trilha instrumental ambiente original (sem voz sintética).
- **Arquivos gerados:** versão web `public/videos/paloma-vidal-video-institucional-web.mp4`, capa `public/videos/paloma-vidal-video-institucional-poster.webp`, legendas `public/videos/paloma-vidal-video-institucional-legendas.vtt`, além das versões privadas Full HD (`1920×1080`) e vertical Reels (`1080×1920`) em `private-deliverables/video/`.
- **Integração no site:** criado `src/components/videos/InstitutionalVideoPlayer.astro` (player HTML5 responsivo com `preload="metadata"`, controles, tela cheia, legendas e sem reprodução automática) aplicado na página inicial (`index.astro`), na página Sobre (`sobre.astro`) e como destaque principal na página de Vídeos (`videos.astro`), mantendo o reel anterior do Instagram (`DbVnRJTu7Pl`) apenas na galeria secundária de vídeos do Instagram.
