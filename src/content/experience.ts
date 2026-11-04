import type { Experience } from './types'

/**
 * Experiência profissional. Cada item segue o formato
 * "o que eu fiz → em que contexto → com que resultado", no lugar de listar tarefas.
 */
export const experiences: Experience[] = [
  {
    company: 'Grupo Mysa',
    current: true,
    role: { pt: 'Desenvolvedora Full Stack', en: 'Full Stack Developer' },
    period: { pt: 'jun/2024 – atual', en: 'Jun 2024 – Present' },
    domain: { pt: 'ERP · E-commerce nacional · Integrações', en: 'ERP · Nationwide e-commerce · Integrations' },
    highlights: {
      pt: [
        'Sustento e evoluo as integrações entre ERP, Salesforce e a plataforma nacional de e-commerce, tratando sincronização, validação e falhas de dados entre sistemas que atendem a operação comercial e as filiais.',
        'Modernizo serviços PHP/Laravel legados: rastreio incidentes de produção até a causa raiz através das fronteiras entre aplicações, refatoro regras de negócio e entrego correções sem interromper a operação.',
        'Participo do ciclo completo com produto e negócio: análise de requisitos, implementação, code review, releases em AWS e sustentação.',
        'Desenvolvo automações e componentes no Salesforce (Apex, LWC, Triggers e Flows) e interfaces em React e Vue com TypeScript.',
      ],
      en: [
        'Maintain and evolve the integrations between ERP, Salesforce, and the nationwide e-commerce platform, handling data synchronization, validation, and failures across systems that support commercial operations and branches.',
        'Modernize legacy PHP/Laravel services: trace production incidents to root cause across application boundaries, refactor business rules, and ship fixes without disrupting operations.',
        'Work across the full cycle with product and business teams: requirements analysis, implementation, code review, AWS releases, and production support.',
        'Build Salesforce automations and components (Apex, LWC, Triggers, Flows) and React and Vue interfaces with TypeScript.',
      ],
    },
    stack: ['PHP', 'Laravel', 'React', 'Vue', 'TypeScript', 'Salesforce', 'AWS'],
  },
  {
    company: 'Easy Process EHS-S / Triadd',
    role: { pt: 'Engenheira de Software', en: 'Software Engineer' },
    period: { pt: 'out/2024 – mai/2025', en: 'Oct 2024 – May 2025' },
    domain: { pt: 'Indústria · Mineração · Agronegócio', en: 'Industry · Mining · Agribusiness' },
    highlights: {
      pt: [
        'Desenvolvi aplicações usadas por Vale, Raízen, Albras, Tereos, FS Bioenergia e Keune em auditoria, gestão operacional, análise de riscos e coleta de dados.',
        'Modelei regras de negócio no banco com PL/SQL (procedures, triggers e validações) e escrevi consultas para relatórios e documentos operacionais.',
        'Integrei as aplicações a outros sistemas corporativos por APIs REST e resolvi incidentes em ambientes de clientes diferentes.',
      ],
      en: [
        'Built applications used by Vale, Raízen, Albras, Tereos, FS Bioenergia, and Keune for auditing, operational management, risk analysis, and data collection.',
        'Modeled business rules in the database with PL/SQL (procedures, triggers, validations) and wrote queries for operational reports and documents.',
        'Integrated the applications with other enterprise systems through REST APIs and resolved incidents across different client environments.',
      ],
    },
    stack: ['Oracle APEX', 'PL/SQL', 'Oracle Database', 'REST APIs'],
  },
  {
    company: 'ZR System',
    role: { pt: 'Desenvolvedora PHP', en: 'PHP Developer' },
    period: { pt: 'jun/2024 – set/2024', en: 'Jun 2024 – Sep 2024' },
    domain: { pt: 'Legado · MVC · Automação', en: 'Legacy · MVC · Automation' },
    highlights: {
      pt: [
        'Evoluí uma aplicação PHP legada de automação de processos operacionais, adicionando funcionalidades dentro da arquitetura MVC existente sem quebrar os fluxos já em uso.',
        'Mantive as consultas MySQL e as regras de negócio que conectam os processos automatizados aos dados.',
      ],
      en: [
        'Extended a legacy PHP application for operational process automation, adding features within the existing MVC architecture without breaking workflows already in use.',
        'Maintained the MySQL queries and business rules connecting the automated processes to their data.',
      ],
    },
    stack: ['PHP', 'MVC', 'MySQL'],
  },
  {
    company: 'Sicoob Central Cecremge',
    role: { pt: 'Desenvolvedora Full Stack', en: 'Full Stack Developer' },
    period: { pt: 'jun/2021 – jun/2024', en: 'Jun 2021 – Jun 2024' },
    domain: { pt: 'Sistemas financeiros · Cooperativas de crédito', en: 'Financial systems · Credit unions' },
    highlights: {
      pt: [
        'Desenvolvi APIs REST em Laravel para os sistemas das cooperativas financeiras, integrando aplicações web e serviços internos em ambiente Azure com SQL Server e MySQL.',
        'Modernizei sistemas legados em PHP e JavaScript com refatoração orientada a SOLID e testes automatizados (PHPUnit e Jest).',
        'Atuei na sustentação de sistemas financeiros: investigação de incidentes em produção, hotfixes e entregas com GitLab CI/CD, Docker e Linux.',
        'Construí interfaces em React/TypeScript e Vue e participei de soluções em C#/.NET, Node.js e Python.',
      ],
      en: [
        'Built Laravel REST APIs for the credit unions’ systems, integrating web applications and internal services in an Azure environment with SQL Server and MySQL.',
        'Modernized legacy PHP and JavaScript systems through SOLID-driven refactoring and automated tests (PHPUnit, Jest).',
        'Supported financial systems in production: incident investigation, hotfixes, and delivery with GitLab CI/CD, Docker, and Linux.',
        'Built React/TypeScript and Vue interfaces and contributed to C#/.NET, Node.js, and Python solutions.',
      ],
    },
    stack: ['PHP', 'Laravel', 'React', 'Vue', 'SQL Server', 'Azure', 'Docker'],
  },
  {
    company: 'Construtora Você',
    role: { pt: 'Analista de Sistemas', en: 'Systems Analyst' },
    period: { pt: 'mar/2018 – dez/2020', en: 'Mar 2018 – Dec 2020' },
    domain: { pt: 'Salesforce CRM · Processos comerciais', en: 'Salesforce CRM · Commercial processes' },
    highlights: {
      pt: [
        'Conduzi a adoção do Salesforce CRM nas equipes comerciais: levantamento de requisitos com usuários, documentação de processos e treinamento.',
        'Transformei dificuldades da operação em requisitos documentados e melhorias de fluxo, e validei dados financeiros de processos de crédito imobiliário.',
      ],
      en: [
        'Led Salesforce CRM adoption across sales teams: gathering requirements with users, documenting processes, and running training.',
        'Turned day-to-day operational problems into documented requirements and workflow improvements, and validated financial data for mortgage credit processes.',
      ],
    },
    stack: ['Salesforce', 'Fluig', 'TOTVS'],
  },
]
