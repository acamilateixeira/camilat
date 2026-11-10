import type { Localized, SkillGroup } from './types'

export const contact = {
  email: 'camila.teixeira42@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/acamilateixeira/',
  github: 'https://github.com/acamilateixeira',
}

export const resumes: Localized = {
  pt: 'files/Camila_Teixeira_CV_PT.pdf',
  en: 'files/Camila_Teixeira_CV_EN.pdf',
}

export const skills: SkillGroup[] = [
  {
    title: { pt: 'Back-end', en: 'Back end' },
    items: {
      pt: ['PHP 8 · Laravel (Eloquent, filas, Sanctum)', 'Node.js (Fastify)', 'Go (goroutines, context.Context, WebAssembly)', 'Rust · C# · .NET · Python', 'APIs REST · OpenAPI/Swagger', 'Insomnia · Postman'],
      en: ['PHP 8 · Laravel (Eloquent, queues, Sanctum)', 'Node.js (Fastify)', 'Go (goroutines, context.Context, WebAssembly)', 'Rust · C# · .NET · Python', 'REST APIs · OpenAPI/Swagger', 'Insomnia · Postman'],
    },
  },
  {
    title: { pt: 'Confiabilidade', en: 'Reliability' },
    items: {
      pt: ['Transações · SELECT … FOR UPDATE', 'Locks distribuídos no Redis', 'Idempotência (Idempotency-Key)', 'Transactional outbox e inbox · RabbitMQ', 'Compensação de falhas parciais', 'Timeouts, cancelamento e respostas parciais', 'Isolamento multi-tenant'],
      en: ['Transactions · SELECT … FOR UPDATE', 'Redis distributed locks', 'Idempotency (Idempotency-Key)', 'Transactional outbox & inbox · RabbitMQ', 'Compensation for partial failures', 'Timeouts, cancellation & partial responses', 'Multi-tenant isolation'],
    },
  },
  {
    title: { pt: 'Dados', en: 'Data' },
    items: {
      pt: ['MySQL · SQL Server', 'PostgreSQL (Row Level Security)', 'Oracle · PL/SQL · Oracle APEX', 'Redis · SQLite', 'Modelagem e otimização de consultas'],
      en: ['MySQL · SQL Server', 'PostgreSQL (Row Level Security)', 'Oracle · PL/SQL · Oracle APEX', 'Redis · SQLite', 'Data modeling & query optimization'],
    },
  },
  {
    title: { pt: 'Salesforce', en: 'Salesforce' },
    items: {
      pt: ['Apex · Triggers', 'Lightning Web Components · Aura', 'Visualforce', 'Flows · Process Builder', 'SOQL · SOSL', 'Sales Cloud', 'MuleSoft'],
      en: ['Apex · Triggers', 'Lightning Web Components · Aura', 'Visualforce', 'Flows · Process Builder', 'SOQL · SOSL', 'Sales Cloud', 'MuleSoft'],
    },
  },
  {
    title: { pt: 'Front-end e mobile', en: 'Front end & mobile' },
    items: {
      pt: ['TypeScript · JavaScript', 'React · Vue 3 · Angular', 'React Native (Expo)', 'HTML · CSS · Tailwind', 'Material-UI · Chart.js', 'Vite', 'WordPress'],
      en: ['TypeScript · JavaScript', 'React · Vue 3 · Angular', 'React Native (Expo)', 'HTML · CSS · Tailwind', 'Material-UI · Chart.js', 'Vite', 'WordPress'],
    },
  },
  {
    title: { pt: 'Testes e qualidade', en: 'Testing & quality' },
    items: {
      pt: ['PHPUnit · Pest (incl. arquitetura)', 'Jest · Vitest · node:test', 'go test -race', 'Testes de concorrência (MySQL) e de RLS (PostgreSQL)', 'Larastan/PHPStan nível 8 · Pint · ESLint'],
      en: ['PHPUnit · Pest (incl. architecture)', 'Jest · Vitest · node:test', 'go test -race', 'Concurrency tests (MySQL) & RLS tests (PostgreSQL)', 'Larastan/PHPStan level 8 · Pint · ESLint'],
    },
  },
  {
    title: { pt: 'DevOps e nuvem', en: 'DevOps & cloud' },
    items: {
      pt: ['Docker · Docker Compose', 'CI/CD (GitHub Actions, GitLab CI)', 'Git · Linux', 'AWS · Azure', 'Supabase (Auth, Realtime, Edge Functions)', 'k6 · testes de capacidade com cgroups'],
      en: ['Docker · Docker Compose', 'CI/CD (GitHub Actions, GitLab CI)', 'Git · Linux', 'AWS · Azure', 'Supabase (Auth, Realtime, Edge Functions)', 'k6 · capacity testing with cgroups'],
    },
  },
  {
    title: { pt: 'Práticas', en: 'Practices' },
    items: {
      pt: ['SOLID · Clean Code', 'Camadas · portas e adaptadores', 'Máquinas de estado', 'ADRs', 'Ágil · Scrum · Figma', 'IA (Claude) com revisão por testes e diff'],
      en: ['SOLID · Clean Code', 'Layers · ports & adapters', 'State machines', 'ADRs', 'Agile · Scrum · Figma', 'AI (Claude) validated by tests & diff review'],
    },
  },
]

export const copy = {
  pt: {
    nav: ['Experiência', 'Projetos', 'Stack', 'Contato'],
    skip: 'Pular para o conteúdo',
    navLabel: 'Navegação principal',
    language: 'Idioma do site',
    eyebrow: 'Camila Teixeira / Software Engineer · Back-end e Full Stack',
    titleTop: 'Integrações que funcionam.',
    titleBottom: 'Legado que evolui.',
    intro: 'Desenvolvedora back-end e full stack com 5 anos em sistemas financeiros, ERP, e-commerce nacional e aplicações para indústria e mineração. PHP/Laravel e Node.js no back-end, React, Vue e TypeScript no front-end, e integrações entre ERP, Salesforce e e-commerce. Trabalho do requisito à produção, incluindo modernização de legado e sustentação. Nos projetos públicos, aplico controle de concorrência, idempotência, transactional outbox com RabbitMQ, Row Level Security no PostgreSQL e Go com context.Context, com testes que reproduzem a falha antes da correção.',
    location: 'Belo Horizonte, Brasil · híbrido ou remoto',
    cv: 'Baixar currículo',
    view: 'Ver projetos',
    ribbon: ['PHP / LARAVEL', 'NODE.JS / REACT', 'GO', 'INTEGRAÇÕES', 'MENSAGERIA', 'AWS / AZURE'],
    aboutTitle: 'Como eu trabalho.',
    principles: [
      { title: 'Consistência antes de velocidade', text: 'Em sistema financeiro e de ERP, um dado errado custa mais que uma entrega atrasada. Transação, idempotência e lock no lugar certo vêm primeiro.' },
      { title: 'Legado com respeito', text: 'Modernizo sistemas que estão rodando: entendo a regra que o código antigo protege antes de mudar, e entrego em passos pequenos.' },
      { title: 'Decisão documentada', text: 'Trade-offs viram ADR e PR bem descrito. Quem chega depois entende o porquê, não só o quê.' },
      { title: 'Do requisito à produção', text: 'Converso com o negócio, implemento, reviso código, acompanho o deploy e investigo o incidente quando ele aparece.' },
    ],
    labelExp: '01 / Experiência',
    exp: 'Sistemas reais, operação real.',
    current: 'ATUAL',
    details: 'Principais entregas',
    earlier: 'Antes: estágio na Caixa Econômica Federal (2016–2017).',
    labelProjects: '02 / Projetos',
    projects: 'Projetos, da necessidade à arquitetura.',
    projectNote: 'Um comparador de crédito em Go, uma API de viagens, um app para a operação de corridas de uma prefeitura, um controlador de lives, um sorteador em Angular e um medidor de uso em Rust. Cada caso mostra o problema e as decisões que deram forma à solução.',
    featured: 'Destaque',
    source: 'Ver código e documentação',
    demo: 'Abrir demo',
    diagram: 'Diagrama ilustrativo',
    privateProject: 'Estudo de caso público · código privado',
    all: 'Todos os repositórios',
    labelSkills: '03 / Stack',
    skills: 'Ferramentas a serviço do problema.',
    education: 'Formação',
    degrees: ['Análise e Desenvolvimento de Sistemas — Unibta (2021–2023)', 'Processos Gerenciais — Estácio (2024–2025)', 'Ciência da Computação — em andamento'],
    training: 'Engenharia de Software Moderna — UFMG · Trilha Salesforce Admin / App Builder · Inglês avançado',
    labelContact: '04 / Contato',
    contact: 'Vamos conversar?',
    contactText: 'Aberta a oportunidades como desenvolvedora back-end ou full stack (PHP/Laravel, Node.js, React).',
    email: 'Enviar e-mail',
    footer: 'Contexto. Código. Consistência.',
    top: 'Voltar ao início',
  },
  en: {
    nav: ['Experience', 'Projects', 'Stack', 'Contact'],
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    language: 'Website language',
    eyebrow: 'Camila Teixeira / Software Engineer · Back end & Full Stack',
    titleTop: 'Integrations that work.',
    titleBottom: 'Legacy that evolves.',
    intro: 'Back-end and full stack developer with 5 years in financial systems, ERP, nationwide e-commerce, and applications for industry and mining. PHP/Laravel and Node.js on the back end, React, Vue, and TypeScript on the front end, and integrations between ERP, Salesforce, and e-commerce. I work from requirements to production, including legacy modernization and production support. In my public projects I apply concurrency control, idempotency, a transactional outbox with RabbitMQ, PostgreSQL Row Level Security, and Go with context.Context, with tests that reproduce a failure before the fix.',
    location: 'Belo Horizonte, Brazil · hybrid, remote, or open to relocation',
    cv: 'Download résumé',
    view: 'See projects',
    ribbon: ['PHP / LARAVEL', 'NODE.JS / REACT', 'GO', 'INTEGRATIONS', 'MESSAGING', 'AWS / AZURE'],
    aboutTitle: 'How I work.',
    principles: [
      { title: 'Consistency before speed', text: 'In financial and ERP systems, wrong data costs more than a late delivery. Transactions, idempotency, and locks in the right place come first.' },
      { title: 'Respect for legacy', text: 'I modernize systems that are running: I understand the rule old code protects before changing it, and I ship in small steps.' },
      { title: 'Documented decisions', text: 'Trade-offs become ADRs and well-described PRs. Whoever comes next understands the why, not just the what.' },
      { title: 'Requirements to production', text: 'I talk to the business, implement, review code, follow the deploy, and investigate the incident when it shows up.' },
    ],
    labelExp: '01 / Experience',
    exp: 'Real systems, real operations.',
    current: 'CURRENT',
    details: 'Key contributions',
    earlier: 'Earlier: internship at Caixa Econômica Federal (2016–2017).',
    labelProjects: '02 / Projects',
    projects: 'Projects, from problem to architecture.',
    projectNote: 'A credit comparison tool in Go, a travel API, a municipal ride app, a livestream controller, an Angular draw tool, and a usage meter in Rust. Each case covers the problem and the decisions that shaped the solution.',
    featured: 'Featured',
    source: 'View code and documentation',
    demo: 'Open demo',
    diagram: 'Illustrative diagram',
    privateProject: 'Public case study · private code',
    all: 'All repositories',
    labelSkills: '03 / Stack',
    skills: 'Tools in service of the problem.',
    education: 'Education',
    degrees: ['Systems Analysis and Development — Unibta (2021–2023)', 'Business Process Management — Estácio (2024–2025)', 'Computer Science — in progress'],
    training: 'Modern Software Engineering — UFMG · Salesforce Admin / App Builder track · Advanced English',
    labelContact: '04 / Contact',
    contact: 'Let’s talk?',
    contactText: 'Open to back-end or full stack roles (PHP/Laravel, Node.js, React), remote or with relocation.',
    email: 'Send an email',
    footer: 'Context. Code. Consistency.',
    top: 'Back to top',
  },
} as const

export type Copy = (typeof copy)['pt']
