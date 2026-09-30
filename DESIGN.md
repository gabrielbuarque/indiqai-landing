# Direção visual — IndiqAI

## Referências que definem esta versão

1. Storyboard mobile fornecido pelo Gabriel (`1000828066.jpg`): branco/lavanda, promessa curta, cartão e QR como protagonistas, três passos, categorias com fotos e encerramento violeta.
2. Login desktop do IndiqAI Card, branch `develop`, commit `0a8c93e4c06236ce9f234eb759603433b853d11e`: Poppins, contornos escuros, superfícies claras, sombras deslocadas, violeta/rosa/amarelo. Renderizado em 1440 × 900 para consulta.
3. Refero Styles / 7shifts como referência secundária de hierarquia: https://styles.refero.design/style/736830b5-90b1-47b0-99dd-d79454a0d22a

## Identidade e composição

- Cores oficiais: violeta #7541ee, rosa #fb517a, amarelo #f4b512, preto #171719, neutro #ebebeb. Fundo branco e lavanda #f4efff conforme o storyboard.
- Violeta de texto #7541ee, igual à paleta oficial; texto secundário #57545f. Contraste aprovado no audit. Poppins oficial local nos títulos, CTAs e destaques; fonte nativa do sistema nos parágrafos e controles de interface. Arquivos latinos com acentos portugueses (correção de 30/09 após orientação de Karen).
- Botões de 58px, contorno de 1.5px, raio de 10px. Camada violeta em hover e sempre presente em dispositivos de toque; resposta ao pressionar. O CTA no fundo violeta usa camada rosa.
- Layout verificado primeiro em 320, 360, 390 e 430px, depois 768 e 1440px. Sem ocultar overflow global para disfarçar erros.
- Hero revisada: “Uma visita pode virar muitas.” A explicação apresenta cartão digital, marca e recompensa. Punchpass inspira apenas o argumento de uma visita virar recorrência, sem suas métricas ou recursos.
- Nada de métricas, depoimentos ou oferta grátis sem evidência. Brasa Burger é fictícia, indicada no texto alternativo e llms.txt; as legendas de demonstração foram removidas por pedido do Gabriel.
- Cartão novo segue o formato da referência, gerado do zero no ChatGPT do Chrome do Gabriel. Fundo branco, sem a placa lavanda da hero; detalhe rosa de recompensa e ticket de visita preservados.
- QR sem rotação, 37 módulos, 222px ou 185px. Na segunda etapa, ícone de compartilhar. Demais ícones e botões aprovados preservados.
- As oito marcas informadas pelo Gabriel aparecem em carrossel contínuo de 72 s. Não pausar no hover/toque e não mostrar controle de continuar, por pedido explícito. Respeitar movimento reduzido e suspender fora da tela/aba oculta. Logos transparentes com recorte pelo conteúdo, escala óptica individual, mesma área de exposição e nomes em texto nativo. Título e subtítulo centralizados, com placa lavanda e camada rosa atrás de “Quem já está”. A referência verbal ao produto é masculina: “o IndiqAI”.
- Termos e privacidade preservam o texto original; blog tem índice e dois artigos introdutórios. Rodapé inclui identificação da empresa e canais oficiais.

## Motion

O gesto central é uma visita virar um selo: leitura do QR, preenchimento do selo e confirmação, uma única vez ao entrar em vista. A cena inicial tem uma chegada curta da confirmação e um loop de respiração de 7 s no celular. O ticket de visita é reto, com título de 16–17 px e apoio de 12–13 px para nitidez. Conteúdo visível por padrão.

- Feedback de botão: 160–180ms. Menu: 180ms. FAQ: altura animada em 280ms, abrindo e fechando, interrompível. Cena de registro: sequência curta de 1.37s.
- CSS e Web Animations API; sem biblioteca de animação ou JavaScript de terceiros.
- `prefers-reduced-motion` elimina deslocamentos animados; FAQ mantém resposta imediata. Animações finalizadas quando a aba fica oculta.
- Teclado, Escape no menu, foco visível, estado `aria-expanded` e FAQ nativo sem JavaScript.
- Referências: https://motion.dev/docs/react-layout-animations e https://webflow.com/blog/motion-and-accessibility

## Evidência

Capturas e relatório da revisão em `docs/evidence/landing-redesign/`. Capturas representam esta versão; a aprovação visual continua sendo do Gabriel.
