# Pendências para Publicação Definitiva

Lista atualizada após a **Segunda Etapa (25/11/2026)**, registrando exclusivamente os itens que ainda dependem de confirmação, login externo, revisão jurídica ou autorização expressa.

## Migração GitHub, Netlify e Domínio

- [ ] Confirmar o **username exato no GitHub** da conta pessoal vinculada a `catuxe@gmail.com` para executar a transferência oficial do repositório `paloma-vidal-advocacia` (atualmente em `ldvsantos02-sketch`).
- [ ] Realizar a transferência oficial de propriedade no GitHub, aceitar na conta de destino e atualizar `origin` local + `repo` em `public/admin/config.yml` (ver `docs/RELATORIO-MIGRACAO-GITHUB-NETLIFY.md`).
- [ ] Validar a reconexão automática do Netlify após a transferência (e decidir sobre eventual transferência da titularidade do site Netlify, preservando `https://paloma-vidal-advocacia.netlify.app/`).
- [ ] Apontar os registros DNS de `palomavidaladvocacia.com.br` no Registro.br para o Netlify após aprovação final da advogada e validar o certificado SSL/HTTPS.
- [ ] Configurar a autenticação OAuth do painel `/admin` (ou ativar Pages CMS com `.pages.yml`, caso optado pela menor manutenção).

## Homologação e revisão jurídica (Segunda Etapa)

- [ ] Aprovação da advogada na branch de homologação `revisao-editorial-video-institucional` antes do merge em `main`.
- [ ] Confirmação jurídica da advogada sobre a **irretroatividade** da inclusão do Bolsa Família no cálculo de renda do BPC (Decreto nº 12.534/2025 / Decreto nº 6.214/2007) para benefícios anteriores.
- [ ] Revisão e eventual liberação dos 2 artigos complementares ainda mantidos como rascunho (`depressao-direito-bpc-loas` e `cancer-direito-bpc-loas`).
- [ ] Aprovação do **novo vídeo institucional** (e, opcionalmente, gravação da narração com a voz real de Paloma Vidal para substituir a trilha instrumental).
- [ ] Identificação do tema do quinto vídeo do Instagram (`https://www.instagram.com/reel/DbBA-9kOalh/`), mantido como `pendente_classificacao`.
- [ ] Aprovação final da Política de Privacidade (`/privacidade`) e Política de Cookies (`/cookies`).

## Google Search Console, Google Ads e Portfólio

- [ ] Verificação de propriedade de `palomavidaladvocacia.com.br` no Google Search Console e envio de `sitemap-index.xml`.
- [ ] Definição futura de orçamento e ativação manual de Google Ads (nenhuma campanha foi ativada nesta etapa).
- [ ] Autorização expressa da advogada para publicação externa do estudo de caso em `docs/CASE-PORTFOLIO-MAFALDA-STUDIO.md` no portfólio da Mafalda Studio.
- [x] Crédito técnico no rodapé ativado (`showDeveloperCredit: true` em `src/config/professional.ts`).
