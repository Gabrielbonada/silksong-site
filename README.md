# Hollow Knight: Silksong Site

Este é um site dedicado ao jogo **Hollow Knight: Silksong**, apresentando informações sobre NPCs, inimigos, habilidades e muito mais.

 <h1>justificativa do Projeto</h1>

O projeto deste site tem como principal objetivo informar, engajar e entreter os fãs de Hollow Knight: Silksong, reunindo em um único ambiente digital conteúdos relevantes como NPCs, inimigos, habilidades, ferramentas, mapas e as últimas atualizações relacionadas ao jogo.

Silksong é uma das sequências mais esperadas da cena indie gamer, com uma comunidade extremamente ativa e engajada. No entanto, as informações disponíveis estão dispersas entre fóruns, vídeos no YouTube, redes sociais e páginas oficiais. Essa fragmentação dificulta o acesso organizado e rápido ao conteúdo.

Diante disso, o desenvolvimento deste site se justifica como uma solução prática e acessível: um hub centralizado e atualizado, que permita aos jogadores explorarem o universo de Silksong de forma clara, visual e interativa, tanto antes quanto após o seu lançamento.

Além de atender à comunidade de fãs, o projeto também visa demonstrar competências técnicas em desenvolvimento web, uso de APIs públicas e criação de interfaces modernas e responsivas. A iniciativa também contribui para o portfólio do desenvolvedor, sendo uma aplicação prática de habilidades como consumo de dados externos, organização de conteúdo dinâmico e integração de tecnologias.

## Funcionalidades
- **Menu interativo**: Navegue por NPCs, inimigos e habilidades.
- **Animações suaves**: Implementadas com AOS.js.
- **Design responsivo**: Compatível com dispositivos móveis.
- **Links úteis**: Acesse a Wiki oficial do jogo.
- **uma pagina para cada boss**: Informações sobre o jogo por completo.
- - **Sistema de busca **: um filtro para cada pagina.

##  Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|------------|-----------------|
| **HTML5** | Estruturação das páginas |
| **CSS3** | Estilização, layout responsivo |
| **JavaScript** | Interatividade e lógica do menu |

---
## APIS implementadas com sucesso

1. Chart.js

-Exibe dois gráficos (barras e pizza) com dados de vendas e plataformas.

-Por que foi usada: Para apresentar dados estatísticos de forma visual e clara aos usuários.

Exemplos exibidos:

Gráfico de barras com os jogos mais vendidos de 2025.

Gráfico de pizza mostrando a distribuição de vendas por plataforma (Steam, Xbox, PS, Nintendo).

2. GNews API

O que faz: Busca notícias recentes sobre Hollow Knight: Silksong de fontes confiáveis.

Por que foi usada: Para manter o site atualizado com conteúdo real e relevante para os fãs.

Detalhes técnicos:

Busca limitada a 6 artigos em português.

3. RAWG.io API

O que faz:

Exibe dados oficiais do Silksong (lançamento, plataformas, gêneros, imagem).

Mostra jogos semelhantes recomendados pelo RAWG.

Por que foi usada:

Para enriquecer o conteúdo com informações oficiais e dinâmicas.

Para atrair fãs de jogos parecidos com recomendações.

## Ideias para mais implementações
- Steam Web API
- Unsplash / Giphy API
- Twitter/X API


### Casos de Teste

| ID | Título | Pré-condições | Passos | Resultado Esperado |
|----|-------|----------------|-------|---------------------|
| **CT-001** | Carregamento da página inicial | Navegador aberto | Acessar `https://silksongwiki.netlify.app/` | Página abre sem erro e o título da aba contém “Silksong”. |
| **CT-002** | Exibir menu principal | Página inicial carregada | Localizar itens `Início`, `NPCs`, `Inimigos`, `Outros`. | Todos os itens de menu estão visíveis e clicáveis. |
| **CT-003** | Navegar para NPCs | Página inicial carregada | Clicar no menu **NPCs**. | Página de NPCs abre corretamente com cabeçalho/texto relacionado. |
| **CT-004** | Navegar para Inimigos | Página inicial carregada | Clicar no menu **Inimigos**. | Página de Inimigos abre corretamente. |
| **CT-005** | Navegar para Outros | Página inicial carregada | Clicar no menu **Outros**. | Página “Outros” abre corretamente. |
| **CT-006** | Voltar para Início | Em qualquer subpágina | Clicar no menu **Início**. | Retorna para a página inicial. |
| **CT-007** | Verificar imagem principal | Página inicial carregada | Localizar a imagem de destaque. | Imagem está visível e atributo `src` não é vazio. |
| **CT-008** | Testar links internos da página inicial | Página inicial carregada | Capturar todos os `<a>` da seção principal e checar se `href` não é vazio. | Nenhum link interno está vazio ou quebrado. |
| **CT-009** | Verificar título principal | Página inicial carregada | Localizar elemento de título (ex.: `<h1>`). | Texto contém “Silksong Wiki” ou similar. |
| **CT-010** | Checar rodapé (footer) | Página inicial carregada | Rolar até o final e localizar `<footer>`. | Footer presente e contém texto esperado. |



## Como Contribuir
1. Faça um fork deste repositório.
2. Crie uma nova branch: `git checkout -b minha-branch`.
3. Faça suas alterações e commit: `git commit -m 'Minha contribuição'`.
4. Envie para o repositório remoto: `git push origin minha-branch`.
5. Abra um Pull Request.

---

Desenvolvido por Gabriel Bonada e benjamim.
