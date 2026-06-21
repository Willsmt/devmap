/**
 * config.js — Configuração do SEU roadmap.
 *
 * Copie a pasta template/ para roadmaps/<seu-roadmap>/ e ajuste os campos.
 */

export default {
  // Identificador único. Use o mesmo nome da pasta. Vira chave de persistência.
  id: 'meu-roadmap',

  // Título exibido no topo da página e na home.
  title: 'Meu Roadmap',

  // Uma linha descrevendo o roadmap.
  subtitle: 'Descreva aqui o objetivo do seu roadmap.',

  // URL do Web App do Apps Script (termina em /exec).
  // Deixe "" para salvar apenas no localStorage. Veja o README.
  scriptUrl: '',

  // Tema OPCIONAL: sobrescreve tokens de design só deste roadmap, sem mexer
  // no core/widget.css. As chaves são as variáveis CSS sem o prefixo "--".
  // Peça um tema pronto para uma IA, cole aqui e pronto. Remova o que não usar.
  // theme: {
  //   accent: '#a371f7',   // cor de destaque (botões, barras, badges)
  //   bg: '#0b0b14',       // fundo da página
  //   surface: '#15151f',  // fundo dos cards
  //   text: '#e6edf3',     // cor do texto
  //   radius: '16px',      // arredondamento dos cantos
  // },
};
