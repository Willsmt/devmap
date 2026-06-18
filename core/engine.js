/**
 * engine.js — Lógica pura de negócio do devmaps.
 *
 * Regras: sem DOM, sem fetch, sem localStorage, sem efeitos colaterais.
 * Tudo aqui é função pura — recebe dados + estado de progresso e devolve
 * um valor. Isso mantém a lógica testável e independente de UI/backend.
 *
 * Vocabulário:
 *   data           → objeto do roadmap ({ phases, badges }), ver data.js
 *   checkedTopicIds → Set ou Array com os ids dos tópicos concluídos
 */

const XP_PER_LEVEL = 200;

/** Normaliza checkedTopicIds (Array | Set) para um Set para lookup O(1). */
function toSet(checkedTopicIds) {
  return checkedTopicIds instanceof Set
    ? checkedTopicIds
    : new Set(checkedTopicIds || []);
}

/** Achata todos os tópicos de todas as fases em uma lista única. */
export function allTopics(data) {
  return data.phases.flatMap((phase) => phase.topics);
}

/** XP total acumulado a partir dos tópicos concluídos. */
export function computeXP(data, checkedTopicIds) {
  const checked = toSet(checkedTopicIds);
  return allTopics(data)
    .filter((topic) => checked.has(topic.id))
    .reduce((sum, topic) => sum + (topic.xp || 0), 0);
}

/**
 * Nível derivado do XP. Curva linear simples: cada nível custa XP_PER_LEVEL.
 * Retorna o nível atual e o quanto falta para o próximo (para a barra de XP).
 */
export function computeLevel(xp) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpIntoLevel = xp % XP_PER_LEVEL;
  const xpForNextLevel = XP_PER_LEVEL;
  const progressPct = Math.round((xpIntoLevel / xpForNextLevel) * 100);
  return { level, xpIntoLevel, xpForNextLevel, progressPct };
}

/** Progresso global: tópicos concluídos sobre o total. */
export function computeProgress(data, checkedTopicIds) {
  const checked = toSet(checkedTopicIds);
  const topics = allTopics(data);
  const completed = topics.filter((t) => checked.has(t.id)).length;
  const total = topics.length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
  return { completed, total, pct };
}

/**
 * Progresso de uma fase + status visual.
 *   neutral → nada concluído
 *   active  → em andamento (1+ concluído, mas não tudo)
 *   done    → todos os tópicos concluídos
 */
export function computePhaseProgress(phase, checkedTopicIds) {
  const checked = toSet(checkedTopicIds);
  const total = phase.topics.length;
  const completed = phase.topics.filter((t) => checked.has(t.id)).length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  let status = 'neutral';
  if (completed === total && total > 0) status = 'done';
  else if (completed > 0) status = 'active';

  return { completed, total, pct, status };
}

/** Quantidade de fases atualmente em andamento (status === 'active'). */
export function countActivePhases(data, checkedTopicIds) {
  return data.phases.filter(
    (phase) => computePhaseProgress(phase, checkedTopicIds).status === 'active'
  ).length;
}

/**
 * Interpreta a regra declarativa de uma badge.
 * As regras vivem no data.js como dados puros; a lógica de avaliação fica aqui.
 *   { type: 'topicsCompleted', count: N }   → N tópicos concluídos no total
 *   { type: 'phaseComplete',   phaseId: X } → todos os tópicos da fase X
 */
function isBadgeUnlocked(rule, data, checked) {
  switch (rule.type) {
    case 'topicsCompleted': {
      const completed = allTopics(data).filter((t) => checked.has(t.id)).length;
      return completed >= rule.count;
    }
    case 'phaseComplete': {
      const phase = data.phases.find((p) => p.id === rule.phaseId);
      if (!phase || phase.topics.length === 0) return false;
      return phase.topics.every((t) => checked.has(t.id));
    }
    default:
      return false;
  }
}

/** Avalia todas as badges, devolvendo cada uma com seu estado unlocked. */
export function evaluateBadges(data, checkedTopicIds) {
  const checked = toSet(checkedTopicIds);
  return data.badges.map((badge) => ({
    ...badge,
    unlocked: isBadgeUnlocked(badge.rule, data, checked),
  }));
}
