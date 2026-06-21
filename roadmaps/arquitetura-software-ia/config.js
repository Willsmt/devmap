/**
 * config.js — Roadmap "Arquitetura de Software com IA".
 *
 * Este roadmap serve de VITRINE de personalização: além dos tokens (`theme`),
 * ele carrega uma folha de estilo própria (`estilo.css`) que reestiliza tudo
 * — tema neon, glassmorphism e efeitos 100% em CSS. Compare com os outros
 * roadmaps (que usam só o widget.css base) para ver a diferença.
 */

export default {
  id: 'arquitetura-software-ia',
  title: 'Arquitetura de Software com IA',
  subtitle: 'Projete sistemas que usam IA de verdade — de LLMs e RAG a agentes em produção.',

  // Identidade visual do card na home (opcional). Aqui o mesmo gradiente neon
  // da página, para a home já entregar a "cara" do roadmap.
  cardGradient: 'linear-gradient(110deg, #22d3ee, #a855f7 55%, #ec4899)',

  scriptUrl:
    'https://script.google.com/macros/s/AKfycbwVjP78qMRMP6GuP9LEWC_xBj8aKIdQFb-3MrY88PwyhQIMsBmTTBZiMn3lOZoUuvxp/exec',

  // Tokens base do tema neon (sobrescrevem o :root do widget.css).
  theme: {
    bg: '#070713',
    surface: 'rgba(18, 16, 38, 0.55)',
    'surface-2': 'rgba(34, 28, 64, 0.65)',
    border: 'rgba(150, 120, 255, 0.28)',
    text: '#eaf2ff',
    'text-dim': '#93a4cc',
    accent: '#22d3ee',
    success: '#2dd4bf',
    warn: '#fbbf24',
    radius: '18px',
  },

  // Folha de estilo própria: o restyle pesado (layout, efeitos, animações).
  stylesheet: './estilo.css',
};
