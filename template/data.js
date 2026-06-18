/**
 * data.js — Os dados do SEU roadmap. Apenas estrutura declarativa, sem lógica.
 *
 * Um roadmap é uma lista de fases; cada fase tem tópicos; e há badges que
 * desbloqueiam conforme regras. As regras são interpretadas por core/engine.js.
 *
 * Dica: você não precisa preencher isto à mão — use template/PROMPT_CLAUDE.md
 * para gerar um data.js completo a partir de um tema.
 */

export default {
  phases: [
    {
      id: 'p0', // identificador único da fase
      title: 'Nome da primeira fase',
      level: 'Iniciante', // rótulo livre de dificuldade
      duration: '~2 meses', // estimativa livre
      milestone: 'O que você será capaz de fazer ao concluir esta fase.',
      topics: [
        {
          id: 'topico-1', // único em TODO o roadmap, não só na fase
          name: 'Nome do tópico',
          desc: 'Uma ou duas frases sobre o que estudar neste tópico.',
          xp: 50, // pontos ganhos ao concluir
        },
        // ...mais tópicos
      ],
    },
    // ...mais fases
  ],

  badges: [
    {
      id: 'first-step',
      name: 'Primeiro passo',
      icon: '🌱', // qualquer emoji
      desc: 'Concluiu o primeiro tópico.',
      // Regras disponíveis (interpretadas pelo engine):
      //   { type: 'topicsCompleted', count: N }   → N tópicos concluídos
      //   { type: 'phaseComplete',   phaseId: X }  → fase X 100% concluída
      rule: { type: 'topicsCompleted', count: 1 },
    },
    // ...mais badges
  ],
};
