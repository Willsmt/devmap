/**
 * data.js — Roadmap "Arquitetura de Software com IA".
 *
 * Apenas dados declarativos: fases, tópicos e badges. Sem lógica.
 * As regras de badge são interpretadas por core/engine.js → evaluateBadges.
 */

export default {
  phases: [
    {
      id: 'p0',
      title: 'Fundamentos: Arquitetura na Era da IA',
      level: 'Iniciante',
      duration: '~2 semanas',
      milestone: 'Saber quando a IA agrega valor e onde ela entra em uma arquitetura — separando o que deve ser determinístico do que se beneficia de um modelo.',
      topics: [
        { id: 'principios-revisitados', name: 'Princípios de Arquitetura Revisitados', desc: 'Acoplamento, coesão e fronteiras continuam valendo — mas a IA adiciona não-determinismo. Reveja os fundamentos com essa lente.', xp: 30 },
        { id: 'quando-usar-ia', name: 'Quando Usar IA (e Quando Não)', desc: 'Nem todo problema pede um LLM. Aprenda a distinguir tarefas que pedem código determinístico das que se beneficiam de um modelo.', xp: 35 },
        { id: 'anatomia-feature-ia', name: 'Anatomia de uma Feature com IA', desc: 'Entrada → prompt → modelo → pós-processamento → validação. Conheça o pipeline mínimo de qualquer funcionalidade com IA.', xp: 35 },
        { id: 'tradeoffs-latencia-custo', name: 'Trade-offs: Latência, Custo e Não-determinismo', desc: 'Modelos cobram por token, respondem em segundos e variam a cada chamada. Projete sabendo desses três custos desde o início.', xp: 40 },
      ],
    },
    {
      id: 'p1',
      title: 'Integração com LLMs',
      level: 'Básico-Intermediário',
      duration: '~3 semanas',
      milestone: 'Integrar um LLM a um serviço de forma confiável: prompts versionados, saídas estruturadas e validadas, e streaming na interface.',
      topics: [
        { id: 'api-mensagens', name: 'A API de Mensagens', desc: 'System prompt, mensagens de usuário e assistente, parâmetros como temperatura e max tokens. A base de toda integração.', xp: 40 },
        { id: 'prompt-como-contrato', name: 'Prompt como Contrato de Interface', desc: 'Trate o prompt como uma API: versionado, testado e documentado. Mudanças nele quebram comportamento como qualquer breaking change.', xp: 50 },
        { id: 'structured-outputs', name: 'Saídas Estruturadas e Validação', desc: 'Force respostas em JSON e valide com um schema. Sem isso, integrar a saída do modelo ao resto do sistema é frágil.', xp: 55 },
        { id: 'streaming-ux', name: 'Streaming e UX de Resposta', desc: 'Exiba tokens conforme chegam para reduzir a latência percebida. A arquitetura precisa suportar respostas incrementais.', xp: 45 },
      ],
    },
    {
      id: 'p2',
      title: 'RAG e Dados',
      level: 'Intermediário',
      duration: '~4 semanas',
      milestone: 'Construir um RAG que responde com base em dados próprios — da ingestão e chunking à recuperação relevante e avaliação de qualidade.',
      topics: [
        { id: 'embeddings-busca-vetorial', name: 'Embeddings e Busca Vetorial', desc: 'Represente texto como vetores e busque por similaridade semântica. É o motor de recuperação por trás de qualquer RAG.', xp: 55 },
        { id: 'chunking-ingestao', name: 'Chunking e Ingestão de Documentos', desc: 'Como quebrar documentos importa tanto quanto o modelo. Estratégias de chunking definem a qualidade da recuperação.', xp: 55 },
        { id: 'pipeline-rag', name: 'Pipeline RAG Completo', desc: 'Recuperação → montagem de contexto → geração. Monte o fluxo ponta a ponta e entenda cada etapa como um componente.', xp: 65 },
        { id: 'avaliacao-rag', name: 'Avaliação de Relevância e Qualidade', desc: 'Meça se o RAG recupera o contexto certo e responde bem. Sem avaliação, você está otimizando às cegas.', xp: 65 },
      ],
    },
    {
      id: 'p3',
      title: 'Agentes e Orquestração',
      level: 'Intermediário-Avançado',
      duration: '~4 semanas',
      milestone: 'Orquestrar um agente que usa ferramentas, mantém estado e cumpre tarefas em múltiplos passos com segurança e previsibilidade.',
      topics: [
        { id: 'tool-use', name: 'Tool Use e Function Calling', desc: 'Dê ao modelo ferramentas (funções) para agir no mundo. É o que transforma um chat em um agente capaz de executar tarefas.', xp: 65 },
        { id: 'loop-agente', name: 'O Loop do Agente: Planejar, Agir, Observar', desc: 'Agentes operam em ciclos. Entenda o loop e seus pontos de parada para evitar execuções infinitas ou caras.', xp: 70 },
        { id: 'multi-agente', name: 'Orquestração Multi-agente', desc: 'Divida problemas complexos entre agentes especializados e coordene-os. Padrões de orquestração e seus trade-offs.', xp: 75 },
        { id: 'memoria-estado', name: 'Memória e Estado da Conversa', desc: 'Gerencie contexto, histórico e memória de longo prazo. O estado é a parte mais subestimada da arquitetura de agentes.', xp: 70 },
      ],
    },
    {
      id: 'p4',
      title: 'Qualidade, Observabilidade e Produção',
      level: 'Avançado',
      duration: '~4 semanas',
      milestone: 'Operar um sistema de IA com confiança: avaliações automatizadas, tracing de prompts e tokens, guardrails de segurança e custo sob controle.',
      topics: [
        { id: 'evals', name: 'Evals: Testando Saídas de LLM', desc: 'Crie conjuntos de avaliação para medir qualidade de forma objetiva. Evals são os testes automatizados do mundo de IA.', xp: 70 },
        { id: 'observabilidade', name: 'Observabilidade de Prompts e Tokens', desc: 'Faça tracing de cada chamada: prompt, resposta, tokens, latência e custo. Você não opera o que não consegue enxergar.', xp: 70 },
        { id: 'guardrails-seguranca', name: 'Guardrails e Prompt Injection', desc: 'Proteja contra entradas maliciosas, vazamento de dados e prompt injection. Segurança é requisito, não opcional.', xp: 75 },
        { id: 'custo-caching', name: 'Otimização de Custo e Caching', desc: 'Reduza gastos com caching de prompts, roteamento de modelos e batches. Custo é uma restrição arquitetural de primeira classe.', xp: 75 },
      ],
    },
  ],
  badges: [
    {
      id: 'first-step',
      name: 'Primeiro Commit',
      icon: '🌱',
      desc: 'Você concluiu seu primeiro tópico. A jornada de arquitetura com IA começou.',
      rule: { type: 'topicsCompleted', count: 1 },
    },
    {
      id: 'warming-up',
      name: 'Aquecendo o Modelo',
      icon: '🔥',
      desc: 'Cinco tópicos concluídos. O contexto está carregando.',
      rule: { type: 'topicsCompleted', count: 5 },
    },
    {
      id: 'halfway',
      name: 'Metade do Pipeline',
      icon: '⚡',
      desc: 'Você completou metade dos tópicos do roadmap. Continue!',
      rule: { type: 'topicsCompleted', count: 10 },
    },
    {
      id: 'p0-done',
      name: 'Fundamentos Mapeados',
      icon: '🧭',
      desc: 'Fase 1 concluída. Você sabe quando e onde a IA entra na arquitetura.',
      rule: { type: 'phaseComplete', phaseId: 'p0' },
    },
    {
      id: 'p1-done',
      name: 'LLM Integrado',
      icon: '🔌',
      desc: 'Fase 2 concluída. Você integra modelos de forma confiável e estruturada.',
      rule: { type: 'phaseComplete', phaseId: 'p1' },
    },
    {
      id: 'p2-done',
      name: 'RAG Construído',
      icon: '📚',
      desc: 'Fase 3 concluída. Seus sistemas respondem com base em dados próprios.',
      rule: { type: 'phaseComplete', phaseId: 'p2' },
    },
    {
      id: 'p3-done',
      name: 'Agente no Comando',
      icon: '🤖',
      desc: 'Fase 4 concluída. Você orquestra agentes que usam ferramentas e mantêm estado.',
      rule: { type: 'phaseComplete', phaseId: 'p3' },
    },
    {
      id: 'p4-done',
      name: 'Pronto para Produção',
      icon: '🛡️',
      desc: 'Roadmap concluído! Você opera sistemas de IA com qualidade, segurança e custo sob controle.',
      rule: { type: 'phaseComplete', phaseId: 'p4' },
    },
  ],
};
