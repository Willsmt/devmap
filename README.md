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
- O progresso é salvo no **Google Sheets** (via Google Apps Script), ligado a
  um `userId` anônimo (UUID) guardado no seu navegador.
- A sincronização é protegida por um **token**: o backend só lê/grava se a
  requisição trouxer o token correto (que você define em `SCRIPT_TOKEN`). Por
  isso o site pode ser público — quem não tem o token usa normalmente, mas o
  progresso fica só no navegador dele e **ninguém escreve na sua planilha**.
- Sem `scriptUrl` ou sem token, tudo funciona igual usando **localStorage** —
  só não sincroniza entre dispositivos. Nada quebra.

```
core/      → engine.js (lógica pura), sheets.js (persistência),
             sync-ui.js (barra de sync), widget.css
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

### 4. Defina seu token de sincronização

Ainda no editor do Apps Script: **engrenagem (Configurações do projeto) →
Propriedades do script → Adicionar propriedade**.

- **Propriedade:** `SCRIPT_TOKEN`
- **Valor:** uma senha longa e aleatória (gere uma com um gerenciador de senhas)

Esse token é o segredo que autoriza ler e gravar na sua planilha. Ele **não vai
para o repositório** — fica só aqui e no seu navegador. Sem ele, qualquer
visitante do site cai no modo local e nunca escreve nos seus dados.

### 5. Cole a URL no config do roadmap

Em `roadmaps/arquitetura-software/config.js`, preencha `scriptUrl`:

```js
export default {
  id: 'arquitetura-software',
  title: 'Arquitetura de Software com Python',
  subtitle: 'Do código limpo à liderança técnica — 5 fases, 20 tópicos.',
  scriptUrl: 'https://script.google.com/macros/s/SEU_ID/exec',
};
```

A **mesma** `scriptUrl` serve para todos os roadmaps — o backend separa os dados
por `roadmapId`. Como o token protege a gravação, dá para commitar a URL sem medo.

### 6. Faça commit e push

```bash
git add .
git commit -m "chore: configura minha planilha"
git push
```

O GitHub Actions publica em `https://<seu-usuario>.github.io/<repo>/`.

### 7. Conecte seus dispositivos

Abra o site no PC e no celular. Na **barra de sincronização** no topo do
roadmap, cole o seu `SCRIPT_TOKEN` e clique em **Conectar**. O token fica salvo
naquele navegador e o progresso passa a sincronizar entre todos os aparelhos
conectados. 🎉

---

## Rodando localmente

ESModules exigem um servidor HTTP (não funciona abrindo o arquivo direto).
Qualquer um serve:

```bash
python -m http.server 8000
# então abra http://localhost:8000/
```

Sem `scriptUrl` (ou sem token conectado), o progresso fica no localStorage do
navegador.

---

## Criando o seu próprio roadmap

Veja o [CONTRIBUTING.md](CONTRIBUTING.md). Em resumo: copie `template/` para
`roadmaps/<seu-roadmap>/`, gere o `data.js` com o prompt em
[`template/PROMPT_CLAUDE.md`](template/PROMPT_CLAUDE.md) e adicione o slug à
lista na home (`index.html`).

### Personalizando o visual

O design base fica em [`core/widget.css`](core/widget.css), com os tokens de cor,
espaçamento e arredondamento no `:root`. Há dois níveis de customização:

- **Global** (todos os roadmaps + home): edite os tokens em `core/widget.css`.
- **Por roadmap** (cada um com a própria cara): adicione um objeto `theme` ao
  `config.js` daquele roadmap, sem tocar no core. As chaves são as variáveis CSS
  sem o prefixo `--`:

  ```js
  export default {
    id: 'meu-roadmap',
    // ...
    theme: { accent: '#a371f7', bg: '#0b0b14', radius: '16px' },
  };
  ```

- **Restyle completo de um roadmap** (layout, cards, animações — não só cor):
  dê a ele uma folha de estilo própria com `stylesheet` no config. Ela é
  carregada depois do `widget.css`, então sobrescreve o que quiser, usando os
  nomes de classe como contrato (`.phase`, `.topic`, `.badge`, `.xp-bar`...):

  ```js
  export default {
    id: 'meu-roadmap',
    // ...
    stylesheet: './estilo.css',
  };
  ```

  Há um [`template/estilo.css`](template/estilo.css) de exemplo para começar.
  Peça um CSS para uma IA, salve na pasta do roadmap, aponte no config e pronto.

> **Atenção:** se o design que você quer copiar depende de **efeitos em JS**
> (animações por script, interações, comportamento dinâmico), só CSS não basta —
> aí você vai mexer também nas funções de render do `index.html` do roadmap, e
> isso muda bem mais que o estilo. Dica: **esgote o que dá para fazer só com CSS**
> (transições, `@keyframes`, `:hover`/`:focus`, grid/flex, `::before`/`::after`)
> antes de partir para o JS — você vai longe sem script nenhum.

---

## Licença

MIT.
