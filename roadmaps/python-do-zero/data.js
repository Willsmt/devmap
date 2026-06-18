/**
 * data.js — Roadmap Python do Zero.
 *
 * Apenas dados declarativos: fases, tópicos e badges. Sem lógica.
 * As regras de badge são interpretadas por core/engine.js → evaluateBadges.
 */

export default {
  phases: [
    {
      id: 'p0',
      title: 'Fundamentos da Linguagem',
      level: 'Iniciante',
      duration: '~3 semanas',
      milestone: 'Escrever scripts simples, entender a sintaxe básica e executar programas Python pelo terminal.',
      topics: [
        { id: 'instalacao-ambiente', name: 'Instalação e Ambiente', desc: 'Configure o Python e um editor (VS Code + extensão). Ter o ambiente pronto elimina barreiras desde o primeiro dia.', xp: 30 },
        { id: 'variaveis-tipos', name: 'Variáveis e Tipos de Dados', desc: 'Aprenda int, float, str e bool. São os blocos básicos de qualquer programa Python.', xp: 35 },
        { id: 'operadores', name: 'Operadores e Expressões', desc: 'Domine operadores aritméticos, de comparação e lógicos. Essencial para criar condições e cálculos.', xp: 30 },
        { id: 'entrada-saida', name: 'Entrada e Saída de Dados', desc: 'Use input() e print() para interagir com o usuário. Todo programa útil precisa se comunicar.', xp: 35 },
        { id: 'strings-formatacao', name: 'Strings e Formatação', desc: 'Manipule textos com f-strings, slicing e métodos como .upper() e .split(). Strings estão em todo lugar.', xp: 40 }
      ]
    },
    {
      id: 'p1',
      title: 'Controle de Fluxo e Estruturas',
      level: 'Iniciante',
      duration: '~3 semanas',
      milestone: 'Criar programas que tomam decisões, repetem ações e organizam dados em listas e dicionários.',
      topics: [
        { id: 'condicionais', name: 'Condicionais (if / elif / else)', desc: 'Ensine o programa a tomar decisões. É a base da lógica em qualquer linguagem.', xp: 40 },
        { id: 'loops-for-while', name: 'Laços for e while', desc: 'Automatize repetições e itere sobre coleções. Loops são o coração da automação.', xp: 45 },
        { id: 'listas', name: 'Listas e Operações', desc: 'Armazene sequências de dados e aprenda métodos como .append(), .remove() e .sort(). Listas são a estrutura mais usada em Python.', xp: 45 },
        { id: 'dicionarios', name: 'Dicionários e Conjuntos', desc: 'Mapeie chaves a valores e elimine duplicatas com sets. Perfeitos para representar dados reais.', xp: 50 }
      ]
    },
    {
      id: 'p2',
      title: 'Funções e Modularidade',
      level: 'Básico-Intermediário',
      duration: '~4 semanas',
      milestone: 'Escrever código reutilizável com funções bem definidas e organizar projetos em múltiplos arquivos.',
      topics: [
        { id: 'funcoes-basicas', name: 'Definindo Funções', desc: 'Use def, parâmetros e return para encapsular lógica. Funções são a unidade de reuso do Python.', xp: 50 },
        { id: 'escopo-variaveis', name: 'Escopo e Variáveis Locais/Globais', desc: 'Entenda onde uma variável existe e por quê isso importa. Evita bugs difíceis de rastrear.', xp: 55 },
        { id: 'args-kwargs', name: '*args e **kwargs', desc: 'Crie funções flexíveis que aceitam qualquer número de argumentos. Muito usado em bibliotecas Python.', xp: 60 },
        { id: 'modulos-imports', name: 'Módulos e Imports', desc: 'Importe módulos da stdlib como math, os e random. Aprenda a organizar seu código em arquivos separados.', xp: 55 },
        { id: 'comprehensions', name: 'List Comprehensions', desc: 'Crie listas de forma concisa e pythonica. Melhora a legibilidade e é amplamente usado na comunidade.', xp: 60 }
      ]
    },
    {
      id: 'p3',
      title: 'Orientação a Objetos',
      level: 'Intermediário',
      duration: '~5 semanas',
      milestone: 'Modelar problemas do mundo real com classes, herança e encapsulamento, seguindo o paradigma OOP.',
      topics: [
        { id: 'classes-objetos', name: 'Classes e Objetos', desc: 'Crie suas próprias estruturas de dados com atributos e métodos. OOP é essencial para projetos maiores.', xp: 65 },
        { id: 'heranca', name: 'Herança e Polimorfismo', desc: 'Reutilize e especialize comportamento entre classes. Reduz duplicação e aumenta a expressividade do código.', xp: 70 },
        { id: 'encapsulamento', name: 'Encapsulamento e Propriedades', desc: 'Proteja o estado interno com _ e @property. Boas práticas de design começam aqui.', xp: 65 },
        { id: 'metodos-especiais', name: 'Métodos Especiais (Dunder)', desc: 'Implemente __str__, __repr__, __len__ e outros. Faz seus objetos se comportarem como tipos nativos do Python.', xp: 70 }
      ]
    },
    {
      id: 'p4',
      title: 'Tratamento de Erros e Arquivos',
      level: 'Intermediário',
      duration: '~3 semanas',
      milestone: 'Criar programas robustos que lidam com falhas graciosamente, leem e escrevem arquivos e consomem dados JSON.',
      topics: [
        { id: 'excecoes', name: 'Exceções e try/except', desc: 'Capture erros específicos e evite que o programa quebre de forma inesperada. Código profissional sempre trata exceções.', xp: 60 },
        { id: 'excecoes-customizadas', name: 'Exceções Customizadas', desc: 'Crie seus próprios tipos de erro com classes. Melhora a comunicação de falhas em sistemas maiores.', xp: 65 },
        { id: 'leitura-escrita-arquivos', name: 'Leitura e Escrita de Arquivos', desc: 'Use open(), with e os módulos pathlib e os para manipular arquivos. Base de qualquer automação.', xp: 60 },
        { id: 'json-csv', name: 'Trabalhando com JSON e CSV', desc: 'Importe e exporte dados nos formatos mais usados em APIs e planilhas. Habilidade prática imediata.', xp: 65 }
      ]
    },
    {
      id: 'p5',
      title: 'Bibliotecas Essenciais e Projetos Práticos',
      level: 'Avançado-Iniciante',
      duration: '~6 semanas',
      milestone: 'Usar o ecossistema Python para criar scripts reais: consumir APIs, manipular dados e automatizar tarefas.',
      topics: [
        { id: 'virtual-env-pip', name: 'Ambientes Virtuais e pip', desc: 'Gerencie dependências com venv e pip. Indispensável em qualquer projeto Python sério.', xp: 50 },
        { id: 'requests-apis', name: 'Consumindo APIs com requests', desc: 'Faça chamadas HTTP e processe respostas JSON. Conecta seu código ao mundo real.', xp: 70 },
        { id: 'pandas-intro', name: 'Introdução ao Pandas', desc: 'Carregue e analise dados tabulares com DataFrames. Base para ciência de dados e automações com planilhas.', xp: 80 },
        { id: 'automacao-os-shutil', name: 'Automação de Arquivos com os e shutil', desc: 'Mova, renomeie e organize arquivos programaticamente. Scripts de automação de alta utilidade prática.', xp: 75 },
        { id: 'projeto-final', name: 'Projeto Integrador', desc: 'Construa um script completo que una leitura de arquivos, consumo de API e persistência de dados. Consolida todo o aprendizado.', xp: 90 }
      ]
    }
  ],
  badges: [
    {
      id: 'first-step',
      name: 'Primeiro Passo',
      icon: '🌱',
      desc: 'Você concluiu seu primeiro tópico. A jornada Python começou.',
      rule: { type: 'topicsCompleted', count: 1 }
    },
    {
      id: 'warming-up',
      name: 'Aquecendo os Motores',
      icon: '🔥',
      desc: 'Cinco tópicos concluídos. O ritmo está pegando.',
      rule: { type: 'topicsCompleted', count: 5 }
    },
    {
      id: 'halfway',
      name: 'Na Metade do Caminho',
      icon: '⚡',
      desc: 'Você já completou metade de todos os tópicos do roadmap. Continue!',
      rule: { type: 'topicsCompleted', count: 11 }
    },
    {
      id: 'p0-done',
      name: 'Base Construída',
      icon: '🧱',
      desc: 'Fase 1 concluída. Você domina a sintaxe fundamental do Python.',
      rule: { type: 'phaseComplete', phaseId: 'p0' }
    },
    {
      id: 'p1-done',
      name: 'Lógica Desbloqueada',
      icon: '🔀',
      desc: 'Fase 2 concluída. Seu código já toma decisões e lida com coleções.',
      rule: { type: 'phaseComplete', phaseId: 'p1' }
    },
    {
      id: 'p2-done',
      name: 'Código Reutilizável',
      icon: '♻️',
      desc: 'Fase 3 concluída. Você sabe estruturar código limpo e modular.',
      rule: { type: 'phaseComplete', phaseId: 'p2' }
    },
    {
      id: 'p3-done',
      name: 'Pensamento Orientado a Objetos',
      icon: '🏗️',
      desc: 'Fase 4 concluída. Você modela o mundo real com classes e herança.',
      rule: { type: 'phaseComplete', phaseId: 'p3' }
    },
    {
      id: 'p4-done',
      name: 'Código Robusto',
      icon: '🛡️',
      desc: 'Fase 5 concluída. Seus programas tratam erros e persistem dados.',
      rule: { type: 'phaseComplete', phaseId: 'p4' }
    },
    {
      id: 'p5-done',
      name: 'Pythonista Completo',
      icon: '🐍',
      desc: 'Roadmap concluído! Você está pronto para o ecossistema Python do mundo real.',
      rule: { type: 'phaseComplete', phaseId: 'p5' }
    }
  ]
};
