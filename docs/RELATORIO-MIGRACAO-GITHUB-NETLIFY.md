# Relatório de Migração — GitHub e Netlify

**Data do diagnóstico:** 25 de novembro de 2026  
**Desenvolvimento:** Mafalda Studio (`mafaldastudio.dev@gmail.com`)  
**Endereço publicado atual (preservado):** https://paloma-vidal-advocacia.netlify.app/

---

## 1. Diagnóstico do ambiente atual

| Item | Estado verificado |
| --- | --- |
| **Repositório original** | `https://github.com/ldvsantos02-sketch/paloma-vidal-advocacia.git` |
| **Proprietário anterior** | `ldvsantos02-sketch` |
| **Branch principal (produção)** | `main` (commit `aa0e480`, preservado intacto) |
| **Tag de restauração criada** | `v1.0-pre-revisao-editorial` |
| **Branch de homologação (Segunda Etapa)** | `revisao-editorial-video-institucional` |
| **Contas autenticadas no `gh` CLI local** | `ldvsantos02-sketch` (ativa), `ldvsantos`, `vidalcenter` |
| **Conta de destino informada** | Conta pessoal vinculada a `catuxe@gmail.com` |
| **Username confirmado de destino** | **Pendente de confirmação pela desenvolvedora** |
| **Visibilidade recomendada** | Repositório **privado** (contém fotos, marca, rascunhos e documentação interna) |

> **Conformidade de segurança:** nenhuma senha, token ou segredo foi armazenado em arquivos, histórico Git ou documentação. Por segurança e em cumprimento à Seção 4.2, o username da conta `catuxe@gmail.com` **não foi presumido** e nenhuma transferência destrutiva foi executada sem confirmação prévia.

---

## 2. Estratégia oficial de transferência no GitHub (preservação total)

Assim que o username exato da conta vinculada a `catuxe@gmail.com` for confirmado:

1. **Na conta atual (`ldvsantos02-sketch`):**
   - Acessar `https://github.com/ldvsantos02-sketch/paloma-vidal-advocacia/settings`.
   - Em **Danger Zone → Transfer ownership**, informar o username confirmado da conta de destino e confirmar o nome `paloma-vidal-advocacia`.
2. **Na conta de destino (`catuxe@gmail.com`):**
   - Aceitar o e-mail oficial de transferência do GitHub (isso preserva integralmente histórico de commits, autoria original, branches `main` e `revisao-editorial-video-institucional`, e a tag `v1.0-pre-revisao-editorial`).
3. **Atualização local (escopo exclusivo deste repositório):**
   ```powershell
   git remote set-url origin https://github.com/<USERNAME-CONFIRMADO>/paloma-vidal-advocacia.git
   git remote -v
   git fetch --all
   git status
   ```
4. **Atualização do CMS (`public/admin/config.yml`):**
   - Substituir `repo: ldvsantos02-sketch/paloma-vidal-advocacia` por `repo: <USERNAME-CONFIRMADO>/paloma-vidal-advocacia`.

*(Caso a transferência oficial apresente restrição administrativa, a estratégia alternativa é criar o repositório privado `paloma-vidal-advocacia` na conta de destino e executar `git push --mirror` a partir de um clone bare, preservando commits, autoria, branches e tags — mantendo o repositório anterior intacto até a validação completa.)*

---

## 3. Reconexão e continuidade no Netlify

- **URL de produção preservada:** `https://paloma-vidal-advocacia.netlify.app/` (nenhum projeto foi excluído ou recriado).
- **Configuração de build mantida em `netlify.toml`:** `npm run build` → `dist` (Node 22), cabeçalhos de segurança e regra `/admin`.
- **Após a transferência no GitHub:**
  1. Verificar no painel do Netlify (**Site configuration → Build & deploy → Continuous deployment**) se o vínculo automático continuou ativo via redirecionamento do GitHub.
  2. Caso solicite reconexão, autorizar o acesso da nova conta GitHub ao repositório transferido e reconectar mantendo o mesmo site Netlify, variáveis de ambiente e subdomínio.
  3. Se o site Netlify estiver na conta de Diego, avaliar com autorização prévia: (a) adicionar a desenvolvedora como administradora ou (b) solicitar a transferência oficial do site no Netlify para a conta da Mafalda Studio, verificando antes o impacto em plano, variáveis e formulários.

---

## 4. Procedimento de rollback

1. **Rollback rápido no Netlify:** acessar **Deploys**, selecionar o último deploy estável de `main` e clicar em **Publish deploy** (restauração imediata em segundos, sem novo build).
2. **Rollback via Git:** retornar à tag `v1.0-pre-revisao-editorial` (`git checkout v1.0-pre-revisao-editorial`) ou reverter o merge na branch `main`.
3. **Recomendação de segurança:** ativar autenticação em dois fatores (2FA) tanto na conta GitHub quanto na conta Netlify da Mafalda Studio.
