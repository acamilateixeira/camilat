![Camila Teixeira · Software Engineering · Portfolio](docs/cover.svg)

# Camila Teixeira's portfolio

[Português](README.md) · **English** · [Open the portfolio](https://acamilateixeira.github.io/camilat/)

[![CI](https://github.com/acamilateixeira/camilat/actions/workflows/ci.yml/badge.svg)](https://github.com/acamilateixeira/camilat/actions/workflows/ci.yml)

A software engineering portfolio focused on back-end and full-stack work. Each case study explains the need behind the project, what was built, and why the technical decisions made sense.

## What each project demonstrates

| Project | Problem and design decision |
| --- | --- |
| [GEMP](https://github.com/acamilateixeira/GEMP) | A fictional credit comparison tool in Go, React, and TypeScript. It queries three providers in parallel with per-provider deadlines, keeps valid offers when one fails, and ranks by total cost. |
| [TripFlow](https://github.com/acamilateixeira/tripflow) | A Laravel corporate travel API. Locks protect the budget, idempotency handles retries, and an outbox publishes events after commit. The demo uses a simulated supplier. |
| [Bora](https://github.com/acamilateixeira/Bora) | An app requested by the municipality of Conceição do Mato Dentro, Brazil. It tracks rides per driver, contact details, and department-level access. Operational membership is separate from availability. |
| [Livit Live Controller](https://acamilateixeira.github.io/camilat/#livit-live-controller) | A local TikTok LIVE controller built for an 8 GB Mac. It separates preview from broadcast output and includes a shared game engine, a music queue extension, and adaptive rendering. The case study is public and the source code is private. |
| [Sorteador](https://github.com/acamilateixeira/sorteador-web) · [demo](https://acamilateixeira.github.io/sorteador-web/) | An auditable draw built with Angular 22: a SHA-256 commitment before the draw, a public contribution in the seed, and a receipt anyone can verify from a link. 18 tests, including a fixed vector and tampering cases, run on GitHub Actions. |
| [MeterTrail](https://github.com/acamilateixeira/metertrail) · [wiki](https://github.com/acamilateixeira/metertrail/wiki) | API usage metering in Rust. The same event counts once under concurrent retries, and the same id with different content returns 409. If the worker crashes between the analytics write and the checkpoint, the batch is written again and the total holds. Tests, the injected crash, and the replay run in CI. |

## Additional projects and upcoming cases

| Project | Stage | What it demonstrates |
| --- | --- | --- |
| [Emppo Finance](https://github.com/acamilateixeira/emppo-finance/blob/main/README.en.md) | Working local API | Node.js and Fastify API with SQLite persistence, input validation, and balances in cents. |
| [Release Relay](https://github.com/acamilateixeira/release-relay) | Local contract demo | A planned Lovable app for client handoffs with a GitHub run, site review, and a checklist pinned to a commit. |
| [GMPE](https://github.com/acamilateixeira/gmpe/blob/main/README.en.md) | Local sales demo | Multi-tenant retail management that connects sales, inventory movements, cash, and receivables. |
| [Mão na Obra](https://github.com/acamilateixeira/maonaobra/blob/main/README.en.md) | Prototype and proposal | A landing page for a builder in Portugal, with an early React prototype and a planned ASP.NET Core rebuild. |
| [MPN](https://github.com/acamilateixeira/MPN/blob/main/README.en.md) | Legacy and proposal | A service scheduler with a proposed Kotlin migration focused on simultaneous booking attempts. |

## Selection and review criteria

1. **Start with the problem.** Explain who needed the project and what made the work difficult.
2. **Connect design decisions to their effects.** Explain what each choice solves and under what conditions. List technologies after the context.
3. **Check what can be demonstrated.** Review code, tests, or documentation before describing a capability as implemented. Label demos, prototypes, simulated integrations, and diagrams.
4. **Review Portuguese and English together.** Update both languages in the same change. Check links, lint, types, tests, and the build before publishing.
5. **Make verification repeatable.** Names, About descriptions, and Topics help people find each case. The English and Portuguese READMEs list prerequisites, the start command, test data, the test command, and the expected outcome. APIs include a collection. Interfaces include a browser walkthrough.

## Portfolio architecture

```mermaid
flowchart LR
    Content["src/content · PT and EN"] --> Sections["Vue components"]
    Language["useLanguage · locale and local preference"] --> Sections
    Sections --> Build["Vite · static build"]
    Build --> Pages["GitHub Pages"]
```

| Technology | Role |
| --- | --- |
| **Vue 3 and TypeScript** | Section components and types that require copy in both languages. |
| **Vite** | Local development server and static build under `/camilat/`. |
| **Vitest and Vue Test Utils** | Tests for navigation, language selection, links, and content parity. |
| **ESLint and GitHub Actions** | Pull request checks, a JavaScript size budget, and GitHub Pages deployment. |

Copy lives in [`src/content/`](src/content). Components in [`src/components/`](src/components) handle presentation. [`useLanguage`](src/composables/useLanguage.ts) detects the locale, sets the `lang` attribute, and saves the preference when local storage is available.

## Run and verify

Use Node.js 22 and npm.

```bash
git clone https://github.com/acamilateixeira/camilat.git
cd camilat
npm install
npm run dev
```

Open the URL printed by Vite. To verify a change:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

CI checks that the generated JavaScript stays below 150 KiB. Pull request validation checks the title and description. Optional AI review requires `ANTHROPIC_API_KEY`. Deployment runs after changes reach `main`, with **GitHub Actions** configured as the Pages source. [Workflows](.github/workflows)

## Postman, Insomnia, and verification

Import the [portfolio collection](docs/postman.collection.json) to check the published HTML response. Use `npm test` for navigation and language checks. For a manual walkthrough, switch languages and open a case study link.
