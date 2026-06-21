/**
 * config.js — Configuração do roadmap de Arquitetura de Software.
 *
 * - id:       identificador único do roadmap (usado como chave de persistência).
 * - title:    título exibido no topo da página e na home.
 * - subtitle: descrição curta de uma linha.
 * - scriptUrl: URL do Web App do Google Apps Script (termina em /exec).
 *              Deixe "" para rodar só com localStorage. Veja o README para
 *              publicar o backend e colar a URL aqui.
 */

export default {
  id: 'arquitetura-software',
  title: 'Arquitetura de Software com Python',
  subtitle: 'Do código limpo à liderança técnica — 5 fases, 20 tópicos.',
  scriptUrl:
    'https://script.google.com/macros/s/AKfycbwVjP78qMRMP6GuP9LEWC_xBj8aKIdQFb-3MrY88PwyhQIMsBmTTBZiMn3lOZoUuvxp/exec',
};
