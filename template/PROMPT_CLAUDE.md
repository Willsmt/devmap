# Prompt para gerar um novo roadmap com Claude

Cole o texto abaixo no [Claude](https://claude.ai) (ou em qualquer LLM capaz),
substitua `{{TEMA}}` pelo assunto do seu roadmap e `{{TEMPO_DIARIO}}` pelo tempo
que você consegue estudar por dia (ex.: `1h/dia`, `30 min/dia`). O resultado traz
duas coisas: o conteúdo do `data.js` e um tema sugerido para o `config.js`.

> Cole a saída de `data.js` em `roadmaps/<seu-roadmap>/data.js` e o trecho do
> tema em `roadmaps/<seu-roadmap>/config.js`. Nenhum outro arquivo precisa ser
> tocado.

---

```
## GOAL

Você vai gerar dois artefatos para a plataforma devmaps — um tracker de
aprendizado interativo:
  1. O conteúdo do arquivo `data.js`: um módulo ES válido que exporta por default
     um objeto com `phases` e `badges`, conforme o ESQUEMA abaixo.
  2. Um tema sugerido (objeto `theme`, e opcionalmente `cardGradient`) para colar
     no `config.js`, com cores que combinem com o assunto.

## ENTRADAS

- Tema do roadmap: {{TEMA}}
- Tempo de estudo disponível por dia: {{TEMPO_DIARIO}}

Se o tempo diário não tiver sido informado, PERGUNTE antes de gerar — ele é
essencial para estimar a duração de cada fase.

## SMART

- Specific: produza entre 4 e 6 fases progressivas (do iniciante ao avançado),
  cada uma com 3 a 5 tópicos. Cada tópico tem nome, descrição de 1 a 2 frases
  (o que estudar e por quê) e um valor de XP entre 30 e 90 proporcional à
  dificuldade.
- Measurable: gere de 5 a 8 badges. Inclua sempre uma badge de "primeiro tópico"
  (count: 1), uma de "metade do caminho" (count ≈ metade do total de tópicos) e
  uma badge de conclusão para cada fase.
- Achievable: ids em kebab-case, únicos em todo o roadmap (não só dentro da fase).
- Relevant: a progressão das fases deve refletir uma ordem real de aprendizado do
  tema, com um `milestone` que descreve a capacidade adquirida ao fim da fase.
- Time-bound: estime o esforço de estudo de CADA fase em horas e converta em
  `duration` REAL com base no tempo diário informado ({{TEMPO_DIARIO}}).
  Ex.: uma fase de ~20h de estudo, com 1h/dia, leva ~20 dias ≈ "~3 semanas".
  A duração de cada fase deve refletir o ritmo escolhido — quem estuda mais por
  dia conclui mais rápido.

## C.E.R.T.O

Contexto: o conteúdo será consumido por core/engine.js, que interpreta as regras
de badge. NÃO escreva nenhuma lógica — apenas dados declarativos.

Esquema EXATO do data.js:

export default {
  phases: [
    {
      id: 'p0',
      title: '...',
      level: '...',          // rótulo de dificuldade
      duration: '~3 semanas', // calculada a partir do tempo diário (ver Time-bound)
      milestone: '...',      // o que a pessoa saberá fazer ao concluir
      topics: [
        { id: 'kebab-id', name: '...', desc: '...', xp: 50 }
      ]
    }
  ],
  badges: [
    { id: 'first-step', name: '...', icon: '🌱', desc: '...',
      rule: { type: 'topicsCompleted', count: 1 } },
    { id: 'p0-done', name: '...', icon: '🧱', desc: '...',
      rule: { type: 'phaseComplete', phaseId: 'p0' } }
  ]
}

Regras de badge disponíveis (use somente estas):
  { type: 'topicsCompleted', count: N }   → desbloqueia com N tópicos concluídos
  { type: 'phaseComplete',   phaseId: X } → desbloqueia quando a fase X estiver 100%

Tema sugerido (para o config.js). Escolha cores que combinem com o assunto
(ex.: tons verdes para natureza, neon para IA/tech, terrosos para história):

theme: {
  accent: '#hexcor',   // cor de destaque (botões, barras, badges)
  bg: '#hexcor',       // fundo da página (escuro de preferência)
  radius: '14px',      // arredondamento dos cantos
},
cardGradient: 'linear-gradient(110deg, #cor1, #cor2)', // identidade do card na home

Restrições:
- Saída em DOIS blocos de código, nesta ordem e claramente rotulados:
    1) "// data.js" — o módulo completo do data.js
    2) "// config.js (cole no seu config)" — só o trecho theme + cardGradient
  Sem nenhum outro texto fora dos blocos (a não ser a pergunta sobre o tempo
  diário, caso ele não tenha sido informado).
- `icon` deve ser um único emoji.
- Idioma do conteúdo: o mesmo idioma deste prompt.
- Não invente campos fora do esquema.
```
