# IndiqAI Landing

Landing estática em HTML, CSS e JavaScript nativo. Fontes, marca, imagens e QR locais; sem analytics, scripts ou imagens de terceiros durante o carregamento.

**Publicação:** https://gabrielbuarque.github.io/indiqai-landing/

## Preview

```sh
node preview-server.mjs
```

A aplicação abre em http://127.0.0.1:4173. O workflow publica apenas os arquivos do site e `assets/`, sem documentos de revisão.

## Conteúdo e SEO

HTML semântico, FAQ visível com JSON-LD correspondente, metadados, sitemap, robots e llms.txt. Os CTAs levam ao IndiqAI Card. Canonical e sitemap apontam para `https://indiqai.com/`, o domínio oficial pretendido; o Pages é o preview público e não altera o domínio de produção.

## Design e verificação

Referências e regras em `DESIGN.md`; fontes dos assets em `ASSET-SOURCES.md`; capturas e resultados em `docs/evidence/landing-redesign/`. Lighthouse é medido sob condições descritas no relatório, sem promessa de pontuação invariável em qualquer aparelho ou host.

Revisão de 30/09/2026: `docs/evidence/landing-refinement/`. Nova imagem fictícia no formato do cartão original, clientes reais informados, QR vetorial nítido, fotos renovadas e páginas independentes de blog, termos e privacidade. Texto legal preservado da versão vigente do site original.

## Build para Pages

`node build.mjs` prepara `site/` com HTML e CSS incorporado, JavaScript nativo e assets locais. A publicação usa esse diretório; documentos e capturas ficam somente no repositório. A pontuação final publicada está registrada no relatório de revisão.
