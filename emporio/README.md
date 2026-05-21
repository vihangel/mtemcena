<!-- @format -->

# 📐 Manual de Marca — Posts Instagram (Empório Lúdico)

Guia de referência para criação de peças visuais para Instagram do Empório Lúdico.

---

## 🏪 Sobre a Marca

Empório Lúdico é uma loja dedicada a jogos de tabuleiro, puzzles e atividades que promovem desenvolvimento cognitivo e diversão para todas as idades. A marca combina a diversidade de um empório com o espírito lúdico dos jogos — tradição e modernidade juntas.

---

## 🎨 Sistema de Marca (emporio-brand.css)

Todas as cores, fontes e tokens estão centralizados em `../assets/emporio-brand.css`.

### Paleta de Cores

| Cor         | Hex       | Uso                                      |
| ----------- | --------- | ---------------------------------------- |
| Azul escuro | `#0C2136` | Fundos, textos principais, base da marca |
| Dourado     | `#E9B73E` | Destaques, CTAs, tarjas de título        |
| Laranja     | `#ED8C3F` | Acentos, botões secundários              |
| Coral       | `#EA605D` | Detalhes, alertas, pontos de atenção     |
| Turquesa    | `#4BB0B8` | Acentos complementares, ícones           |
| Verde       | `#6FA260` | Elementos naturais, confirmações         |

### Variáveis CSS

```css
--el-azul-escuro: #0c2136;
--el-dourado: #e9b73e;
--el-laranja: #ed8c3f;
--el-coral: #ea605d;
--el-turquesa: #4bb0b8;
--el-verde: #6fa260;
```

### Como usar

```html
<link rel="stylesheet" href="../assets/emporio-brand.css" />
```

```css
.meu-elemento {
  background: var(--el-azul-escuro);
  color: var(--el-dourado);
  font-family: var(--font-display);
}
```

---

## 🔤 Tipografia

### Logo — Mason Serif OT (Adaptada)

Fonte clássica e elegante com toque moderno. Usada exclusivamente no logotipo.

### Títulos — Cinzel

```html
<link
  href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

Usada em: títulos, cabeçalhos, destaques.

### Corpo — Cardo

```html
<link
  href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap"
  rel="stylesheet"
/>
```

Usada em: textos normais, descrições, conteúdo de página.

---

## 🖼️ Logos (`assets/emporio/`)

| Arquivo                    | Tipo       | Descrição                       |
| -------------------------- | ---------- | ------------------------------- |
| `logo principal.png/.svg`  | Principal  | Logo completa (símbolo + texto) |
| `logo quadrada.png/.svg`   | Quadrada   | Versão compacta 1:1             |
| `logo secundaria.png/.svg` | Secundária | Variação alternativa            |
| `icone.png/.svg`           | Ícone      | Apenas o símbolo                |
| `icones.png/.svg`          | Ícones     | Conjunto de ícones              |
| `pattern.png/.svg`         | Pattern    | Padrão gráfico para fundos      |

---

## 📐 Template Base

O arquivo `template.html` serve como ponto de partida para novos posts.

### Para criar um novo post:

1. Copie `template.html` → `nome-do-post.html`
2. Substitua os placeholders `{{...}}`
3. Ajuste cores e composição conforme necessidade

### Placeholders:

| Placeholder                                    | O que colocar                 |
| ---------------------------------------------- | ----------------------------- |
| `{{TITULO}}`                                   | Título da página              |
| `{{BG_IMAGE_URL}}`                             | URL da imagem de fundo        |
| `{{TEXTO_APOIO}}`                              | Frase curta no topo           |
| `{{TITULO_1}}`, `{{TITULO_2}}`, `{{TITULO_3}}` | Palavras das tarjas           |
| `{{DATA}}`                                     | Data do evento                |
| `{{CORPO}}`                                    | Texto principal               |
| `{{SLUG}}`                                     | Nome do arquivo PNG ao baixar |

---

## 🧩 Estrutura de Arquivos

```
├── assets/
│   ├── emporio-brand.css                ← variáveis da marca
│   └── emporio/                         ← logos e assets visuais
│       ├── logo principal.png/.svg
│       ├── logo quadrada.png/.svg
│       ├── logo secundaria.png/.svg
│       ├── icone.png/.svg
│       ├── icones.png/.svg
│       └── pattern.png/.svg
│
├── emporio/
│   ├── README.md                        ← este arquivo
│   ├── template.html                    ← template base
│   └── [novo-post].html
```

---

## ✅ Checklist para Novo Post

- [ ] Copiar `template.html`
- [ ] Imagem de fundo adequada ao tema
- [ ] Overlay gradiente com azul escuro
- [ ] Logo via `<img src="../assets/emporio/logo principal.png">`
- [ ] Título com Cinzel, tarjas em dourado/laranja
- [ ] Texto corpo com Cardo
- [ ] Dimensão: 1080×1320px
- [ ] Botão de download funcional

---

_Baseado no Manual da Marca Empório Lúdico_
