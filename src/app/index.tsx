import { useEffect, useState } from 'react';
import descriptions from '../portfolio.json';
import './portfolio.css';
import { profilePhoto, resumeUrls } from '../portfolioAssets';

type Language = 'pt' | 'en';
const companies = ['Grupo Mysa', 'EasyProcess / Triadd', 'ZR System', 'Sicoob Central Cecremge', 'Construtora Você'];
const roles = {
  pt: ['Desenvolvedora Full Stack', 'Engenheira de Software', 'Desenvolvedora PHP', 'Desenvolvedora Full Stack', 'Analista de Sistemas'],
  en: ['Full Stack Developer', 'Software Engineer', 'PHP Developer', 'Full Stack Developer', 'Systems Analyst'],
};
const domains = {
  pt: ['ERP · E-commerce · Integrações', 'Indústria · Mineração · Agronegócio', 'Legado · MVC · Automação', 'Sistemas financeiros · APIs', 'Salesforce CRM · Processos'],
  en: ['ERP · E-commerce · Integrations', 'Industry · Mining · Agribusiness', 'Legacy systems · MVC · Automation', 'Financial systems · APIs', 'Salesforce CRM · Business processes'],
};
const skills = [
  ['Backend', 'PHP / Laravel', 'C# / .NET', 'Node.js', 'Python', 'REST APIs', 'MVC · SOLID'],
  ['Frontend', 'React', 'Vue', 'JavaScript', 'TypeScript', 'HTML · CSS', 'npm · Yarn'],
  ['Salesforce', 'Apex', 'LWC', 'Aura · Visualforce', 'Triggers · Flows', 'SOQL / SOSL'],
  ['Data & Cloud', 'Oracle APEX · PL/SQL', 'SQL Server · MySQL', 'AWS · Azure', 'Docker · Linux', 'GitLab CI/CD'],
];
const projects = [
  { name: 'GEMP', stack: 'Laravel · Vue · MySQL · Swagger', pt: 'Consulta e simulação de ofertas de crédito com API e interface web.', en: 'Credit-offer queries and simulations with an API and web interface.', repo: 'GEMP', type: 'Full Stack', symbol: '{ }' },
  { name: 'CRM', stack: 'Laravel · React · TypeScript', pt: 'Aplicação de gestão de processos com backend e frontend separados.', en: 'Process-management application with separate backend and frontend.', repo: 'crm', type: 'Enterprise', symbol: '↗' },
  { name: 'MPN', stack: 'Laravel · React · TypeScript', pt: 'Aplicação full stack com API Laravel e interface React/TypeScript.', en: 'Full stack application with a Laravel API and React/TypeScript interface.', repo: 'MPN', type: 'Full Stack', symbol: '⌘' },
  { name: 'CodeChronicles', stack: 'C# · ASP.NET Core · MVC', pt: 'Projeto em C# com ASP.NET Core MVC para explorar desenvolvimento web no ecossistema .NET.', en: 'C# project using ASP.NET Core MVC to explore web development in the .NET ecosystem.', repo: 'CodeChronicles', type: '.NET', symbol: '</>' },
];
const copy = {
  pt: {
    nav: ['Experiência', 'Projetos', 'Stack', 'Contato'], eyebrow: 'CAMILA TEIXEIRA / FULL STACK DEVELOPER',
    title: <>Conectando sistemas.<br /><em>Criando possibilidades.</em></>,
    intro: 'Transformo necessidades de negócio em software. Desenvolvimento Full Stack, modernização de legado e integrações para aplicações que fazem parte do dia a dia de empresas.',
    location: 'Belo Horizonte, Brasil', cv: 'Baixar currículo', view: 'Explorar projetos',
    about: 'Do contexto ao código.', aboutText: 'Minha experiência passa por sistemas financeiros, ERP, e-commerce nacional e aplicações para indústria, mineração e agronegócio. Trabalho em equipe e acompanho a solução da análise de requisitos à implementação, testes, implantação e sustentação.',
    labelExp: '01 / EXPERIÊNCIA', exp: 'Tecnologia em contextos reais.', current: 'ATUAL', details: 'Atuação e tecnologias',
    labelProjects: '02 / PROJETOS', projects: 'Ideias que viraram código.', projectNote: 'Uma seleção de projetos públicos. Explore a implementação e o estado atual de cada um no GitHub.', source: 'Explorar repositório', all: 'Todos os repositórios',
    labelSkills: '03 / STACK', skills: 'As ferramentas mudam. A visão conecta.', tooling: 'Também fazem parte do meu trabalho: Composer, Artisan, Eloquent ORM, Jest, PHPUnit, Git, Figma, Zeev BPMS, Fluig, TOTVS e PVI.',
    education: 'Aprendizado contínuo', degrees: ['Análise e Desenvolvimento de Sistemas — Tecnólogo, Unibta', 'Processos Gerenciais — Tecnólogo, Estácio', 'Ciência da Computação — graduação em andamento'], training: 'Engenharia de Software Moderna — UFMG · Trilha Salesforce Admin / App Builder',
    labelContact: '04 / CONTATO', contact: 'Vamos construir algo juntos?', contactText: 'Aberta a conversas sobre tecnologia, projetos e oportunidades de colaboração.', email: 'Vamos conversar', footer: 'Contexto. Código. Colaboração.', language: 'Idioma do site', earlier: 'Experiência anterior: estágio na Caixa Econômica Federal (2016–2017).',
  },
  en: {
    nav: ['Experience', 'Projects', 'Stack', 'Contact'], eyebrow: 'CAMILA TEIXEIRA / FULL STACK DEVELOPER',
    title: <>Connecting systems.<br /><em>Creating possibilities.</em></>,
    intro: 'I turn business needs into software. Full stack development, legacy modernization, and integrations for applications that support everyday business operations.',
    location: 'Belo Horizonte, Brazil', cv: 'Download résumé', view: 'Explore projects',
    about: 'From context to code.', aboutText: 'My background spans financial systems, ERP, nationwide e-commerce, and applications for industry, mining, and agribusiness. I collaborate with teams across requirements analysis, implementation, testing, deployment, and production support.',
    labelExp: '01 / EXPERIENCE', exp: 'Technology in real business contexts.', current: 'CURRENT', details: 'Responsibilities and technologies',
    labelProjects: '02 / PROJECTS', projects: 'Ideas turned into code.', projectNote: 'A selection of public projects. Explore the implementation and current state of each one on GitHub.', source: 'Explore repository', all: 'All repositories',
    labelSkills: '03 / STACK', skills: 'Tools evolve. Perspective connects.', tooling: 'Additional experience: Composer, Artisan, Eloquent ORM, Jest, PHPUnit, Git, Figma, Zeev BPMS, Fluig, TOTVS, and PVI.',
    education: 'Always learning', degrees: ['Systems Analysis and Development — Technologist degree, Unibta', 'Business Process Management — Technologist degree, Estácio', 'Computer Science — degree in progress'], training: 'Modern Software Engineering — UFMG · Salesforce Admin / App Builder learning track',
    labelContact: '04 / CONTACT', contact: 'Let’s build something together.', contactText: 'Open to conversations about technology, projects, and opportunities to collaborate.', email: 'Let’s talk', footer: 'Context. Code. Collaboration.', language: 'Website language', earlier: 'Earlier experience: internship at Caixa Econômica Federal (2016–2017).',
  },
};

export function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try { return window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt'; } catch { return 'pt'; }
  });
  const text = copy[language];
  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    document.title = 'Camila Teixeira | Full Stack Developer';
    try { window.localStorage.setItem('portfolio-language', language); } catch { /* Optional storage. */ }
  }, [language]);
  return (
    <div className='portfolio'>
      <a className='skip-link' href='#main'>{language === 'pt' ? 'Pular para o conteúdo' : 'Skip to content'}</a>
      <header className='site-header wrap'>
        <a className='wordmark' href='#home' aria-label='Camila Teixeira — home'>camila<span> /</span></a>
        <nav aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          {['experience', 'projects', 'technologies', 'contact'].map((id, i) => <a key={id} href={'#' + id}>{text.nav[i]}</a>)}
        </nav>
        <div className='language-switch' role='group' aria-label={text.language}>
          {(['pt', 'en'] as Language[]).map(lang => <button key={lang} type='button' aria-pressed={language === lang} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>)}
        </div>
      </header>
      <main id='main'>
        <section id='home' className='hero wrap'>
          <div className='hero-content'>
            <p className='eyebrow'><span className='red-dot' />{text.eyebrow}</p>
            <h1>{text.title}</h1>
            <p className='hero-intro'>{text.intro}</p>
            <div className='hero-actions'>
              <a className='button primary' href='#projects'>{text.view}<span aria-hidden='true'>↗</span></a>
              <a className='button quiet' href={resumeUrls[language]} download={'Camila_Teixeira_CV_' + language.toUpperCase() + '.pdf'}>{text.cv}<span aria-hidden='true'>↓</span></a>
            </div>
            <p className='location'><span aria-hidden='true'>◎</span> {text.location}</p>
          </div>
          <div className='portrait-card'>
            <span className='portrait-cross' aria-hidden='true'>+</span>
            <img src={profilePhoto} alt='Camila Teixeira' />
            <div className='portrait-caption'><span>Camila Teixeira</span><small>Full Stack Developer</small></div>
            <span className='portrait-tag'>BUILD. CONNECT. EVOLVE.</span>
          </div>
        </section>
        <div className='stack-ribbon' aria-label='PHP/Laravel, React, Salesforce, Oracle APEX, AWS, Azure'><div className='wrap'>PHP / LARAVEL<span>+</span>REACT<span>+</span>SALESFORCE<span>+</span>ORACLE APEX<span>+</span>AWS / AZURE</div></div>
        <section className='wrap about-grid'><h2>{text.about}</h2><p>{text.aboutText}</p></section>
        <section id='experience' className='wrap section'>
          <p className='eyebrow'>{text.labelExp}</p><h2>{text.exp}</h2>
          <div className='experience-list'>
            {companies.map((company, i) => <article className='experience' key={company}>
              <div className='experience-index'>0{i + 1}</div>
              <div className='experience-title'><h3>{company} {i === 0 && <span className='current-tag'>{text.current}</span>}</h3><p>{roles[language][i]}</p><small>{domains[language][i]}</small></div>
              <details><summary>{text.details}<span aria-hidden='true'>+</span></summary><div className='experience-description'>{descriptions[language][i].split(/\n+/).map((paragraph, j) => <p key={j}>{paragraph}</p>)}</div></details>
            </article>)}
          </div>
          <p className='muted earlier'>{text.earlier}</p>
        </section>
        <section id='projects' className='projects-section'><div className='wrap section'>
          <p className='eyebrow'>{text.labelProjects}</p><h2>{text.projects}</h2><p className='section-intro'>{text.projectNote}</p>
          <div className='project-grid'>{projects.map((project, i) => <article className='project-card' key={project.repo}>
            <div className={'project-art art-' + i}><span className='project-number'>/ 0{i + 1}</span><span className='project-symbol' aria-hidden='true'>{project.symbol}</span><span className='project-type'>{project.type}</span></div>
            <div className='project-body'><h3>{project.name}</h3><p>{project[language]}</p><p className='project-stack'>{project.stack}</p>
            <a href={'https://github.com/acamilateixeira/' + project.repo} target='_blank' rel='noopener noreferrer'>{text.source}<span aria-hidden='true'>↗</span></a></div>
          </article>)}</div>
          <a className='text-link' href='https://github.com/acamilateixeira?tab=repositories' target='_blank' rel='noopener noreferrer'>{text.all} <span aria-hidden='true'>↗</span></a>
        </div></section>
        <section id='technologies' className='wrap section'>
          <p className='eyebrow'>{text.labelSkills}</p><h2>{text.skills}</h2>
          <div className='skills-grid'>{skills.map(group => <div className='skill-group' key={group[0]}><h3>{group[0]}</h3><ul>{group.slice(1).map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
          <p className='muted tooling'>{text.tooling}</p>
          <div className='education'><h3>{text.education}</h3><div><ul>{text.degrees.map(degree => <li key={degree}>{degree}</li>)}</ul><p>{text.training}</p></div></div>
        </section>
        <section id='contact' className='contact-section'><div className='wrap'>
          <p className='eyebrow'>{text.labelContact}</p><h2>{text.contact}</h2><p>{text.contactText}</p>
          <div className='contact-actions'><a className='button light' href='mailto:camila.teixeira42@hotmail.com'>{text.email}<span aria-hidden='true'>↗</span></a><a href='https://www.linkedin.com/in/acamilateixeira/' target='_blank' rel='noopener noreferrer'>LinkedIn ↗</a><a href='https://github.com/acamilateixeira' target='_blank' rel='noopener noreferrer'>GitHub ↗</a></div>
        </div></section>
      </main>
      <footer className='wrap site-footer'><a className='wordmark' href='#home'>ct<span>.</span></a><p>{text.footer}</p><a href='#home' aria-label={language === 'pt' ? 'Voltar ao início' : 'Back to top'}>↑</a></footer>
    </div>
  );
}
