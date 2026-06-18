/**
 * data.js — Roadmap de Arquitetura de Software com Python.
 *
 * Apenas dados declarativos: fases, tópicos e badges. Sem lógica.
 * As regras de badge são dados (type + parâmetros) interpretados por
 * core/engine.js → evaluateBadges. Para criar um roadmap novo, copie
 * a estrutura de template/data.js.
 */

export default {
  phases: [
    {
      id: 'p0',
      title: 'Fundamentos de Código Limpo',
      level: 'Iniciante',
      duration: '~3 meses',
      milestone:
        'Você escreve código que outra pessoa entende sem precisar perguntar — e consegue justificar cada decisão.',
      topics: [
        {
          id: 'solid',
          name: 'Princípios SOLID',
          desc: 'Os cinco princípios (SRP, OCP, LSP, ISP, DIP) que orientam classes coesas e fracamente acopladas. Saiba reconhecer violações no seu próprio código.',
          xp: 50,
        },
        {
          id: 'design-patterns',
          name: 'Design Patterns',
          desc: 'Padrões criacionais, estruturais e comportamentais (Factory, Strategy, Observer, Adapter). Entenda o problema que cada um resolve antes de aplicá-lo.',
          xp: 50,
        },
        {
          id: 'clean-code',
          name: 'Clean Code',
          desc: 'Nomes que revelam intenção, funções pequenas, ausência de duplicação. Como escrever código que comunica em vez de exigir comentários.',
          xp: 40,
        },
        {
          id: 'refactoring',
          name: 'Refatoração',
          desc: 'Melhorar a estrutura sem alterar o comportamento. Identifique code smells e aplique refatorações seguras apoiado por testes.',
          xp: 40,
        },
      ],
    },
    {
      id: 'p1',
      title: 'Organização de Aplicações',
      level: 'Básico-intermediário',
      duration: '~3 meses',
      milestone:
        'Você estrutura uma aplicação em camadas claras e expõe uma API REST que outros times conseguem consumir sem dor.',
      topics: [
        {
          id: 'layered-architecture',
          name: 'Layered Architecture',
          desc: 'Separação em camadas (apresentação, aplicação, domínio, infraestrutura) e o fluxo de dependências entre elas. A base mental para arquiteturas mais sofisticadas.',
          xp: 50,
        },
        {
          id: 'dependency-injection',
          name: 'Injeção de Dependência',
          desc: 'Inverter o controle de criação de dependências para desacoplar e testar. Como aplicar DI em Python sem frameworks pesados.',
          xp: 50,
        },
        {
          id: 'repository-pattern',
          name: 'Repository Pattern',
          desc: 'Abstrair o acesso a dados atrás de uma interface, isolando o domínio do banco. Quando vale a pena e quando é abstração demais.',
          xp: 50,
        },
        {
          id: 'rest',
          name: 'APIs REST',
          desc: 'Recursos, verbos HTTP, status codes, versionamento e contratos. Projete APIs previsíveis e bem documentadas.',
          xp: 50,
        },
      ],
    },
    {
      id: 'p2',
      title: 'Arquiteturas Orientadas a Domínio',
      level: 'Intermediário',
      duration: '~4 meses',
      milestone:
        'Você modela o domínio no centro do sistema e mantém regras de negócio independentes de framework e banco de dados.',
      topics: [
        {
          id: 'clean-architecture',
          name: 'Clean Architecture',
          desc: 'Regra de dependência apontando para dentro, casos de uso e entidades isolados de detalhes externos. Como aplicá-la sem dogmatismo.',
          xp: 60,
        },
        {
          id: 'hexagonal',
          name: 'Arquitetura Hexagonal',
          desc: 'Ports & Adapters: o núcleo da aplicação conversa com o mundo por interfaces, permitindo trocar entrada/saída sem tocar no domínio.',
          xp: 60,
        },
        {
          id: 'ddd',
          name: 'Domain-Driven Design',
          desc: 'Linguagem ubíqua, agregados, bounded contexts e value objects. Alinhar o modelo de software ao modelo de negócio.',
          xp: 70,
        },
        {
          id: 'testing',
          name: 'Estratégias de Teste',
          desc: 'Pirâmide de testes, unidade x integração x e2e, test doubles e TDD. Como testar arquiteturas em camadas com confiança.',
          xp: 60,
        },
      ],
    },
    {
      id: 'p3',
      title: 'Sistemas Distribuídos',
      level: 'Avançado',
      duration: '~4 meses',
      milestone:
        'Você projeta serviços que se comunicam de forma resiliente, observável e tolerante a falhas.',
      topics: [
        {
          id: 'event-driven',
          name: 'Arquitetura Orientada a Eventos',
          desc: 'Mensageria, filas, pub/sub e eventual consistency. Desacople serviços usando eventos em vez de chamadas síncronas.',
          xp: 70,
        },
        {
          id: 'service-communication',
          name: 'Comunicação entre Serviços',
          desc: 'Síncrono x assíncrono, gRPC, REST e mensageria; contratos e idempotência. Escolha o estilo certo para cada interação.',
          xp: 60,
        },
        {
          id: 'resilience',
          name: 'Resiliência',
          desc: 'Timeouts, retries, circuit breakers, bulkheads e degradação graciosa. Projete para que falhas parciais não derrubem o sistema.',
          xp: 70,
        },
        {
          id: 'observability',
          name: 'Observabilidade',
          desc: 'Logs estruturados, métricas e tracing distribuído. Como enxergar o que acontece em produção quando algo dá errado.',
          xp: 60,
        },
      ],
    },
    {
      id: 'p4',
      title: 'Liderança Técnica',
      level: 'Expert / Tech Lead',
      duration: 'contínuo',
      milestone:
        'Você toma e documenta decisões de arquitetura, comunica trade-offs e desenha sistemas em escala com clareza.',
      topics: [
        {
          id: 'adr',
          name: 'Architecture Decision Records',
          desc: 'Registrar decisões de arquitetura com contexto, opções e consequências. Crie memória organizacional e justifique escolhas.',
          xp: 50,
        },
        {
          id: 'cap-theorem',
          name: 'Teorema CAP',
          desc: 'Consistência, disponibilidade e tolerância a partição — e por que não dá para ter os três. Implicações práticas em sistemas distribuídos.',
          xp: 60,
        },
        {
          id: 'c4-model',
          name: 'C4 Model',
          desc: 'Documentar arquitetura em quatro níveis (contexto, contêiner, componente, código). Diagramas que comunicam para públicos diferentes.',
          xp: 50,
        },
        {
          id: 'system-design',
          name: 'System Design',
          desc: 'Escalabilidade, cache, sharding, balanceamento e estimativas de capacidade. Conduza o desenho de sistemas de grande porte ponta a ponta.',
          xp: 80,
        },
      ],
    },
  ],

  badges: [
    {
      id: 'first-step',
      name: 'Primeiro passo',
      icon: '🌱',
      desc: 'Concluiu o primeiro tópico.',
      rule: { type: 'topicsCompleted', count: 1 },
    },
    {
      id: 'p0-done',
      name: 'SOLID concluído',
      icon: '🧱',
      desc: 'Completou a fase de Fundamentos.',
      rule: { type: 'phaseComplete', phaseId: 'p0' },
    },
    {
      id: 'api-architect',
      name: 'API Architect',
      icon: '🔌',
      desc: 'Completou a fase de Organização de Aplicações.',
      rule: { type: 'phaseComplete', phaseId: 'p1' },
    },
    {
      id: 'domain-master',
      name: 'Domain Master',
      icon: '🎯',
      desc: 'Completou a fase de Arquiteturas Orientadas a Domínio.',
      rule: { type: 'phaseComplete', phaseId: 'p2' },
    },
    {
      id: 'distributed',
      name: 'Distributed',
      icon: '🌐',
      desc: 'Completou a fase de Sistemas Distribuídos.',
      rule: { type: 'phaseComplete', phaseId: 'p3' },
    },
    {
      id: 'tech-lead',
      name: 'Tech Lead',
      icon: '👑',
      desc: 'Completou a fase de Liderança Técnica.',
      rule: { type: 'phaseComplete', phaseId: 'p4' },
    },
    {
      id: 'halfway',
      name: 'Metade do caminho',
      icon: '⚡',
      desc: 'Concluiu 10 tópicos.',
      rule: { type: 'topicsCompleted', count: 10 },
    },
  ],
};
