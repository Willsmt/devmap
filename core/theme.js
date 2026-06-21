/**
 * theme.js — Personalização visual por roadmap.
 *
 * Aplica, a partir do config.js, customizações de aparência SEM tocar no
 * core/widget.css (o tema base, compartilhado por todos). Dois níveis:
 *
 *   1. Tokens — objeto `theme` mapeando variável CSS (sem o `--`) → valor:
 *        theme: { accent: '#a371f7', bg: '#0b0b14', radius: '16px' }
 *      Troca cor, espaçamento, arredondamento. Rápido, mas limitado ao que
 *      está parametrizado no :root.
 *
 *   2. Folha de estilo própria — caminho em `stylesheet`:
 *        stylesheet: './estilo.css'
 *      Carregada DEPOIS do widget.css, então sobrescreve o que quiser:
 *      layout, formato dos cards, animações... Use os nomes de classe do
 *      widget.css como contrato (.phase, .topic, .badge, .xp-bar, ...).
 *
 * Para mudar a ESTRUTURA (o HTML em si, não só o visual), aí é no index.html
 * do roadmap, nas funções de render — não dá para fazer só por CSS.
 */

export function applyTheme(config) {
  if (!config) return;

  // 1. Overrides de tokens no :root.
  if (config.theme) {
    const root = document.documentElement;
    for (const [token, value] of Object.entries(config.theme)) {
      root.style.setProperty(`--${token}`, value);
    }
  }

  // 2. Folha de estilo própria do roadmap, sobreposta ao widget.css.
  if (config.stylesheet) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = config.stylesheet;
    document.head.appendChild(link);
  }
}
