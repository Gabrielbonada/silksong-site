# 🌌 Hollow Knight: Silksong Wiki

Um site **fan-made** dedicado a **Hollow Knight: Silksong**, trazendo informações sobre NPCs, inimigos, habilidades e curiosidades do jogo.  
Desenvolvido como projeto pessoal para treinar **HTML**, **CSS** e **JavaScript**.

**wireframe do Site** [https://www.canva.com/design/DAG0GGv38iI/SFBu-j3APEiFfE_kcT_hvg/edit?utm_content=DAG0GGv38iI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton]
---

## Sobre o Projeto

O **Hollow Knight: Silksong Wiki** nasceu da vontade de criar um espaço interativo e organizado para os fãs do jogo **Hollow Knight** e de sua aguardada sequência *Silksong*.  
A ideia surgiu durante estudos de **desenvolvimento web**, como uma forma de:

- Praticar **HTML, CSS e JavaScript** em um projeto real.
- Aprender sobre **design responsivo** e animações em front-end.
- Criar uma base simples que sirva como **guia de informações** para outros jogadores, enquanto aguardamos o lançamento oficial do jogo.

O site não possui fins lucrativos e é feito apenas para fins educacionais e de apreciação da comunidade.

---

##  Demonstração
🔗 **Acesse aqui:** [silksongwiki.netlify.app](https://silksongwiki.netlify.app/)  

Explore o menu, conheça NPCs, inimigos, assista a vídeos curtos e mergulhe no universo de *Silksong*.

---

##  Funcionalidades

- **Menu interativo:** navegue entre páginas de NPCs, Inimigos, Habilidades e muito mais.
- **Vídeos incorporados:** pequenos trailers e clipes de gameplay do YouTube.
- **Animações suaves:** transições elegantes utilizando **AOS.js**.
- **Design responsivo:** layout que se adapta bem a diferentes tamanhos de tela (desktop/tablet/celular).
- **Links úteis:** acesso rápido para a Wiki oficial do jogo.

---

##  Tecnologias Utilizadas

| Tecnologia | Uso no Projeto |
|------------|-----------------|
| **HTML5** | Estruturação das páginas |
| **CSS3** | Estilização, layout responsivo |
| **JavaScript** | Interatividade e lógica do menu |

---

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
