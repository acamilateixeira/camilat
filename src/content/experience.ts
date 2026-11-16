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
        'Sustento e evoluo as integrações entre ERP, Salesforce e a plataforma nacional de e-commerce que atendem a operação comercial e as filiais: sincronização, validação e tratamento de falhas de dados entre os sistemas.',
        'Desenvolvo no Salesforce automações e componentes (Apex, Triggers, LWC, Flows, SOQL/SOSL) que ligam o processo comercial ao ERP e ao e-commerce, com integrações por APIs REST e MuleSoft.',
        'Modernizo serviços PHP/Laravel legados: rastreio incidentes de produção até a causa raiz, atravessando a fronteira entre aplicações, refatoro regras de negócio e entrego correções sem interromper a operação.',
        'Construo interfaces em React e Vue com TypeScript e participo do ciclo completo com produto e negócio: requisitos, implementação, code review, releases na AWS e sustentação.',
      ],
      en: [
        'Maintain and evolve the integrations between an ERP, Salesforce, and a nationwide e-commerce platform that serve sales operations and branches: data synchronization, validation, and handling of failures between systems.',
        'Build Salesforce automations and components (Apex, Triggers, LWC, Flows, SOQL/SOSL) that connect the sales process to the ERP and e-commerce, integrating through REST APIs and MuleSoft.',
        'Modernize legacy PHP/Laravel services: trace production incidents to the root cause across application boundaries, refactor business rules, and ship fixes without stopping operations.',
        'Build React and Vue interfaces in TypeScript and work across the full cycle with product and business teams: requirements, implementation, code review, AWS releases, and production support.',
      ],
    },
    stack: ['PHP', 'Laravel', 'Salesforce', 'Apex', 'LWC', 'TypeScript', 'React', 'Vue', 'Node.js', 'AWS'],
  },
  {
    company: 'Easy Process EHS-S / Triadd',
    role: { pt: 'Engenheira de Software', en: 'Software Engineer' },
    period: { pt: 'out/2024 – mai/2025', en: 'Oct 2024 – May 2025' },
    domain: { pt: 'Indústria · Mineração · Agronegócio', en: 'Industry · Mining · Agribusiness' },
    highlights: {
      pt: [
        'Desenvolvi sistemas de auditoria, gestão operacional, análise de risco e coleta de dados usados por Vale, Raízen, Albras, Tereos, FS Bioenergia e Keune.',
        'Modelei regras de negócio no banco com Oracle APEX, SQL e PL/SQL (procedures, triggers e validações) para processos operacionais em que dado inconsistente vira problema na operação.',
        'Criei formulários, relatórios gerenciais e documentos operacionais, como crachás de acesso a áreas industriais, integrei as aplicações a outros sistemas por APIs REST e resolvi incidentes em ambientes de clientes diferentes.',
      ],
      en: [
        'Built auditing, operational management, risk analysis, and data collection systems used by Vale, Raízen, Albras, Tereos, FS Bioenergia, and Keune.',
        'Modeled business rules in the database with Oracle APEX, SQL, and PL/SQL (procedures, triggers, and validations) for operational processes where inconsistent data becomes an operational problem.',
        'Built forms, management reports, and operational documents such as access badges for industrial areas, integrated the applications with other systems through REST APIs, and resolved incidents across different client environments.',
      ],
    },
    stack: ['Oracle APEX', 'PL/SQL', 'Oracle Database', 'REST APIs', 'Git'],
  },
  {
    company: 'ZR System',
    role: { pt: 'Desenvolvedora PHP', en: 'PHP Developer' },
    period: { pt: 'jun/2024 – set/2024', en: 'Jun 2024 – Sep 2024' },
    domain: { pt: 'Legado · MVC · Automação', en: 'Legacy · MVC · Automation' },
    highlights: {
      pt: [
        'Evoluí um sistema PHP legado de automação de processos operacionais (MVC e MySQL), adicionando funcionalidades sem quebrar os fluxos que já estavam em uso.',
        'Mantive as consultas e as regras de negócio que ligam os processos automatizados aos dados, com versionamento em Git e entregas em ciclos ágeis.',
      ],
      en: [
        'Evolved a legacy PHP system for operational process automation (MVC and MySQL), adding features without breaking the workflows already in use.',
        'Maintained the queries and business rules that connect the automated processes to the data, using Git and agile delivery cycles.',
      ],
    },
    stack: ['PHP', 'MVC', 'MySQL', 'Git'],
  },
  {
    company: 'Sicoob Central Cecremge',
    role: { pt: 'Desenvolvedora Full Stack', en: 'Full Stack Developer' },
    period: { pt: 'jun/2021 – jun/2024', en: 'Jun 2021 – Jun 2024' },
    domain: { pt: 'Sistemas financeiros · Cooperativas de crédito', en: 'Financial systems · Credit unions' },
    highlights: {
      pt: [
        'Desenvolvi APIs REST em Laravel para os sistemas usados pelas cooperativas de crédito, integrando aplicações web e serviços internos no Azure, com SQL Server e MySQL.',
        'Modernizei sistemas legados em PHP e JavaScript com refatoração orientada a SOLID e testes automatizados (PHPUnit e Jest).',
        'Sustentei sistemas financeiros em produção: investigação de incidentes, hotfixes e entregas por GitLab CI/CD com Docker e Linux, em times Scrum.',
        'Construí interfaces em React/TypeScript e Vue e contribuí em serviços C#/.NET, Node.js e Python.',
      ],
      en: [
        'Built Laravel REST APIs for the systems used by credit unions, integrating web applications and internal services on Azure with SQL Server and MySQL.',
        'Modernized legacy PHP and JavaScript systems through SOLID-oriented refactoring and automated tests (PHPUnit and Jest).',
        'Supported financial systems in production: incident investigation, hotfixes, and releases through GitLab CI/CD with Docker and Linux, in Scrum teams.',
        'Built React/TypeScript and Vue interfaces and contributed to C#/.NET, Node.js, and Python services.',
      ],
    },
    stack: ['PHP', 'Laravel', 'SQL Server', 'MySQL', 'Azure', 'React', 'TypeScript', 'Vue', 'PHPUnit', 'Jest', 'GitLab CI'],
  },
  {
    company: 'Construtora Você',
    role: { pt: 'Analista de Sistemas', en: 'Systems Analyst' },
    period: { pt: 'mar/2018 – dez/2020', en: 'Mar 2018 – Dec 2020' },
    domain: { pt: 'Salesforce CRM · Processos comerciais', en: 'Salesforce CRM · Sales processes' },
    highlights: {
      pt: [
        'Conduzi a adoção do Salesforce CRM nas equipes comerciais: levantamento de requisitos com os usuários, apoio à configuração, documentação de processos e treinamento.',
        'Transformei problemas da operação em requisitos e melhorias de fluxo, e validei dados financeiros de processos de crédito imobiliário (Fluig, TOTVS, PVI).',
      ],
      en: [
        'Led the adoption of Salesforce CRM by the sales teams: gathering requirements with users, supporting configuration, documenting processes, and training staff.',
        'Turned operational problems into requirements and workflow improvements, and validated financial data in mortgage credit processes (Fluig, TOTVS, PVI).',
      ],
    },
    stack: ['Salesforce', 'Fluig', 'TOTVS', 'PVI'],
  },
]
