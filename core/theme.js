/**
 * theme.js — Tema por roadmap.
 *
 * Aplica overrides dos tokens de design definidos no config.js, SEM tocar no
 * core/widget.css (que é o tema base, compartilhado por todos). Assim cada
 * roadmap pode ter a própria cara: basta um objeto `theme` no config mapeando
 * token → valor.
 *
 *   theme: { accent: '#a371f7', bg: '#0b0b14' }
 *
 * As chaves correspondem às variáveis CSS de widget.css SEM o prefixo `--`
 * (accent → --accent, surface → --surface, radius → --radius...). Tokens não
 * informados mantêm o padrão. Como sobrescrevemos só as variáveis no :root,
 * todo o resto do CSS continua valendo.
 */

export function applyTheme(config) {
  const theme = config && config.theme;
  if (!theme) return;
  const root = document.documentElement;
  for (const [token, value] of Object.entries(theme)) {
    root.style.setProperty(`--${token}`, value);
  }
}
