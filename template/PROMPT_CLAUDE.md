# Prompt para gerar um novo roadmap com Claude

Cole o texto abaixo no [Claude](https://claude.ai) (ou em qualquer LLM capaz),
substitua `{{TEMA}}` pelo assunto do seu roadmap e responda às perguntas se
houver. O resultado é o conteúdo pronto do arquivo `data.js`.

> Depois de colar a saída em `roadmaps/<seu-roadmap>/data.js`, ajuste o `config.js`
> e pronto — nenhum outro arquivo precisa ser tocado.

---

```
## GOAL

Gere o conteúdo de um arquivo `data.js` para a plataforma devmaps — um tracker
de aprendizado interativo. O resultado deve ser um módulo ES válido que exporta
por default um objeto com `phases` e `badges`, conforme o ESQUEMA abaixo.

O tema do roadmap é: {{TEMA}}

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
- Time-bound: estime uma `duration` realista por fase (texto livre, ex.: "~2 meses").

## C.E.R.T.O

Contexto: o conteúdo será consumido por core/engine.js, que interpreta as regras
de badge. NÃO escreva nenhuma lógica — apenas dados declarativos.

Esquema EXATO a seguir:

export default {
  phases: [
    {
      id: 'p0',
      title: '...',
      level: '...',          // rótulo de dificuldade
      duration: '~2 meses',
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

Restrições:
- Saída APENAS com o código do data.js, dentro de um bloco de código. Sem texto extra.
- `icon` deve ser um único emoji.
- Idioma do conteúdo: o mesmo idioma deste prompt.
- Não invente campos fora do esquema.
```
