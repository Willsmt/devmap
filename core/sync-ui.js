/**
 * sync-ui.js — Barra de sincronização do devmaps.
 *
 * Responsável APENAS pelo pedaço de UI que liga/desliga o sync com a planilha.
 * A persistência em si vive em sheets.js; aqui só montamos o DOM e disparamos
 * callbacks. Isso mantém o index.html enxuto e evita duplicar essa UI em cada
 * roadmap.
 *
 * Estados possíveis:
 *   • sem backend            → aviso "modo local" (este roadmap não tem planilha)
 *   • com backend, sem token → convite para colar o token e sincronizar
 *   • token + sincronizado   → "✓ sincronizado" com botão de desconectar
 *   • token + falhou         → aviso de token inválido / sem conexão
 */

import { hasBackend, getToken } from './sheets.js';

/**
 * Monta a barra de sincronização.
 * @param {object} config   Config do roadmap (usa scriptUrl).
 * @param {boolean} synced  O load atual veio mesmo da planilha?
 * @param {{ onConnect: (token: string) => void, onDisconnect: () => void }} handlers
 * @returns {HTMLElement}
 */
export function syncBar(config, synced, handlers) {
  const el = document.createElement('div');
  const token = getToken();

  // Sem planilha configurada neste roadmap: progresso é sempre local.
  if (!hasBackend(config)) {
    el.className = 'notice';
    el.innerHTML =
      '<strong>Modo local.</strong> Este roadmap não tem uma planilha configurada, ' +
      'então seu progresso fica salvo apenas neste navegador.';
    return el;
  }

  // Token presente e o load veio da planilha: tudo certo.
  if (token && synced) {
    el.className = 'sync-bar sync-bar--ok';
    el.innerHTML =
      '<span><strong>✓ Sincronizado</strong> — seu progresso está salvo na sua planilha.</span>' +
      '<button type="button" data-disconnect>Desconectar</button>';
    el.querySelector('[data-disconnect]').addEventListener('click', () => handlers.onDisconnect());
    return el;
  }

  // Sem token, ou com um token que não sincronizou (inválido/offline).
  el.className = 'sync-bar';
  const message =
    token && !synced
      ? '<span class="sync-bar__warn">⚠ Não consegui sincronizar — confira o token ou a conexão.</span>'
      : '<span>Seu progresso está salvo só neste navegador. Tem um token? Cole para sincronizar entre dispositivos.</span>';
  el.innerHTML = `
    ${message}
    <div class="sync-bar__row">
      <input type="password" class="sync-bar__input" placeholder="Token de sincronização"
             autocomplete="off" spellcheck="false" />
      <button type="button" data-connect>Conectar</button>
    </div>`;

  const input = el.querySelector('.sync-bar__input');
  if (token) input.value = token;

  const connect = () => {
    const value = input.value.trim();
    if (value) handlers.onConnect(value);
  };
  el.querySelector('[data-connect]').addEventListener('click', connect);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') connect();
  });

  return el;
}
