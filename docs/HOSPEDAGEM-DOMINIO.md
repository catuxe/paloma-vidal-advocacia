# Hospedagem, Domínio Próprio e Autenticação do CMS

Guia de publicação com baixo custo operacional e titularidade preservada em nome da advogada.

## 1. Repositório no GitHub

1. Crie um repositório **privado** no GitHub (sugestão: `paloma-vidal-advocacia`) para proteger rascunhos e arquivos originais.
2. Envie o código-fonte:
   ```bash
   git init
   git add .
   git commit -m "Versão inicial do site institucional e blog jurídico"
   git branch -M main
   git remote add origin <URL_DO_REPOSITORIO_PRIVADO>
   git push -u origin main
   ```
3. Nunca adicione arquivos `.env`, tokens ou senhas ao repositório.

## 2. Deploy no Netlify (plano gratuito)

1. Acesse [app.netlify.com](https://app.netlify.com) e clique em **Add new site → Import an existing project**.
2. Conecte o repositório privado no GitHub.
3. O Netlify detectará automaticamente as configurações de `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `22`
4. Defina um subdomínio provisório de homologação (ex.: `paloma-vidal-advocacia.netlify.app`, verificando disponibilidade).
5. Caso o formulário de contato seja utilizado, ative **Netlify Forms** no painel (gratuito até o limite do plano vigente) e configure notificações para `palomavidal.adv@gmail.com`.

## 3. Configuração do domínio próprio (`palomavidaladvocacia.com.br`)

Antes de alterar qualquer DNS, verifique no provedor de registro (ex.: Registro.br) se o domínio já está ativo, quem detém acesso administrativo e quais registros `MX` / `TXT` de e-mail existem (jamais remover registros de e-mail existentes).

Após aprovação do site em homologação:
1. No Netlify, acesse **Domain management → Add a domain** e informe `palomavidaladvocacia.com.br`.
2. Cadastre no provedor DNS exatamente os registros `A` e `CNAME` exibidos pelo painel do Netlify para o domínio raiz e para `www.palomavidaladvocacia.com.br` (não inventar IPs).
3. Defina `palomavidaladvocacia.com.br` como domínio primário (canônico) para redirecionamento automático de `www`.
4. Em **HTTPS**, aguarde a emissão automática do certificado SSL gratuito via Let's Encrypt e valide o cadeado seguro.

## 4. Autenticação segura do Decap CMS (`/admin`)

O Decap CMS exige um provedor OAuth para autenticar usuários do GitHub sem expor senhas no navegador.

> **Nota técnica importante sobre o Netlify Identity:** o serviço Netlify Identity foi descontinuado pela Netlify para novos projetos. Para manter custo operacional zero e autenticação segura com GitHub em repositório privado, recomenda-se uma das duas opções abaixo:
>
> 1. **Provedor OAuth gratuito via Cloudflare Workers** (padrão recomendado pela comunidade Decap CMS, utilizando um GitHub OAuth App com `Client ID` e `Client Secret` armazenados como segredos criptografados no Cloudflare Worker, plano gratuito até 100.000 requisições/dia) + configuração `base_url` em `public/admin/config.yml`; ou
> 2. **Sveltia CMS / Pages CMS** (alternativas compatíveis com a mesma estrutura `src/content/blog/` e autenticação GitHub OAuth sem custo).

Nenhuma senha fica exposta no código-fonte.

## 5. Custos recorrentes identificados

- **Registro de domínio `.com.br`:** taxa anual de renovação no Registro.br ou registrador escolhido (sob titularidade da advogada).
- **GitHub (repositório privado):** gratuito.
- **Netlify (hospedagem estática + SSL):** plano gratuito (respeitados os limites mensais vigentes de largura de banda e minutos de build).
- **Autenticação OAuth (Cloudflare Workers):** plano gratuito.
- **Google Search Console / Google Analytics 4:** gratuitos.
- **Google Ads:** investimento variável somente se e quando a advogada aprovar e ativar campanhas manualmente.
