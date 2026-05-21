<!-- @format -->

# 📐 Manual de Marca — Posts Instagram (GC Cuiabá)

Guia de referência para criação de peças visuais para Instagram da Ginástica do Cérebro, baseado no manual de marca 2025.

---

## 🎨 Sistema de Marca (brand.css)

Todas as cores, fontes e tokens de design estão centralizados em `../assets/brand.css` como variáveis CSS.

Para trocar a identidade visual (logo, cores, tipografia), basta editar esse arquivo.

### Variáveis disponíveis

```css
/* Cores */
--gc-laranja: #ff8340;
--gc-verde: #003e29;
--gc-amarelo: #fbbd1e;
--gc-azul-claro: #ace4e3;
--gc-rosa-claro: #ffa8a7;
--gc-dourado: #e2ab51;
--gc-branco: #fbfbf8;

/* Tipografia */
--font-display: "ClashDisplay", sans-serif;
--font-body: "Nunito Sans", sans-serif;

/* Tamanhos */
--title-xl: 120px;
--title-lg: 68px;
--title-md: 48px;
--body-lg: 20px;

/* Card */
--card-width: 1080px;
--card-height: 1320px;
```

### Como usar nos posts

```html
<link rel="stylesheet" href="../assets/brand.css" />
```

Depois use as variáveis no CSS:

```css
.meu-elemento {
  color: var(--gc-laranja);
  font-family: var(--font-display);
}
```

---

## 🖼️ Logos (`assets/GC/`)

| Arquivo                      | Formato    | Descrição                                              |
| ---------------------------- | ---------- | ------------------------------------------------------ |
| `logo-completa-colorida.png` | Quadrada   | Símbolo + texto "Ginástica do Cérebro" — fundos claros |
| `logo-completa-branca.png`   | Quadrada   | Símbolo + texto — fundos escuros                       |
| `logo-simbolo-colorido.png`  | Horizontal | Só o símbolo GC — fundos claros                        |
| `logo-simbolo-branco.png`    | Horizontal | Só o símbolo GC — fundos escuros                       |
| `logo-simbolo.svg`           | Vetorial   | Símbolo escalável                                      |

---

## 🔤 Tipografia

### Primária — ClashDisplay (Títulos)

Pesos: `500` (Medium), `600` (Semibold), `700` (Bold)

```css
@font-face {
  font-family: "ClashDisplay";
  src: url("../assets/font/clash/WEB/fonts/ClashDisplay-Bold.woff2")
    format("woff2");
  font-weight: 700;
}
```

### Secundária — Nunito Sans (Corpo)

```html
<link
  href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap"
  rel="stylesheet"
/>
```

---

## 📐 Template Base

O arquivo `template.html` serve como ponto de partida para novos posts. Ele já:

- Importa `brand.css` com todas as variáveis
- Usa `<img>` para a logo (fácil de trocar)
- Aplica variáveis CSS em vez de cores hardcoded
- Inclui estrutura completa (overlay, tarjas, WhatsApp, handle)

### Para criar um novo post:

1. Copie `template.html` → `nome-do-post.html`
2. Substitua os placeholders `{{...}}`
3. Ajuste rotações e tamanhos das tarjas conforme necessidade

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
│   ├── brand.css                    ← variáveis da marca (cores, fontes, tokens)
│   ├── GC/                          ← logos com nomes descritivos
│   │   ├── logo-vertical-colorida.png   (quadrada, texto embaixo)
│   │   ├── logo-vertical-branca.png     (quadrada, fundos escuros)
│   │   ├── logo-horizontal-colorida.png (texto ao lado)
│   │   ├── logo-horizontal-branca.png   (texto ao lado, fundos escuros)
│   │   └── logo-simbolo.svg
│   └── font/clash/                  ← ClashDisplay
│
├── instagram/
│   ├── README.md                    ← este arquivo
│   ├── template.html                ← template base para novos posts
│   ├── dia-nacional-adocao.html
│   ├── idosos-cerebro-ativo.html
│   └── saude-da-mulher.html
```

---

## ✅ Checklist para Novo Post

- [ ] Copiar `template.html`
- [ ] Imagem de fundo com área de respiro
- [ ] Overlay gradiente adequado
- [ ] Logo via `<img src="../assets/GC/logo-horizontal-branca.png">`
- [ ] Título com tarjas rotacionadas e tamanhos contrastantes
- [ ] Texto de apoio curto
- [ ] Texto corpo com `<strong>` em destaque
- [ ] Barra WhatsApp + handle
- [ ] Botão de download funcional
- [ ] Dimensão: 1080×1320px

---

_Baseado no Manual da Marca Ginástica do Cérebro 2025 — Bruno Reis_
