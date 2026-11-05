# camilat — portfólio

Portfólio de **Camila Teixeira**, Software Engineer PHP/Laravel.
Publicado em **https://acamilateixeira.github.io/camilat/**

**Stack:** Vue 3 (Composition API, `<script setup>`) · TypeScript estrito · Vite · Vitest · ESLint · GitHub Actions

## Rodar localmente

```bash
npm install
npm run dev
```

## Estrutura

```
src/
├── content/        textos PT/EN, experiências e projetos (fonte única do conteúdo)
├── composables/    useLanguage: idioma compartilhado entre componentes
├── components/     uma seção do site por componente
└── __tests__/      testes de componente e de paridade de conteúdo PT/EN
```

O conteúdo fica separado dos componentes: atualizar uma experiência ou um projeto
é editar um arquivo em `src/content/`, e o teste de paridade falha se um dos
idiomas ficar para trás.

## CI/CD

| Workflow | Quando | O que faz |
|---|---|---|
| `ci.yml` | push e PR | ESLint, `vue-tsc`, Vitest, build e orçamento de 150 kB de JS |
| `pr-validation.yml` | PR | Título em Conventional Commits, descrição preenchida, alerta de PR grande |
| `ai-review.yml` | PR | Revisão do Claude: conteúdo PT/EN, acessibilidade, responsividade e código |
| `deploy.yml` | push na `main` | Build e publicação no GitHub Pages |

Configuração única no GitHub:
- **Pages:** Settings → Pages → Source: *GitHub Actions*.
- **Revisão por IA:** Settings → Secrets and variables → Actions → `ANTHROPIC_API_KEY`.

## Projetos em destaque

- [TripFlow](https://github.com/acamilateixeira/tripflow) — API Laravel de viagens corporativas com aprovação concorrente por orçamento, idempotência e publicação assíncrona via outbox e RabbitMQ.
- [Bora](https://github.com/acamilateixeira/Bora) — App de corridas criado a pedido da Prefeitura de Conceição do Mato Dentro (MG), com despacho, histórico de atendimentos e acesso por órgão.
