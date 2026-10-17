# Geci Cakes Confeitaria: landing page

Site estático (HTML, CSS e JavaScript), sem instalação e sem dependências.

## Estrutura
- `index.html`: estrutura e textos
- `css/style.css`: cores, fontes e layout
- `js/main.js`: dados editáveis (fotos, produtos, WhatsApp) e comportamentos
- `fotos/`: fotos dos bolos, doces e salgados

## Como abrir
Dê dois cliques no `index.html`. As fontes (Google Fonts) e o mapa precisam de internet.
Se alguma foto não carregar, aparece o espaço rosa "Foto do bolo (substituir)" e o console do navegador (F12) diz qual arquivo faltou.

## Onde cada foto aparece (tudo no início de `js/main.js`)
| Lista | Onde aparece |
|---|---|
| `SLIDES.hero` | carrossel da primeira tela |
| `SLIDES.about` | carrossel da seção "Mais do que um bolo" |
| `CATS` | cards da aba Bolos |
| `DOCES` | cards da aba Doces |
| `SALGADOS` | cards da aba Salgados |
| `GAL` | galeria (as 6 primeiras também aparecem na seção do Instagram) |

Para trocar uma foto, copie o arquivo para `fotos/` e altere o `src`. Para adicionar, copie uma linha e mude os dados.
Na galeria, `r` é a proporção da foto em largura/altura (ex.: `"1200/1600"`).

## Fotos que ainda faltam
- Aba Doces: Bomba de chocolate
- Aba Salgados: Coxinha, Bomba salgada e Joelho

## Cores e textos
- Cores e fontes: variáveis no início de `css/style.css`
- WhatsApp: `WA` em `js/main.js`

## Publicar
Envie a pasta inteira para qualquer hospedagem estática (Netlify, Vercel, GitHub Pages, Hostinger...).
