/**
 * Code.gs — Backend do devmaps em Google Apps Script.
 *
 * Publique este script como Web App (Implantar > Nova implantação > App da Web):
 *   - Executar como: Eu (sua conta)
 *   - Quem tem acesso: Qualquer pessoa
 * Copie a URL gerada (/exec) e cole em config.js → scriptUrl.
 *
 * A planilha precisa de duas abas (criadas automaticamente na primeira escrita):
 *   progress → userId | roadmapId | topicId | checked | updatedAt
 *   notes    → userId | roadmapId | topicId | note    | updatedAt
 *
 * Não há autenticação: o userId é um UUID anônimo gerado no navegador.
 */

var SHEETS = {
  progress: ['userId', 'roadmapId', 'topicId', 'checked', 'updatedAt'],
  notes: ['userId', 'roadmapId', 'topicId', 'note', 'updatedAt'],
};

/** GET ?action=load&userId=UUID&roadmapId=ID → { progress, notes }. */
function doGet(e) {
  var params = (e && e.parameter) || {};
  if (params.action !== 'load') {
    return json({ error: 'unknown action' });
  }
  var userId = params.userId;
  var roadmapId = params.roadmapId;
  return json({
    progress: readRows('progress', userId, roadmapId).map(function (row) {
      return { topicId: row.topicId, checked: row.checked === true || row.checked === 'true' };
    }),
    notes: readRows('notes', userId, roadmapId).map(function (row) {
      return { topicId: row.topicId, note: row.note };
    }),
  });
}

/** POST com body JSON: saveProgress | saveNote → { success }. */
function doPost(e) {
  var body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return json({ success: false, error: 'invalid json' });
  }

  if (body.action === 'saveProgress') {
    upsert('progress', body.userId, body.roadmapId, body.topicId, {
      checked: body.checked === true,
    });
    return json({ success: true });
  }

  if (body.action === 'saveNote') {
    upsert('notes', body.userId, body.roadmapId, body.topicId, {
      note: body.note || '',
    });
    return json({ success: true });
  }

  return json({ success: false, error: 'unknown action' });
}

/** Lê as linhas de uma aba filtrando por userId (+ roadmapId opcional). */
function readRows(sheetName, userId, roadmapId) {
  var sheet = getSheet(sheetName);
  var values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];

  var headers = values[0];
  var rows = [];
  for (var i = 1; i < values.length; i++) {
    var row = rowToObject(headers, values[i]);
    if (row.userId !== userId) continue;
    if (roadmapId && row.roadmapId !== roadmapId) continue;
    rows.push(row);
  }
  return rows;
}

/**
 * Insere ou atualiza a linha única identificada por (userId, roadmapId, topicId).
 * fields traz apenas as colunas específicas da aba (checked OU note).
 */
function upsert(sheetName, userId, roadmapId, topicId, fields) {
  var sheet = getSheet(sheetName);
  var values = sheet.getDataRange().getValues();
  var headers = values[0];
  var now = new Date().toISOString();

  for (var i = 1; i < values.length; i++) {
    var row = rowToObject(headers, values[i]);
    if (row.userId === userId && row.roadmapId === roadmapId && row.topicId === topicId) {
      var merged = Object.assign(row, fields, { updatedAt: now });
      sheet.getRange(i + 1, 1, 1, headers.length).setValues([objectToRow(headers, merged)]);
      return;
    }
  }

  var base = { userId: userId, roadmapId: roadmapId, topicId: topicId, updatedAt: now };
  var record = Object.assign(base, fields);
  sheet.appendRow(objectToRow(headers, record));
}

/** Retorna a aba pelo nome, criando-a com cabeçalho se não existir. */
function getSheet(name) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(SHEETS[name]);
  }
  return sheet;
}

function rowToObject(headers, row) {
  var obj = {};
  for (var i = 0; i < headers.length; i++) obj[headers[i]] = row[i];
  return obj;
}

function objectToRow(headers, obj) {
  return headers.map(function (h) {
    return obj[h] !== undefined ? obj[h] : '';
  });
}

function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
