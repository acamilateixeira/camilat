# Guia para agentes de IA neste repositório

Portfólio pessoal da Camila Teixeira. Vue 3 + TypeScript + Vite, publicado no GitHub Pages.

## Comandos

- `npm run dev` — servidor local
- `npm test` — Vitest
- `npm run typecheck` / `npm run lint`
- `npm run build` — gera `dist/` (base `/camilat/`)

## Estrutura

- `src/content/` — todo o texto do site (PT e EN). Componentes não têm texto fixo.
- `src/components/` — uma seção por componente.
- `src/composables/useLanguage.ts` — idioma compartilhado, salvo no localStorage com try/catch.

## Regras

1. Todo texto existe em PT e EN; `content.spec.ts` garante a paridade.
2. Nada de informação de carreira que não esteja no currículo (sem números inventados).
3. Acessibilidade: foco visível, `alt` em imagens, botões com `aria-pressed`.
4. Sem dependências novas sem motivo: o bundle de JS tem orçamento de 150 kB no CI.
