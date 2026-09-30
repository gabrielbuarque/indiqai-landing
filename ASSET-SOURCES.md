# Fontes dos assets — revisão de 30/09/2026

## Produto e identidade

- `assets/card-demo-{540,800}.{avif,webp}`: imagem criada do zero no ChatGPT, no Chrome de Gabriel, em https://chatgpt.com/c/6abd4363-e2cc-83e8-a368-84bcf3a2e5a4 . A segunda geração segue o formato fornecido: foto, cartão colorido contínuo, progresso, dez selos, recompensa e ação QR. Brasa Burger e os dados são fictícios. Não é cliente, depoimento ou captura real. PNG original baixado em 30/09/2026; versões responsivas comprimidas sem alterar a composição. As imagens antigas do Lord Chicken foram retiradas do site.
- Marca oficial: `design-system/logos/header-purple.png` e `header.png` fornecidos no workspace. Wordmark colorido otimizado a 320px, sem mudar o desenho. Ícones oficiais preservados.
- Paleta do login desktop do Card em `develop`: violeta #7541ee, rosa #fb517a, dourado #f4b512, preto #171719 e neutro #ebebeb. Poppins local, licença `assets/fonts/OFL.txt`.
- `assets/demo-qr.svg`: gerado com qrcode, destino `https://card.indiqai.com/#inicio`; grade de 37 × 37 com margens. Sem rotação, 222px ou 185px, módulos de 6px ou 5px.
- SVGs de interface desenhados para a página. Divulgação usa compartilhar, preservando os demais ícones aprovados.

## Clientes informados pelo Gabriel

Os quatro nomes foram fornecidos como clientes. Fontes verificadas em 30/09/2026; marcas preservadas, sem redesenho:

- Caroli Douces (nome público correspondente a “Carouli Doces”): https://www.carolidouces.com.br/unidade ; imagem oficial https://www.carolidouces.com.br/images/marcas/caroli.png .
- Dunnas Restaurante: recrutamento oficial https://dunnasrestaurante.vagas.solides.com.br/ ; logo https://c5gwmsmjx1.execute-api.us-east-1.amazonaws.com/prod/dados_processo_seletivo/foto_header/157910/%5BRest.%20Dunnas%5D%20Rest.%20Dunnas%2015%20Anos%20-%20Logo%20Horiz.%20Transp.png . Preserva o detalhe “15 anos” do arquivo oficial, sem atribuir uma data de aniversário atual.
- Galeteria DuChiquinho: seção de apoiadores do GDG Natal, https://www.gdg.natal.br/ ; arquivo https://www.gdg.natal.br/api/midia/60371e836e0ef097 .
- Conexão Hub — Polo de Inovação, Natal: https://conexaohub.com.br ; logo https://conexaohub.com.br/assets/header.svg . Versão branca/verde sobre superfície escura para preservar contraste.

## Fotos das categorias

Fotografias ilustrativas; não representam instalações dos clientes. Unsplash, licença https://unsplash.com/license . Arquivos locais 560 × 420 WebP, qualidade 82, selecionados e inspecionados juntos:

| Categoria | Foto original |
|---|---|
| Restaurantes | https://images.unsplash.com/photo-1414235077428-338989a2e8c0 |
| Cafeterias | https://images.unsplash.com/photo-1442512595331-e89e73853f31 |
| Barbearias | https://images.unsplash.com/photo-1621605815971-fbc98d665033 |
| Beleza | https://images.unsplash.com/photo-1600948836101-f9ffda59d250 |
| Academias | https://images.unsplash.com/photo-1517836357463-d25dfeac3438 |
| Comércio | https://images.unsplash.com/photo-1441986300917-64674bd600d8 |

## Texto e documentos

- Hero: relação visita → cliente recorrente da https://www.punchpass.app/ e posicionamento do `IndiqAI-Sales-Playbook-v0.2.pdf` e `Landing/PLAN.md`. Sem copiar métricas, automação ou recursos da concorrente.
- Termos e privacidade: texto integral renderizado de https://indiqai.com/termos e https://indiqai.com/privacidade , acessado pela navegação original. Versão janeiro de 2026. Só classes, largura de leitura e o rótulo decorativo “Documento legal” mudaram; cláusulas, prazos e contatos preservados.
- Instagram, WhatsApp, e-mail, razão social, CNPJ e endereço do rodapé: https://indiqai.com/ . O endereço dos documentos legais permanece como na fonte, inclusive a diferença de CEP em relação ao rodapé original.
- Dois textos introdutórios do blog escritos para esta página, sobre recompensa e cartão digital. Sem datas, resultados ou depoimentos inventados.


## Ajustes de 30/09 — novas marcas e movimento contínuo

Clientes adicionados por solicitação direta de Gabriel; a condição de cliente vem dessa solicitação, não de inferência da pesquisa. Caroli retirada da apresentação.

| Marca | Origem pública da imagem | Arquivo e resolução da fonte |
|---|---|---|
| Diva do Café | [Catálogo oficial ligado no Instagram @divadocafe](https://app.catalogodigital.online/divadocafe) | `diva.webp`, PNG original 1326×1319 |
| Effó | [Linktree ligado no Instagram @effo.restaurante](https://linktr.ee/efforestaurante) | `effo.webp`, símbolo oficial 180×180; nome exibido abaixo sem recriar logotipo |
| Nalu Poke by Effó | [Delivery Nalu no mesmo Linktree oficial](https://linktr.ee/efforestaurante) | `nalu.webp`, PNG original 300×300 |
| ServClub | [Site oficial](https://www.servclub.com.br/sobre), `wp-content/uploads/2024/08/servclub_header.png` | `servclub.webp`, original 500×133 |
| Óticas Visione Prime | [Parceiro Nubus Natal](https://www.nubusnatal.com.br/clubededescontos.html), `imagens/visione.png` | `visione.webp`, original 572×320; marca identificada pelo parceiro, fonte não é site próprio |
| Galeteria DuChiquinho | [PraComprar, marca publicada como cliente](https://new.pracomprar.app.br/), `assets/galeteria-du-chiquinho-BYtcrnJ3.webp` | `duchiquinho.webp`, original 447×447, substitui versão 200×200 |

Dunnas mantém arquivo obtido no recrutamento oficial (440 px); Conexão Hub mantém SVG do site oficial. Não foram encontrados arquivos vetoriais melhores de Dunnas/Effó nesta rodada. Conversão para WebP preserva proporção e cores, sem redesenho ou aumento artificial de resolução. Fotos do blog reutilizam as fotos já documentadas de café e restaurante.

## Padronização de 30/09 — título, logos e ticket

Tratamento realizado no ChatGPT aberto no Chrome de Gabriel, com os arquivos originais do repositório. Saídas baixadas: `client-logos-final.zip` e `client-logos-corrections.zip`. Foi solicitado processamento dos pixels existentes, sem redesenho generativo de letras ou símbolos. Originais mantidos em `assets/clients/`; apresentação em `assets/clients/clean/`.

Fundos e margens removidos; marcas brancas receberam versão positiva para a superfície branca: DuChiquinho em laranja, Nalu e partes pequenas da Diva em tinta escura; Conexão preserva o verde. Recortes raster convertidos para WebP sem perda, sem redimensionar. Conexão continua vetorial. `diva.svg` é um invólucro de imagem raster embutida, com enquadramento e correção de alfa residual; não é uma vetorização. Os nomes aparecem em HTML, com tamanho e alinhamento comuns.

A limpeza não recupera detalhes ausentes nas fontes. Effó e Dunnas continuam limitados pela resolução original documentada acima; não se declara nova resolução oficial ou detalhe inventado.

## Poppins oficial — correção de 30/09
Arquivos anteriores continham somente um subconjunto sem caracteres latinos. Substituídos pelos pesos 400/500/600/700 da Poppins v24 servida por Google Fonts: https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap . Fontes convertidas localmente para WOFF2, com caracteres latinos, acentos portugueses e pontuação. OFL mantida. Títulos, CTAs e destaques usam Poppins; corpo e interface usam a família nativa do sistema, conforme orientação de Karen enviada por Gabriel.
