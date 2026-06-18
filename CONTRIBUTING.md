# Contribuindo com o devmaps

Toda contribuição é bem-vinda — principalmente novos roadmaps. A arquitetura foi
desenhada para que adicionar um roadmap **não exija tocar em nenhum arquivo
existente** além de uma linha na home.

## Adicionando um novo roadmap

### 1. Copie o template

```bash
cp -r template roadmaps/meu-roadmap
```

Você terá `roadmaps/meu-roadmap/` com `index.html`, `config.js` e `data.js`.

### 2. Ajuste o `config.js`

```js
export default {
  id: 'meu-roadmap',            // use o mesmo nome da pasta
  title: 'Meu Roadmap',
  subtitle: 'Uma linha descrevendo o roadmap.',
  scriptUrl: '',                // sua URL do Apps Script, ou "" para localStorage
};
```

### 3. Preencha o `data.js`

Edite à mão seguindo a estrutura comentada, **ou** gere automaticamente: abra o
[Claude](https://claude.ai), cole o prompt de
[`template/PROMPT_CLAUDE.md`](template/PROMPT_CLAUDE.md), informe o tema e copie a
saída para `data.js`.

O `index.html` do template é genérico — em geral você **não precisa editá-lo**.

### 4. Liste o roadmap na home

Em `index.html` (raiz), acrescente o slug da pasta ao array:

```js
const ROADMAPS = ['arquitetura-software', 'meu-roadmap'];
```

### 5. Teste localmente

```bash
python -m http.server 8000   # abra http://localhost:8000/
```

Marque tópicos, confira XP/badges e recarregue para garantir que o progresso
persiste. Abra um Pull Request. 🚀

## Princípios de arquitetura

Mantenha a separação de responsabilidades ao mexer no core:

- **`core/engine.js`** — só lógica pura. Sem DOM, sem `fetch`, sem
  `localStorage`. Funções que recebem dados e devolvem valores.
- **`core/sheets.js`** — só persistência. Não conhece a UI. Nunca lança erro
  para quem chama (fallback silencioso para localStorage).
- **`data.js`** — só dados declarativos. Regras de badge são dados, não código.
- **`index.html`** — só orquestração: monta o DOM e liga os eventos ao engine.

Sem dependências externas e sem build step: o que roda no navegador é o que está
no repositório.

## Adicionando uma nova regra de badge

As regras vivem em `data.js` como `{ type, ...params }` e são interpretadas em
`evaluateBadges` (e na função `isBadgeUnlocked`) dentro de `core/engine.js`. Para
um novo tipo, adicione um `case` lá — esse é o único lugar que precisa saber
como avaliar a regra.
