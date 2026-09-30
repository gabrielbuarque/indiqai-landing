# Clientes e nitidez — 30/09/2026

Pedido: título/subtítulo centralizados, destaque em camada atrás da primeira linha, “com o IndiqAI”, logos padronizadas e melhora de nitidez do texto do ticket de visita.

Tratamento das logos solicitado no ChatGPT do Chrome de Gabriel, com upload autorizado dos oito arquivos originais. Usar processamento dos pixels originais, não reconstrução generativa das letras. Remover fundos e margens, manter proporções, versões positivas de marcas brancas para a superfície branca. PNG sem perda para os recortes e SVG vetorial para Conexão Hub. Nomes de todos os clientes em texto nativo sob a mesma área de marca. Arquivos originais preservados para comparação e reversão.

O ticket continua com texto HTML. A inclinação foi retirada tanto do CSS quanto da sequência de chegada; título aumentado a 17 px desktop/16 mobile, apoio a 13 px desktop/12 mobile. Camada violeta e check amarelo preservados.

## Verificação local

Build concluído; revisão visual no Chrome em 1440 px, 390 px e 320 px. Sem transbordamento horizontal. As oito imagens carregaram, incluindo as duas versões SVG. Título e subtítulo centralizados, logos com nomes alinhados, ticket de visita sem inclinação e sem corte de texto em 320 px. Carrossel contínuo preservado. `git diff --check` sem erros.

Publicação 71511e7 verificada no Chrome: GitHub Pages redireciona ao domínio configurado por Gabriel, https://oferta.indiqai.com/. Na primeira entrada do carrossel, duas logos com loading lazy demoraram a aparecer. Carregamento antecipado aplicado às oito marcas e à repetição para evitar lacunas no movimento.
