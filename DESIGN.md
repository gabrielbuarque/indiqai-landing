---
name: IndiqAI
version: 1.0
updated: 2026-09-30
theme: light
baseline: https://oferta.indiqai.com/
baseline_commit: 697a37b65a67c37f46d4f4bf1fc26469cefbbf77
scope: Identidade visual consolidada a partir da landing aprovada
---

# IndiqAI — Design System

> Cartões e ações em camadas sobre branco. Poppins dá a voz; violeta conduz a ação; rosa e amarelo pontuam recompensa e proximidade.

## 1. Overview / North Star

O IndiqAI fala com quem cuida de um negócio e quer ver seus clientes voltarem. A composição permite reconhecer, nesta ordem: **o benefício, o cartão e a próxima ação**. A marca aparece em títulos expressivos, contornos escuros e uma camada sólida deslocada atrás de ações e confirmações. O restante dá espaço para ler.

**Personalidade:** próxima, direta, confiante e com movimento. Cartão, selo, QR e recompensa dão significado aos detalhes visuais. A estrela rosa representa recompensa; um círculo solto sem relação com a cena não cumpre esse papel.

**Gesto de assinatura:** superfície clara, contorno de 1,5 px e camada colorida sem blur. Ao interagir, a face se desloca levemente. No celular, a camada já fica visível. Essa profundidade conecta botão, ticket, ícone dos passos e título destacado.

### Autoridade e alcance

- **Aprovado:** escolhas e correções expressas por Gabriel nesta landing, incluindo Poppins nos títulos/destaques conforme orientação de Karen.
- **Observado:** medidas da implementação publicada, conferidas em `styles.css`, `site.js`, fontes locais e navegador. São a referência reproduzível desta superfície.
- **Ainda não definido:** composição de dashboard, scanner, formulários, tabelas, estados de erro e telas transacionais. Herdam a identidade, mas precisam do contexto e da revisão próprios; não se presume a densidade ou os loops de uma landing.

O pedido atual prevalece. Este arquivo orienta a identidade; o brief da superfície define a tarefa e a composição; o componente existente define a implementação. Identificar divergências antes de atualizar a regra. Refero orienta a organização documental; a marca continua IndiqAI.

## 2. Tokens — Colors

| Nome | Valor | Token atual | Papel e limite |
|---|---|---|---|
| Branco | `#ffffff` | Canvas/surface literal | Fundo dominante, tickets, QR e leitura. Dá espaço às camadas. |
| Violeta | `#7541ee` | `--violet`, `--purple-ink` | Ação principal, trecho destacado, foco, ícones e camadas. Ambos os tokens resolvem para esta cor na versão atual. |
| Rosa | `#fb517a` | `--pink` | Recompensa e contraponto: estrela, camada do título de clientes e CTA sobre violeta. Não significa erro. |
| Amarelo | `#f4b512` | `--gold` | Check, selo e conquista. Não é preenchimento padrão de CTA nem significado universal de alerta. |
| Tinta | `#171719` | `--black` | Títulos, texto principal, contornos e camada escura do CTA principal. |
| Neutro | `#ebebeb` | `--neutral` | Base de imagens e apoio neutro. Não substitui o branco como canvas desta landing. |
| Lavanda | `#f4efff` | `--lavender` | Apoio: botões leves, passos, placa de título e seção do cliente. |
| Texto secundário | `#57545f` | `--muted` | Explicações, legendas e metadados. Não diminuir a opacidade dos parágrafos. |
| Linha suave | `#eae5f3` | Valor observado | Separadores de seção, navegação e carrossel. Não contornar cada divisória em tinta. |
| Lavanda tênue | `#faf8ff` | Valor observado | Faixa curta de benefícios. Variação de superfície, não nova cor de marca. |

**Distribuição:** branco domina; tinta organiza; violeta chama a ação; lavanda agrupa; rosa e amarelo aparecem em detalhes com função. Não transformar todos os blocos em superfícies roxas. O encerramento pode usar faixa violeta, texto branco e CTA claro.

Gradiente de texto, halo neon, brilho e vidro com blur não definem esta identidade. Preservar cores dos clientes dentro das logos; não aplicar a paleta IndiqAI sobre marcas de terceiros.

## 3. Tokens — Typography

**Marca:** `Poppins, system-ui, sans-serif`. Poppins real, local em WOFF2, com letras latinas, acentos portugueses e pesos 400/500/600/700. O nome no CSS não prova que a fonte carregou. Conferir arquivo e renderização, especialmente `ã`, `ç`, `é` e `ê`.

**Leitura e interface:** `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Parágrafos, navegação, FAQ, legendas e documentos legais. A orientação de Karen mantém a voz Poppins nos títulos e destaques e a leitura funcional no restante.

| Papel | Família / peso | Tamanho de referência | Entrelinha / tracking |
|---|---|---|---|
| Hero | Poppins 600 | Desktop: `clamp(52px, 5.1vw, 72px)`; tablet: 52 px; mobile: `clamp(34px, 9.4vw, 49px)`; até 350 px: 33 px | 1,04 / −0,04 em |
| Seção | Poppins 600 | Desktop: `clamp(34px, 3.8vw, 50px)`; mobile: `clamp(33px, 9.4vw, 42px)` | 1,16 / −0,04 em |
| Clientes | Poppins 600 | 29–38 px desktop; 30 px mobile; 28 px até 350 px | 1,38; placa: −0,035 em |
| Componente | Poppins 600 | 20–26 px; passos: 22 px | 1,15–1,3 / −0,035 a −0,04 em |
| Editorial | Poppins 600 | 24–31 px desktop; 26 px mobile | 1,25 / −0,035 em |
| CTA | Poppins 600 | 15 px padrão; 13 px compacto; variantes mobile 13–14 px | 1,4 / normal |
| Apoio da hero | Sistema 400 | 18 px desktop; 14–15 px mobile | 1,7 / normal |
| Corpo | Sistema 400 | 16 px desktop; 14 px mobile | Aproximadamente 1,65–1,8 / normal |
| Ticket de visita | Poppins no título; sistema no apoio | Título 17/16 px desktop/mobile; apoio 13/12 px | Título 1,4; apoio 1,6 / −0,02 em só no título |
| Nome de cliente | Sistema 500 | 12 px desktop; 11 px mobile | 1,5 / normal |
| Artigos e termos | Sistema 400 | 15 px desktop; 14 px mobile | 1,85 / normal |

Títulos podem usar `text-wrap: balance`. Destacar uma frase ou consequência em violeta, com o restante em tinta. Exceções de tamanho respondem ao papel do bloco, não a uma nova escala arbitrária.

Não apertar tracking ou reduzir corpo para fazer a frase caber. Quebras respeitam o sentido e a largura estreita. Texto útil é HTML, não lettering embutido em imagem gerada. Medida de leitura de artigos: até 70 ch; apoio da hero: aproximadamente 470 px no desktop.

## 4. Tokens — Spacing & Shapes

**Densidade:** aberta no marketing; proximidade dentro do grupo e distância clara entre assuntos. A unidade de 4 px orienta novos espaçamentos; não significa que toda medida existente seja múltipla de quatro.

| Papel | Valor observado / referência |
|---|---|
| Escala preferencial | 4, 8, 12, 16, 20, 24, 32, 40, 48, 64 px |
| Container | Máximo 1160 px, centralizado |
| Gutter | 32 px desktop; 20 px mobile; 16 px até 350 px |
| Seção padrão | Padding vertical 112 px desktop; 68 px mobile |
| Título → apoio → ação | Aproximadamente 17–28 px entre grupos, conforme hierarquia |
| Botão padrão | Altura mínima 58 px; padding 14 × 23 px; gap 20 px |
| Botão compacto | Altura mínima 46 px; padding 10 × 16 px; gap 14 px |

### Vocabulário de forma

| Elemento | Raio | Contorno / profundidade |
|---|---|---|
| Botão e FAQ | 10 px | Botão: 1,5 px em tinta; FAQ sem sombra em cada linha |
| Placa de título | 12 px | 1,5 px em tinta; camada rosa 5 × 5 px |
| Ticket e estrela | 13 px | 1,5 px em tinta; camada sólida |
| Passos e foto editorial | 14 px | Contorno/camada nos passos; foto sem sombra obrigatória |
| Moldura de QR | 25–26 px | Geometria da cena, não raio genérico de formulário |
| Mockup do celular | 38 px na hero | Silhueta de dispositivo; não transferir para texto |
| Check e selo | Círculo | Conquista/progresso com símbolo reconhecível |

Preservar diferenças por função. Não inventar um raio por bloco nem converter tudo em pills. Ajustes ópticos, como o padding de 17 × 18 px do ticket, são locais.

## 5. Surfaces / Elevation & Depth

| Superfície | Aparência | Uso |
|---|---|---|
| Canvas | Branco, sem sombra | Leitura, respiro e base da composição |
| Apoio | Lavanda ou lavanda tênue | Agrupar um momento da narrativa |
| Face em camada | Branco/lavanda, contorno escuro, sombra sólida | CTA, confirmação, passos e destaque pontual |
| Encerramento | Violeta, texto branco, CTA claro com camada rosa | Fechar a promessa e a conversão |

**Profundidade tem direção:** baixo e direita, sem blur. Apoio 3 × 3 px; passo 4 × 4 px; título 5 × 5 px; ticket 6 × 6 px. A hero usa camada em tinta; apoio usa violeta, rosa ou amarelo conforme função.

Não sombrear cada parágrafo, logo, foto ou artigo. Benefícios do negócio se separam por alinhamento e linhas; o blog é editorial. A imagem do celular pode inclinar e respirar; a face com texto do ticket de visita fica reta para nitidez.

## 6. Components

### A. CTA em camadas

**Papel:** indicar a próxima ação. Rótulo verbal e concreto: “Criar meu cartão fidelidade”. A seta pequena aprovada no CTA faz parte da ação; não justifica espalhar setas em links e listagens.

- **Hero:** violeta, texto branco, Poppins 600, raio 10 px, contorno em tinta e camada em tinta 4 × 4 px; hover 6 × 6 px. No mobile, camada 5 × 5 px já visível.
- **Apoio:** lavanda, texto em tinta e camada violeta 3 × 3 px. Preservar hierarquia frente ao principal.
- **Sobre violeta:** branco com camada rosa. Manter contraste da ação.
- **Hover:** face desloca aproximadamente −2 × −2 px; seta avança 3 px; feedback 160–180 ms.
- **Press:** face avança 1 × 1 px e camada se comprime. Touch recebe destaque no estado padrão.

### B. Ticket “Mais uma visita!”

**Papel:** reconhecer visita como progresso. Face branca, raio 13 px, contorno escuro, camada violeta 6 × 6 px e check amarelo. Título e apoio são texto nativo. Face reta, sem rotação permanente; apoio com pelo menos 12 px nesta composição. Não sacrificar nitidez para caber sobre o celular.

### C. Título destacado e clientes

**Papel:** prova social real. “Quem já está” numa placa lavanda, contorno escuro e camada rosa; “com o IndiqAI.” abaixo em violeta. Título e subtítulo centralizados. Reservar essa placa a um destaque de função equivalente; não emoldurar todos os títulos.

Logos transparentes, proporção original, margens vazias recortadas e escala óptica. Mesmo espaço de exposição; tamanho visual equivalente não significa largura idêntica. Área de referência: 190 × 92 px desktop e 160 × 88 px mobile, com nome alinhado em HTML abaixo. Buscar fonte oficial; não reconstruir marcas com geração de imagem. Limpeza não recupera resolução ausente.

Carrossel contínuo e linear em 72 s. Sem pausa no hover/toque nem controle “continuar movimento”, conforme pedido de Gabriel. Carregar marcas antes de entrarem em cena. Repetição oculta da árvore de acessibilidade. Movimento reduzido oferece faixa estática com rolagem horizontal; aba oculta e área fora de vista suspendem o loop.

### D. Passos e QR

**Papel:** criar → divulgar → voltar. Ícones de cartão, compartilhar e estrela; moldura lavanda, contorno e camada sólida. QR não substitui compartilhar na etapa de divulgação.

QR real em SVG, preto sobre branco, reto e com margem livre. Demonstração atual: 37 módulos, 222 px ou 185 px na tela estreita, para não interpolar em medidas fracionadas. Sem blur, distorção, ícone sobre os módulos ou QR decorativo inventado. Imagem de celular prioriza fidelidade de produto; código funcional prioriza leitura e nitidez.

### E. FAQ e navegação

**Papel:** remover dúvida sem interromper leitura. Pergunta com alvo amplo; resposta abre e fecha com altura animada em 280 ms, aceitando novo clique durante a execução. `details/summary` ou comportamento acessível equivalente, teclado e estado expandido sincronizado. Sem JavaScript, resposta acessível; com movimento reduzido, troca imediata.

Header claro com logo original e navegação discreta; CTA compacto em camadas. Menu mobile com feedback de 180 ms, Escape e retorno de foco. Navegação de marketing não é padrão obrigatório para ferramentas do lojista.

### F. Blog e fotografias

**Papel:** leitura e descoberta. Foto 4:3, raio 14 px, título Poppins e resumo abaixo, sem container pesado envolvendo tudo. Duas colunas no desktop; uma no mobile. Artigo inteiro pode ser link; navegação auxiliar é texto simples, sem novos botões e setas decorativas. Hover pode ampliar foto em 1,035 e colorir o título; foco permanece visível.

Fotos correspondem à atividade: comida, café, barbearia, beleza, treino e comércio. Boa resolução, assunto legível no crop e linguagem compatível entre categorias. Foto ilustrativa não prova instalação ou resultado de cliente.

## 7. Motion

Movimento mostra relação e resposta: visita vira selo; celular respira; confirmação chega ao terminar a ação. Copy e CTA permanecem visíveis sem animação.

| Gesto | Referência atual | Regra |
|---|---|---|
| Botão | 160–180 ms | Curto; não pulsar continuamente |
| Menu | 180 ms | Feedback de abertura |
| FAQ | 280 ms | Abrir e fechar, interrompível |
| Ticket da hero | 680 ms + atraso de 180 ms | Chegada uma vez; termina reto |
| QR → selo → confirmação | Leitura de 1,5 s; selo de 360 ms; ticket de 520 ms | Sequência sem sobreposição |
| Celular | Loop de 7 s; até 9 px vertical; rotação −3° a −1,7° | Respiração discreta, sem tremor |
| Clientes | Loop linear de 72 s | Sem vazio entre repetições |

Easing de resposta: `cubic-bezier(.22, 1, .36, 1)`. Celular: `cubic-bezier(.45, 0, .55, 1)`. Preferir transform/opacity; altura é justificada no FAQ. CSS e Web Animations API atendem ao site: a estética não exige Framer, Webflow ou biblioteca adicional.

Respeitar `prefers-reduced-motion`, pausar loops fora de vista/aba oculta e entregar estado final legível. Não transferir loops promocionais para scanner, tabela ou confirmação operacional sem avaliar a tarefa.

O selo vazio conserva o contorno preto e o fundo branco. Animar apenas o preenchimento amarelo depois do scanner; não aplicar opacidade ao círculo inteiro. O ticket aparece só depois do preenchimento.

## 8. Layout / Responsive

**Mobile primeiro:** 320, 360, 390 e 430 px; depois 768 e 1440 px. Breakpoints atuais: 350, 767/768 e 1000 px. Ordem narrativa compreensível sem depender do desktop.

Hero: promessa e apoio → CTA → celular. Desktop coloca texto e demonstração lado a lado; mobile coloca demonstração depois da ação. Fundo branco, sem placa lavanda atrás do celular rejeitada por Gabriel. Imagem em movimento não cobre botão, título ou ticket.

Narrativa alinhada à esquerda; prova social centralizada; passos e demonstrações em duas colunas no desktop e empilhados no mobile. Blog editorial; categorias em grade com fotos. Um foco por seção; não converter todo benefício em card.

A escala de marketing não é escala de dashboard. Tela operacional preserva fonte, contorno e cor, ajustando densidade à tarefa. Não copiar hero para toda tela nem esconder erro com `overflow-x: hidden` global.

## 9. Voice / Content

“**O IndiqAI**”, “com o IndiqAI”. Falar de **cartão fidelidade**, marca, recompensa, visita e cliente voltando. O lojista escolhe a recompensa e cria o cartão; não trocar por “criar um programa”.

Promessa curta, explicação simples, ação inequívoca. “Uma visita pode virar muitas.” apresenta benefício; apoio explica como. Punchpass inspira visita → recorrência, sem copiar métricas ou recursos. Evitar jargão de IA, superlativos sem evidência e detalhes técnicos no fluxo comercial.

Prova social usa clientes confirmados. Não fabricar depoimentos, indicadores, gratuidade ou resultados. Lord Chicken/LordTick não são clientes para esta página. Brasa Burger é demonstração fictícia: ilustra o cartão, não é caso de sucesso.

## 10. Do / Don't

| Fazer | Evitar |
|---|---|
| Dar função à camada, estrela, check e selo | Bolinhas sem relação com a narrativa |
| Poppins real em títulos, CTAs e destaques | Fonte sem alfabeto latino; texto útil em imagem gerada |
| Destacar CTA por contraste e camada | Glow, sombras excessivas, pulsação e ações competindo |
| Camada visível no mobile | Depender de hover para comunicar ação |
| Face de ticket legível e reta | Fonte miúda e texto rotacionado sem nitidez |
| Preservar logo e presença óptica | Largura idêntica cega, fundos díspares, redesenho por IA |
| Blog editorial e links discretos | Botões/setas repetidos em cada item de leitura |
| Motion fluido e acessível | Conteúdo invisível até animar; pausa involuntária no hover |

## 11. Accessibility / Performance

Alvos interativos de pelo menos 44 px, foco visível de 3 px com offset 5 px, contraste adequado ao tamanho do texto e navegação por teclado. Ícones e cores não substituem rótulo, forma ou estado acessível. Textos maiores devem continuar cabendo sem corte.

Imagens com dimensões reservadas e formatos modernos; fontes WOFF2 locais; carregar a imagem principal prioritariamente e imagens fora da primeira tela sob demanda, exceto as logos do carrossel que precisam estar prontas antes de entrar em vista. SEO/AEO dependem de conteúdo semântico verdadeiro, não de copy exagerada.

PageSpeed 100/100 é meta de qualidade, não consequência garantida deste arquivo. Só declarar nota com medição atual da versão entregue. Não adicionar testes, detector ou biblioteca porque uma referência recomenda; isso requer tarefa própria.

## 12. Agent Prompt Guide / Quick Start

Antes de alterar visual, ler este arquivo e o componente da superfície. Preservar o aprovado e mudar o escopo pedido. Se o componente não existe, declarar a proposta; novo campo, tabela ou modal não é decisão já aprovada da marca.

**Resumo:** branco dominante; tinta no contorno/título; Poppins no destaque; violeta na ação; rosa/amarelo em recompensa; camadas sem blur; leitura nativa no corpo; mobile primeiro; conteúdo verdadeiro; motion com estado final legível.

Os valores abaixo são resumo portátil. Nomes de cores existem no site; aliases de fonte e forma são convenções documentais para adoção futura, não tokens gerados ou integração automática.

```css
:root {
  --violet: #7541ee;
  --purple-ink: #7541ee;
  --pink: #fb517a;
  --gold: #f4b512;
  --black: #171719;
  --neutral: #ebebeb;
  --lavender: #f4efff;
  --muted: #57545f;
  --font-brand: Poppins, system-ui, sans-serif;
  --font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --radius-action: 10px;
  --border-signature: 1.5px solid var(--black);
  --layer-support: 3px 3px 0 var(--violet);
  --layer-confirmation: 6px 6px 0 var(--violet);
  --ease: cubic-bezier(.22, 1, .36, 1);
}
```

**Revisão:** tela estreita antes do desktop; fonte real e acentos; quebras, QR e logos; estados padrão/hover/press/foco; motion reduzido; conteúdo sem JavaScript. Atualizar esta regra quando uma decisão visual mudar.

## 13. References / Provenance

- **Base aprovada:** [landing IndiqAI](https://oferta.indiqai.com/), versão `697a37b`; decisões de Gabriel neste trabalho e orientação de tipografia de Karen.
- **Código:** `styles.css`, `site.js`, `index.html`, `assets/brand/`, `assets/fonts/`, `assets/clients/clean/`. Origens de mídia em `ASSET-SOURCES.md`.
- **Referência inicial:** storyboard mobile `1000828066.jpg`; login desktop do IndiqAI Card em `develop`, commit `0a8c93e4c06236ce9f234eb759603433b853d11e`. Paleta verificada na base medida do pacote oficial Indiq.ai; densidade do protótipo não substitui a landing.
- **Método documental:** [Refero DESIGN.md](https://styles.refero.design/design-md/design-md-specification) e [exemplo de estrutura](https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1). Papéis, valores, limites, componentes e uso; aparência do exemplo não é referência estética IndiqAI.
- **Hierarquia, referência secundária inicial:** [7shifts no Refero](https://styles.refero.design/style/736830b5-90b1-47b0-99dd-d79454a0d22a). Paleta e tipografia IndiqAI prevalecem.
- **Evidências anteriores:** `docs/evidence/landing-redesign/` e `docs/evidence/client-logos/`; Poppins publicada em `.review/poppins-published-desktop.png`. Captura histórica não substitui observação atual.

Histórico e medições específicas ficam nas evidências e no Git. Regras de produto, componentes operacionais não aprovados e configuração de ferramentas ficam nos seus próprios documentos. Este arquivo usa a estrutura editorial do Refero; não declara conformidade com um schema Stitch ou automação ainda não implementada.
