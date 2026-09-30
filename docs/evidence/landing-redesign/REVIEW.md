# Revisão da landing — 30/09/2026

## Escopo

Redesign conforme storyboard mobile enviado e login desktop do Card em `develop`. Capturas atuais em `mobile.png`, `desktop.png`, `full-390.png`, `full-1440.png` e capturas das seções. A revisão foi feita sobre a página renderizada, usando Chrome e Playwright com viewports reais.

## Resultados

- 320, 360, 390, 430, 768 e 1440px: largura do documento igual à viewport; nenhum elemento do conteúdo fora das bordas.
- Headline em duas linhas; CTA com 58px de altura e sombra violeta presente por padrão no mobile.
- Todas as imagens carregadas e assuntos conferidos visualmente. QR de demonstração válido, apontando para IndiqAI Card.
- FAQ: 68px fechado → altura intermediária de 152px → 181px aberto; fechamento com altura intermediária e retorno a 68px. Teclado e interrupção por cliques rápidos funcionando.
- Movimento reduzido: resposta imediata e nenhuma animação ativa. Sem JavaScript: conteúdo, navegação e FAQ nativo disponíveis.
- Menu mobile abre e fecha com Escape; estado aria-expanded consistente.
- Axe WCAG 2 A/AA e 2.1 AA: nenhuma violação automática nos viewports 390 e 1440px. Não substitui avaliação humana de acessibilidade.
- JSON-LD de FAQ corresponde exatamente às respostas visíveis. Nenhum erro de console ou requisição ausente na revisão final.

## Lighthouse local — mobile

Lighthouse 13.5.0, Chrome headless, throttling mobile padrão, servidor local com Brotli. Relatório integral: `lighthouse-local.json`.

| Categoria | Nota |
| --- | --- |
| Performance | 100 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

LCP 1.7s, Speed Index 1.2s, TBT 0ms, CLS 0. O CLI escreveu o relatório completo e depois apresentou EPERM ao remover seu perfil temporário no Windows; o relatório não contém runtimeError. O resultado é desta execução local, não uma garantia invariável no Pages ou em qualquer aparelho.

A composição foi inspecionada visualmente pelo agente. A aprovação visual permanece com Gabriel.

## Publicação verificada

Versão do site: `c3dc3c464bd3ba61d05253acbd8b07906f5dbf3f`. Deploy GitHub Pages concluído no run `36690531039`. URL retornando 200, layout em 390 e 1440px sem overflow, imagens carregadas, CTA com resposta ao pressionar/soltar e FAQ abrindo/fechando na página pública. O build injeta o CSS no HTML para remover uma requisição bloqueante; o arquivo fonte continua separado.

Última medição mobile publicada, `lighthouse-pages-final.json`:

| Categoria | Nota |
| --- | --- |
| Performance | 99 |
| Acessibilidade | 100 |
| Boas práticas | 100 |
| SEO | 100 |

LCP 1.7s, Speed Index 2.5s, TBT 100ms, CLS 0. O alvo de 100 em Performance foi atingido localmente, mas ainda não na medição pública final.

As primeiras execuções públicas marcaram 91 e 96 em Performance e 92 em SEO com timeout na busca de robots da raiz. Os relatórios dessas execuções também foram preservados, em vez de substituir os resultados. A busca direta confirmou `/robots.txt` da raiz com 404 e o arquivo do projeto com 200; no último audit, o teste da raiz foi considerado não aplicável. Robôs leem o arquivo na raiz do host, conforme https://developers.google.com/crawling/docs/robots-txt/create-robots-txt. Não foi criado um segundo repositório para modificar a raiz do domínio pessoal do Gabriel.
