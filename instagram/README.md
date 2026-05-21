# 📐 Manual de Marca — Posts Instagram (GC Cuiabá)

Guia de referência para criação de peças visuais para Instagram da Ginástica do Cérebro, baseado no manual de marca 2025.

---

## 🎨 Paleta de Cores Institucional

| Cor | Hex | Uso |
|-----|-----|-----|
| Laranja | `#FF8340` | CTAs, destaques, pontos de atenção |
| Amarelo | `#FBBD1E` | Tarjas de título, acentos |
| Verde escuro | `#003E29` | Textos, fundos de contraste, barra WhatsApp |
| Branco quente | `#FBFBF8` | Fundo claro quando necessário |
| Azul claro | `#ACE4E3` | Acentos secundários |
| Rosa claro | `#FFA8A7` | Detalhes complementares |
| Dourado | `#E2AB51` | Variação de destaque |

### Hierarquia Cromática

- **Fundo do layout**: predominantemente claro ou com imagem fotográfica + overlay
- **Textos**: preferencialmente em verde escuro (`#003E29`) ou branco sobre fundo escuro
- **CTAs e destaques**: laranja `#FF8340` — pode variar o tom para chamar mais atenção
- **Tarjas de título**: amarelo, verde escuro e laranja em combinação

---

## 🔤 Tipografia

### Primária — ClashDisplay (Títulos / Headlines)

Fonte display usada nos títulos principais. Carregada localmente via `@font-face`:

```css
@font-face {
    font-family: 'ClashDisplay';
    src: url('../assets/font/clash/WEB/fonts/ClashDisplay-Bold.woff2') format('woff2'),
         url('../assets/font/clash/WEB/fonts/ClashDisplay-Bold.woff') format('woff');
    font-weight: 700;
}
```

Pesos disponíveis: `500` (Medium), `600` (Semibold), `700` (Bold)

**Comportamento nos títulos:**
- Brincar com **espaçamento** (`letter-spacing`) e **peso** (`font-weight`) entre linhas
- Misturar pesos diferentes na mesma composição (ex: uma linha em 600, outra em 700)
- Variar tamanhos drasticamente entre linhas (ex: 48px + 120px)
- Usar `text-transform: lowercase` para o texto principal grande

### Secundária — Nunito Sans (Corpo / Apoio)

Carregada via Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap" rel="stylesheet">
```

Usada em: textos de apoio, corpo, data, handle, WhatsApp, botões.

---

## 🖼️ Estrutura Visual dos Cards

### Formato

- **Dimensão**: 1080×1320px (vertical, formato stories/feed)
- **Overflow**: hidden (nada vaza do card)

### Camadas (z-index)

1. **Imagem de fundo** (`z-index: 1`) — foto fullbleed, `object-fit: cover`
2. **Overlay gradiente** (`z-index: 2`) — escurece a base para legibilidade
3. **Conteúdo** (`z-index: 20`) — textos, logo, elementos gráficos

### Imagem de Fundo

Sempre presente. A composição depende de uma foto de fundo que ocupa 100% do card:

```css
.bg-image {
    position: absolute;
    inset: 0;
    background: url('...') center center / cover no-repeat;
}
```

O overlay gradiente garante contraste para os textos:

```css
.overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, 
        rgba(cor, 0.15) 0%, 
        rgba(cor, 0.5) 55%, 
        rgba(cor, 0.95) 80%);
}
```

---

## ✏️ Títulos — Tarjas com Personalidade

Os títulos **não precisam ser retângulos perfeitos**. O padrão é usar "tarjas" (blocos de cor atrás do texto) com:

- **Rotações leves** (`transform: rotate(-1.5deg)`, `rotate(0.8deg)`) — cada linha com ângulo diferente
- **Desalinhamento intencional** — `margin-left` variado entre linhas
- **Tamanhos contrastantes** — uma palavra pequena (48–68px) e outra enorme (100–120px)
- **Cores alternadas** nas tarjas (amarelo, verde, laranja)
- **Border-radius mínimo** (0–2px) — visual de fita adesiva / etiqueta

### Exemplo de composição:

```
[AMARELO, rotação -1.2°] "Saúde"  [VERDE, rotação 0.8°] "da"
         [LARANJA, rotação -0.4°, ENORME] "mulher"
```

### Princípios dos headlines:

1. **Brincar com espaçamento** — `letter-spacing` variando de `-3px` a `16px`
2. **Brincar com peso** — misturar Medium (500), Semibold (600) e Bold (700)
3. **Formas orgânicas** — as tarjas não se alinham em grid, criam movimento
4. **Hierarquia por tamanho** — a palavra-chave é sempre a maior (100–120px)

---

## 📐 Layout — Elementos Fixos

| Elemento | Posição | Estilo |
|----------|---------|--------|
| Logo GC (SVG) | Topo direito | ~56–60px de altura |
| Aspas decorativas `❝` | Topo esquerdo | ClashDisplay, 68–72px, cor de destaque |
| Texto de apoio | Abaixo das aspas | Nunito Sans 800, uppercase, max 440px |
| Bloco de título | Centro-inferior | Tarjas rotacionadas (ver acima) |
| Texto corpo | Inferior | Nunito Sans 20–21px, cor branca com opacidade |
| Barra WhatsApp | Canto inferior esquerdo | Pill verde escuro + ícone verde |
| Handle | Canto inferior direito | Nunito Sans 14px, opacidade baixa |

---

## 🧩 Padrões de Código

### Estrutura HTML base:

```html
<div class="card" id="card">
    <div class="bg-image"></div>      <!-- Foto de fundo -->
    <div class="overlay"></div>        <!-- Gradiente -->
    
    <div class="logo"><!-- SVG --></div>
    <div class="quote-mark">❝</div>
    <div class="support-text">...</div>
    <div class="title-block">...</div>
    <div class="body-text">...</div>
    <div class="whatsapp-bar">...</div>
    <div class="handle">@gccuiaba.alvorada</div>
</div>
```

### Exportação PNG:

Cada card inclui `html2canvas` para download direto em 1080×1320:

```javascript
html2canvas(card, {
    width: 1080,
    height: 1320,
    scale: 1,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null
}).then(canvas => { /* download */ });
```

---

## 📸 Direcionamento Fotográfico

- **Tom emocional**: acolhimento, curiosidade, foco, leveza
- **Iluminação**: luz natural suave ou difusa artificial
- **Paleta predominante**: tons quentes com acentos em verde e azul claro
- **Composição**: centralização em pessoas e expressões; espaços negativos para texto
- **Referência de câmera**: Canon EOS 5D Mark IV (profundidade e nitidez)

### Prompt base para geração de imagens:

```
COMERCIAL SHOT, EYE LEVEL ANGLE, [AÇÃO], [EMOÇÃO], DIFFUSED LIGHTING,
ATHLEISURE STYLE, SIMPLICITY AND MINIMALISM COMPOSITION, WARM TONE,
FRONT ORIENTATION, [CENÁRIO], CANON EOS 5D MARK IV
```

---

## ✅ Checklist para Novo Post

- [ ] Imagem de fundo com boa área de respiro para texto
- [ ] Overlay gradiente adequado (escurecer onde há texto)
- [ ] Logo GC no topo direito
- [ ] Título com tarjas rotacionadas e tamanhos contrastantes
- [ ] Texto de apoio curto e impactante
- [ ] Texto corpo com destaque em `<strong>` (cor laranja ou amarelo)
- [ ] Barra WhatsApp + handle
- [ ] Botão de download funcional
- [ ] Dimensão exata: 1080×1320px

---

## 📁 Estrutura de Arquivos

```
instagram/
├── README.md                    ← este arquivo
├── dia-nacional-adocao.html     ← post Maio Laranja
├── saude-da-mulher.html         ← post Saúde da Mulher
└── [novo-post].html             ← próximos posts seguem o mesmo padrão
```

Fontes em: `../assets/font/clash/WEB/fonts/`

---

*Baseado no Manual da Marca Ginástica do Cérebro 2025 — Bruno Reis*
