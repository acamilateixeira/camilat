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
        'Desenvolvo, mantenho e evoluo sistemas corporativos de grande porte (ERP, e-commerce nacional e gestão de filiais), com foco em modernização de legado, integrações e sustentação em produção.',
        'Implemento regras de negócio, APIs REST e serviços de back-end em PHP/Laravel, JavaScript e TypeScript, integrando sistemas e evoluindo funcionalidades existentes.',
        'Desenvolvo e integro soluções Salesforce com Apex, LWC, Triggers, Flows, SOQL e SOSL, conectando processos comerciais, ERP e e-commerce, em ambiente AWS.',
        'Analiso requisitos, defino soluções técnicas, investigo falhas, depuro e refatoro considerando desempenho, segurança, manutenibilidade e continuidade da operação.',
        'Atuo no ciclo completo com equipes multidisciplinares: entendimento do negócio, implementação, versionamento com Git, validação, deploy e acompanhamento em produção.',
      ],
      en: [
        'Build, maintain, and evolve large enterprise systems (ERP, nationwide e-commerce, and branch management), focusing on legacy modernization, integrations, and production support.',
        'Implement business rules, REST APIs, and back-end services in PHP/Laravel, JavaScript, and TypeScript, integrating systems and evolving existing features.',
        'Build and integrate Salesforce solutions with Apex, LWC, Triggers, Flows, SOQL, and SOSL, connecting sales processes, ERP, and e-commerce, on AWS.',
        'Analyze requirements, design technical solutions, investigate failures, debug, and refactor with performance, security, maintainability, and business continuity in mind.',
        'Work across the full cycle with cross-functional teams: understanding the business, implementation, Git versioning, validation, deployment, and production monitoring.',
      ],
    },
    stack: ['PHP', 'Laravel', 'TypeScript', 'React', 'Vue', 'Node.js', 'Salesforce', 'AWS'],
  },
  {
    company: 'Easy Process EHS-S / Triadd',
    role: { pt: 'Engenheira de Software', en: 'Software Engineer' },
    period: { pt: 'out/2024 – mai/2025', en: 'Oct 2024 – May 2025' },
    domain: { pt: 'Indústria · Mineração · Agronegócio', en: 'Industry · Mining · Agribusiness' },
    highlights: {
      pt: [
        'Desenvolvi e evoluí sistemas corporativos de gestão operacional, auditoria, controle de processos e integridade das informações para clientes como Albras, Raízen, Tereos, FS Bioenergia, Keune e Vale.',
        'Construí aplicações em Oracle APEX, SQL e PL/SQL: modelagem e consultas, procedures, triggers, validações e regras de negócio para processos operacionais complexos.',
        'Criei formulários, relatórios gerenciais, extrações de dados e documentos operacionais, com integrações por APIs REST a outros sistemas corporativos.',
        'Mantive e investiguei falhas em aplicações de ambientes operacionais críticos, preservando consistência dos dados, segurança e continuidade dos processos.',
      ],
      en: [
        'Built and evolved enterprise systems for operational management, auditing, process control, and data integrity for clients such as Albras, Raízen, Tereos, FS Bioenergia, Keune, and Vale.',
        'Built Oracle APEX, SQL, and PL/SQL applications: data modeling and queries, procedures, triggers, validations, and business rules for complex operational processes.',
        'Created forms, management reports, data extracts, and operational documents, integrating with other enterprise systems through REST APIs.',
        'Maintained and troubleshot applications in critical operational environments, preserving data consistency, security, and process continuity.',
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
        'Desenvolvi e evoluí um sistema legado em PHP com arquitetura MVC para automação de processos operacionais, integrando apresentação, regra de negócio e persistência.',
        'Mantive as operações em MySQL (consultas, manipulação de dados e funcionalidades dos processos automatizados) e organizei o código preservando o que já estava em uso.',
        'Versionei com Git e organizei as entregas com práticas ágeis.',
      ],
      en: [
        'Built and evolved a legacy PHP system with an MVC architecture for operational process automation, connecting presentation, business logic, and persistence.',
        'Maintained the MySQL operations (queries, data handling, and automated-process features) and reorganized code while keeping existing workflows intact.',
        'Used Git for version control and agile practices to plan and track deliveries.',
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
        'Desenvolvi, mantive e modernizei sistemas corporativos e financeiros usados por cooperativas de crédito, com soluções full stack, integrações e sustentação em produção.',
        'Construí serviços de back-end e APIs REST em PHP/Laravel, com experiência em C#/.NET, Node.js e Python, e interfaces em React, TypeScript e JavaScript.',
        'Trabalhei com Microsoft Azure, SQL Server e MySQL, e modernizei legados em PHP e JavaScript com refatoração, correção de bugs e hotfixes.',
        'Apliquei SOLID, código modular e testes com PHPUnit e Jest; participei de CI/CD no GitLab, code review, Docker, Linux, deploy e investigação de incidentes.',
        'Atuei em times ágeis (Scrum, Trello, Planner e GitLab Issue Boards) do planejamento técnico à entrega.',
      ],
      en: [
        'Built, maintained, and modernized enterprise and financial systems used by credit unions, delivering full stack solutions, integrations, and production support.',
        'Built back-end services and REST APIs in PHP/Laravel, with experience in C#/.NET, Node.js, and Python, and interfaces in React, TypeScript, and JavaScript.',
        'Worked with Microsoft Azure, SQL Server, and MySQL, and modernized legacy PHP and JavaScript systems through refactoring, bug fixes, and hotfixes.',
        'Applied SOLID, modular code, and testing with PHPUnit and Jest; took part in GitLab CI/CD, code review, Docker, Linux, deployment, and incident investigation.',
        'Worked in agile teams (Scrum, Trello, Planner, GitLab Issue Boards) from technical planning to delivery.',
      ],
    },
    stack: ['PHP', 'Laravel', 'C#', '.NET', 'React', 'TypeScript', 'SQL Server', 'Azure', 'Docker'],
  },
  {
    company: 'Construtora Você',
    role: { pt: 'Analista de Sistemas', en: 'Systems Analyst' },
    period: { pt: 'mar/2018 – dez/2020', en: 'Mar 2018 – Dec 2020' },
    domain: { pt: 'Salesforce CRM · Processos comerciais', en: 'Salesforce CRM · Commercial processes' },
    highlights: {
      pt: [
        'Participei da implantação e consolidação do Salesforce como plataforma de processos comerciais, padronizando fluxos e organizando informações.',
        'Analisei requisitos e problemas nos processos, apoiei a configuração de funcionalidades e validei as soluções com os usuários.',
        'Dei suporte funcional, documentei processos e treinei colaboradores nos sistemas corporativos.',
        'Analisei e validei informações financeiras de processos de crédito imobiliário em plataformas integradas à operação.',
      ],
      en: [
        'Helped implement and consolidate Salesforce as the platform for sales processes, standardizing workflows and organizing information.',
        'Analyzed requirements and process problems, supported feature configuration, and validated solutions with users.',
        'Provided functional support, documented processes, and trained staff on enterprise systems.',
        'Analyzed and validated financial information for mortgage credit processes on platforms integrated with operations.',
      ],
    },
    stack: ['Salesforce', 'Fluig', 'TOTVS', 'PVI'],
  },
]
