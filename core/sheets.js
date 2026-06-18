/**
 * sheets.js — Adapter de persistência do devmaps.
 *
 * Única responsabilidade: falar com o backend. Não conhece a UI.
 * Expõe Promises e nunca lança erro para quem chama — se o Google Sheets
 * não estiver configurado ou a rede falhar, faz fallback silencioso para
 * localStorage. A experiência degrada graciosamente, nunca quebra.
 *
 * O backend (Apps Script) espera requisições "simples" para evitar o
 * preflight de CORS: por isso o POST envia o corpo como texto puro
 * (sem header Content-Type custom) e o servidor faz JSON.parse.
 */

const UID_KEY = 'devmaps_uid';

/** Gera/recupera o UUID v4 anônimo do usuário, persistido no localStorage. */
export function getUserId() {
  let uid = localStorage.getItem(UID_KEY);
  if (!uid) {
    uid = crypto.randomUUID();
    localStorage.setItem(UID_KEY, uid);
  }
  return uid;
}

/** Há uma URL de Apps Script válida em config? */
export function isConfigured(config) {
  return Boolean(config && config.scriptUrl && config.scriptUrl.trim());
}

/* ----------------------------- localStorage ----------------------------- */

function localKey(roadmapId, kind) {
  return `devmaps_${roadmapId}_${kind}`;
}

function readLocal(roadmapId, kind) {
  try {
    return JSON.parse(localStorage.getItem(localKey(roadmapId, kind))) || [];
  } catch {
    return [];
  }
}

function writeLocalEntry(roadmapId, kind, topicId, patch) {
  const rows = readLocal(roadmapId, kind);
  const existing = rows.find((r) => r.topicId === topicId);
  if (existing) Object.assign(existing, patch);
  else rows.push({ topicId, ...patch });
  localStorage.setItem(localKey(roadmapId, kind), JSON.stringify(rows));
}

/* ------------------------------- backend -------------------------------- */

/**
 * Carrega progresso e anotações. Tenta o Sheets; em qualquer falha,
 * cai para o localStorage. Sempre resolve com { progress, notes }.
 */
export async function load(config, roadmapId) {
  if (isConfigured(config)) {
    try {
      const url = new URL(config.scriptUrl);
      url.searchParams.set('action', 'load');
      url.searchParams.set('userId', getUserId());
      url.searchParams.set('roadmapId', roadmapId);
      const res = await fetch(url.toString());
      const data = await res.json();
      if (data && !data.error) {
        return { progress: data.progress || [], notes: data.notes || [] };
      }
    } catch {
      /* cai para o fallback abaixo */
    }
  }
  return {
    progress: readLocal(roadmapId, 'progress'),
    notes: readLocal(roadmapId, 'notes'),
  };
}

/** Envia um POST "simples" ao Apps Script; devolve true/false sem lançar. */
async function post(config, payload) {
  try {
    const res = await fetch(config.scriptUrl, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return Boolean(data && data.success);
  } catch {
    return false;
  }
}

/** Salva o estado de um tópico (checked). Persiste local sempre; Sheets se houver. */
export async function saveProgress(config, roadmapId, topicId, checked) {
  writeLocalEntry(roadmapId, 'progress', topicId, { checked });
  if (isConfigured(config)) {
    await post(config, {
      action: 'saveProgress',
      userId: getUserId(),
      roadmapId,
      topicId,
      checked,
    });
  }
}

/** Salva a anotação de um tópico. Persiste local sempre; Sheets se houver. */
export async function saveNote(config, roadmapId, topicId, note) {
  writeLocalEntry(roadmapId, 'notes', topicId, { note });
  if (isConfigured(config)) {
    await post(config, {
      action: 'saveNote',
      userId: getUserId(),
      roadmapId,
      topicId,
      note,
    });
  }
}
