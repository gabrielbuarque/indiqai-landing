# Refinamento solicitado — 30/09/2026

- Razão social informada diretamente por Gabriel: INDIQAI - CLUBE DE FIDELIZACAO INTELIGENTE INOVA SIMPLES (I.S.). Atualizada no rodapé de seis páginas, Organization, llms e identificação nos documentos legais. CNPJ preservado.
- Bolinha dourada removida. Detalhe rosa convertido em selo com estrela da recompensa.
- Celular com ciclo de 7 s, deslocamento máximo 9 px e rotação de 1,3 grau. Carrossel contínuo linear de 72 s, oito clientes, duplicação sem emenda. Hover e toque não param o movimento. Controles de pausar/continuar removidos a pedido.
- Movimento reduzido respeitado e loops pausados fora da viewport ou em aba oculta.
- CTA principal violeta oficial, texto branco e camada preta; CTAs auxiliares com superfície lavanda e camada violeta permanente.
- Blog e chamada na landing com fotos e títulos clicáveis, sem links duplicados de leitura ou setas da listagem.
- Fontes e limites das logos em ASSET-SOURCES.md.

Verificação visual em Chrome do usuário: hero mobile 390 px; blog 320/390 e desktop 1440 px. Conferência de carregamento e overflow após correção dos caminhos de fotos. Acessibilidade de movimento contínuo tem uma limitação intencional: não há controle de pausa da página, conforme pedido; preferência do sistema por movimento reduzido é respeitada. Não equivale a declarar conformidade WCAG completa.

Lighthouse local desta versão: performance 100, acessibilidade automatizada 100, boas práticas 100, SEO 100. Relatório sem runtimeError; encerramento do CLI retornou EPERM ao limpar pasta temporária do Chrome no Windows depois de gravar o relatório. Não representa auditoria WCAG manual. Todos os destinos locais de imagens e links das seis páginas existem.

O relatório também identificou um aviso não pontuado de nome acessível nas prévias do blog. Removido aria-labelledby restrito ao título: o link agora usa seu texto visível completo, incluindo o resumo, facilitando comando por voz.
