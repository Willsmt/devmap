# devmaps

Roadmaps interativos, open source, para devs acompanharem a própria evolução.

Faça fork, conecte uma planilha Google e tenha em minutos um tracker de
aprendizado pessoal: progresso persistido, XP, níveis, badges e deploy gratuito
no GitHub Pages. **Sem npm, sem framework, sem servidor** — HTML, CSS e
JavaScript puro com ESModules nativos.

O primeiro roadmap incluído é **Arquitetura de Software com Python** (5 fases,
20 tópicos, 7 badges).

---

## Como funciona

- O widget marca tópicos, calcula XP/nível e desbloqueia badges.
- O progresso é salvo no **Google Sheets** (via Google Apps Script) e fica
  ligado a um `userId` anônimo (UUID) guardado no seu navegador.
- Se você não configurar o Sheets, tudo funciona igual usando **localStorage**
  — só não sincroniza entre dispositivos. Nada quebra.

```
core/      → engine.js (lógica pura), sheets.js (persistência), widget.css
roadmaps/  → um roadmap por pasta (index.html + config.js + data.js)
template/  → base para criar um roadmap novo
sheets/    → Code.gs, o backend em Google Apps Script
index.html → home que lista os roadmaps
```

---

## Setup em 5 passos

### 1. Faça o fork e habilite o GitHub Pages

Faça fork deste repositório. Em **Settings → Pages**, defina o source como
**GitHub Actions**. O workflow em `.github/workflows/deploy.yml` publica o site
a cada push na branch principal.

> Só quer testar localmente? Pule para o final: "Rodando localmente".

### 2. Crie a planilha e o backend

1. Crie uma planilha nova no [Google Sheets](https://sheets.new).
2. Vá em **Extensões → Apps Script**.
3. Apague o conteúdo padrão e cole tudo de [`sheets/Code.gs`](sheets/Code.gs).
4. Salve.

As abas `progress` e `notes` são criadas automaticamente no primeiro salvamento.

### 3. Publique o Apps Script como Web App

No editor do Apps Script: **Implantar → Nova implantação → App da Web**.

- **Executar como:** Eu (sua conta)
- **Quem tem acesso:** Qualquer pessoa

Copie a URL gerada (termina em `/exec`).

### 4. Cole a URL no config do roadmap

Em `roadmaps/arquitetura-software/config.js`, preencha `scriptUrl`:

```js
export default {
  id: 'arquitetura-software',
  title: 'Arquitetura de Software com Python',
  subtitle: 'Do código limpo à liderança técnica — 5 fases, 20 tópicos.',
  scriptUrl: 'https://script.google.com/macros/s/SEU_ID/exec',
};
```

### 5. Faça commit e push

```bash
git add .
git commit -m "chore: configura minha planilha"
git push
```

O GitHub Actions publica em `https://<seu-usuario>.github.io/<repo>/`.
Pronto: marque um tópico e o progresso persiste. 🎉

---

## Rodando localmente

ESModules exigem um servidor HTTP (não funciona abrindo o arquivo direto).
Qualquer um serve:

```bash
python -m http.server 8000
# então abra http://localhost:8000/
```

Sem `scriptUrl`, o progresso fica no localStorage do navegador.

---

## Criando o seu próprio roadmap

Veja o [CONTRIBUTING.md](CONTRIBUTING.md). Em resumo: copie `template/` para
`roadmaps/<seu-roadmap>/`, gere o `data.js` com o prompt em
[`template/PROMPT_CLAUDE.md`](template/PROMPT_CLAUDE.md) e adicione o slug à
lista na home (`index.html`).

---

## Licença

MIT.
