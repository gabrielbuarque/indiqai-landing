# Revisão da landing — 30/09/2026

## Entrega

- Cartão criado do zero no ChatGPT no Chrome de Gabriel; mantém o formato da referência, com Brasa Burger e dados fictícios. Arquivos responsivos AVIF/WebP. Lord Chicken retirado dos assets publicados.
- Hero “Uma visita pode virar muitas.”, apoio com cartão, marca e recompensa. Design e botões preservados. Link “Veja como funciona”, seta para baixo, legenda de demonstração, nota “Seu cartão...” e placa lavanda da hero removidos.
- Paleta oficial; texto violeta voltou a #7541ee. QR vetorial de 37 módulos, sem rotação; 222px ou 185px. Segunda etapa usa compartilhar. Card/star, visita extra e selo registrado mantidos.
- “Cartão” substitui “programa” no conteúdo comercial, FAQ e llms.txt; recompensa escolhida pelo negócio.
- Quatro clientes indicados por Gabriel em carrossel contínuo. Caroli Douces usa o nome público verificado. Logos documentadas; Conexão Hub conserva o SVG branco/verde sobre fundo escuro. Pausa explícita, hover, foco e toque; suspensão fora da tela e aba oculta. Sem repetição acessível dos clones. Redução de movimento tem lista estática rolável.
- Seis fotografias novas, selecionadas e inspecionadas em conjunto.
- Rodapé com CNPJ e identificação da empresa, Instagram, WhatsApp, e-mail e endereço do site original. “Pesquisa de CNPJ” interpretada como localizar e exibir os dados oficiais da IndiqAI, no contexto do rodapé/legal; não foi criada uma ferramenta de consulta de terceiros.
- Termos (23 seções) e privacidade (15 seções) copiados do texto renderizado do site original. Comparação do conteúdo confirma preservação integral, exceto rótulo decorativo removido. Sem reescrita jurídica.
- Blog com índice, dois artigos introdutórios próprios e páginas independentes. Metadados, schema, sitemap e llms.txt atualizados. Canonical aponta ao domínio oficial pretendido, enquanto a publicação continua no Pages.

## Verificações

- Chrome real no perfil Gabriel, revisão primeiro mobile e depois desktop. Larguras 320, 360, 390, 430, 768 e 1440: sem overflow horizontal e sem conteúdo/CTA ultrapassando a viewport. `layout-check.json`.
- Cinco páginas internas revisadas em 320px: marcas e fontes carregadas, títulos e texto íntegros, links e canonical corretos.
- Menu e navegação, FAQ abrindo e fechando pelo teclado, aria-expanded acompanhando o estado. Transição preservada de 280ms.
- Logos carregadas; pausa/retomada do carrossel por botão e saída de foco. Estado running e mudança real de matriz de transformação confirmados.
- QR inspecionado visualmente em mobile: módulos nítidos, sem rotação ou blur. O destino é demonstração do Card, não registro de selo de cliente.
- Todas as referências locais das seis páginas geradas existem; JSON-LD parseável. Comparação legal literal aprovada. `content-check.json`.
- `node build.mjs`, análise de sintaxe de site.js e checagem do diff executadas.
- Lighthouse 13.5.0 mobile, simulação Slow 4G/CPU, site local com compressão Brotli: **100 desempenho / 100 acessibilidade / 100 boas práticas / 100 SEO**, LCP 1,6s, TBT 0ms, CLS 0. `lighthouse-local.json`. Primeira medição foi 99 em desempenho; otimização AVIF e dos logos trouxe a medição final a 100.
- O Lighthouse salvou o relatório completo e depois reportou erro de permissão ao limpar a própria pasta temporária no Windows; o relatório não tem runtimeError e contém todos os audits. Isso não invalida as métricas, mas é registrado aqui.

## Limites

Auditoria automática complementa a revisão visual e não prova toda acessibilidade em tecnologias assistivas. Pontuação de desempenho é uma medição sob as condições do relatório, não garantia em todo aparelho ou momento. A publicação é conferida separadamente abaixo/na evidência de Pages.
