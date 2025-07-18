#  Monks Landing Page

Este é um projeto de landing page responsiva que desenvolvi com HTML, CSS e JavaScript puro, focando em boas práticas de layout responsivo, estrutura modular de componentes e fidelidade visual com base em um mockup do Figma.

## 🎯 Objetivo

Criei esta landing page como parte de um processo seletivo para estágio em desenvolvimento front-end. O desafio era entregar uma versão fiel ao mockup, com atenção ao comportamento mobile-first e à responsividade para desktop, garantindo uma boa organização de pastas e código.

## 📁 Estrutura do Projeto

MONKS-LANDING-PAGE/
├── assets/
│ ├── icons/ → Ícones da landing page
│ └── img/ → Imagens e mockups utilizados (como bg, botões etc.)
├── css/
│ └── main.css → Todo o estilo da página, mobile-first com media queries
├── js/
│ └── main.js → Interações simples como o menu mobile
├── index.html → Estrutura principal da landing
└── README.md → Este arquivo que você está lendo agora :)

markdown
Copiar
Editar

## 🧩 Componentes e Seções

### ✅ Header
- Com logo `.monks` e menu mobile com menu hamburguer.
- Categorias exibidas horizontalmente no desktop.

### 🎯 Hero Section
- Imagem de fundo aplicada via CSS.
- Título e parágrafo com estilo dark/light.
- Layout ajustado para mobile e desktop, com bordas arredondadas no desktop.

### 🃏 Cards
- Cards informativos com imagem, título e descrição.
- Dispostos em grid no desktop e coluna no mobile.

### 🖼️ Grid de Imagens
- Layout com imagens distribuídas em grid no desktop e coluna no mobile.
- Com texto lateral.

### 📲 Seção de Download
- Card roxo com título, descrição e botões da App Store e Google Play.
- Layout lateral no desktop e empilhado no mobile.

### 🏷️ Tags de Categoria
- Vários botões circulares representando categorias, com cores violetas.
- Comportamento flexível com quebra de linha.

### 📌 CTA Cards
- Três cards com título, texto e botão centralizado.
- Botão com fundo lavanda e borda-radius de 4px.

## 📱 Responsividade

- Desenvolvi com abordagem **mobile-first**.
- Usei `@media (min-width: 1024px)` para layout em desktop.
- Todos os elementos se adaptam de forma fluida à largura da tela.

## 🎨 Cores & Estilo

- Baseado na paleta do mockup:
  - **Fundo geral**: `#EAE8E4`
  - **Roxo escuro**: `#3C0C60`
  - **Lavanda claro**: `#DFBBFE`
  - **Texto escuro**: `#2D2D2D`
  - **Contraste para botões**: branco, roxo, lavanda

## 🧠 Aprendizados

- Trabalhei bastante o alinhamento visual entre mobile e desktop.
- Aprendi a organizar melhor minhas seções e aplicar boas práticas com `flexbox` e `grid`.
- Evoluí no uso de variáveis, media queries e responsividade com elegância.