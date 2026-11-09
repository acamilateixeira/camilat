![Camila Teixeira · Engenharia de Software · Portfólio](docs/cover.svg)

# Portfólio de Camila Teixeira

**Português** · [English](README.en.md) · [Abrir portfólio](https://acamilateixeira.github.io/camilat/?lang=pt)

[![CI](https://github.com/acamilateixeira/camilat/actions/workflows/ci.yml/badge.svg)](https://github.com/acamilateixeira/camilat/actions/workflows/ci.yml)

Portfólio de engenharia de software com foco em back-end e desenvolvimento full stack. Cada estudo de caso apresenta a necessidade que deu origem ao projeto, o que foi implementado e as razões para as escolhas técnicas.

## O que cada caso demonstra

| Projeto | Problema e decisão em destaque |
| --- | --- |
| [GEMP](https://github.com/acamilateixeira/GEMP) · [demo](https://acamilateixeira.github.io/GEMP/) | Comparador de crédito fictício em Go, React e TypeScript. Consulta três provedores em paralelo com prazo individual, mantém as ofertas válidas quando um falha e ordena pelo custo total. |
| [TripFlow](https://github.com/acamilateixeira/tripflow) | API Laravel de viagens corporativas. Locks para proteger o orçamento, idempotência para reenvios e outbox para publicar eventos após o commit. A demo usa fornecedor simulado. |
| [Bora](https://github.com/acamilateixeira/Bora) | App criado a pedido da Prefeitura de Conceição do Mato Dentro (MG). Histórico de corridas por motorista, contato e acesso por órgão. O vínculo operacional é tratado separadamente da disponibilidade. |
| [Livit Live Controller](https://acamilateixeira.github.io/camilat/?lang=pt#livit-live-controller) | Controlador local de TikTok LIVE para um Mac de 8 GB. Prévia separada da saída, motor compartilhado de jogos, extensão de fila musical e renderização adaptativa. O caso é público e o código é privado. |
| [Sorteador](https://github.com/acamilateixeira/sorteador-web) · [demo](https://acamilateixeira.github.io/sorteador-web/) | Sorteio auditável em Angular 22: compromisso SHA-256 antes do sorteio, contribuição pública na semente e comprovante verificável por link. 18 testes, incluindo vetor fixo e adulterações, rodam no GitHub Actions. |
| [MeterTrail](https://github.com/acamilateixeira/metertrail) · [wiki](https://github.com/acamilateixeira/metertrail/wiki/Inicio) | Medição de uso de API em Rust. O mesmo evento conta uma vez com reenvios simultâneos, e o mesmo id com outro conteúdo devolve 409. Se o processador cai entre a escrita no analytics e o checkpoint, o lote é gravado de novo e o total não muda. Testes, falha injetada e reprocessamento rodam no CI. |

## Outros projetos e próximos casos

| Projeto | Estágio | O que demonstra |
| --- | --- | --- |
| [Emppo Finance](https://github.com/acamilateixeira/emppo-finance) | API funcional local | Node.js e Fastify com lançamentos em SQLite, validação e cálculo do saldo em centavos. |
| [Release Relay](https://github.com/acamilateixeira/release-relay) | Demo local do contrato | App planejado no Lovable para entregar ao cliente um link com execução do GitHub, revisão do site e checklist por commit. |
| [GMPE](https://github.com/acamilateixeira/gmpe) | Demo local de venda | Gestão por empresa para pequenas lojas, com venda, baixa de estoque, caixa e contas a receber na mesma operação. |
| [Mão na Obra](https://github.com/acamilateixeira/maonaobra) | Protótipo e proposta | Landing page para um profissional da construção em Portugal. Versão React inicial e evolução planejada para C# e ASP.NET Core. |
| [MPN](https://github.com/acamilateixeira/MPN) | Legado e proposta | Agenda de serviços com migração proposta para Kotlin. O recorte mede o que acontece quando duas reservas disputam o mesmo horário. |

## Critérios de seleção e revisão

1. **Começar pelo problema.** Explicar quem precisava da solução e o que dificultava a operação.
2. **Relacionar a arquitetura ao efeito.** Cada decisão precisa explicar o que resolveu e em que condições funciona. Uma lista de tecnologias serve como referência, depois do contexto.
3. **Conferir o que pode ser demonstrado.** Revisar código, testes ou guias antes de apresentar um recurso como implementado. Identificar demos, protótipos, integrações simuladas e diagramas.
4. **Revisar PT e EN juntos.** A mesma mudança atualiza os dois idiomas. Antes de publicar, conferir os links e rodar lint, tipos, testes e build.
5. **Deixar a verificação pronta.** Nome, About e Topics ajudam a encontrar o caso. Os READMEs em PT e EN indicam pré-requisitos, comando para iniciar, dados de teste, como executar a suíte e o resultado esperado. APIs trazem uma coleção. Interfaces trazem um roteiro no navegador.

## Arquitetura do portfólio

```mermaid
flowchart LR
    Content["src/content · PT e EN"] --> Sections["Componentes Vue"]
    Language["useLanguage · idioma e preferência local"] --> Sections
    Sections --> Build["Vite · build estático"]
    Build --> Pages["GitHub Pages"]
```

| Tecnologia | Papel |
| --- | --- |
| **Vue 3 e TypeScript** | Componentes por seção e tipos que exigem textos nos dois idiomas. |
| **Vite** | Servidor local e build estático sob `/camilat/`. |
| **Vitest e Vue Test Utils** | Testes de navegação, seleção de idioma, links e paridade de conteúdo. |
| **ESLint e GitHub Actions** | Verificações em PRs, orçamento de JavaScript e publicação no GitHub Pages. |

O conteúdo fica em [`src/content/`](src/content). Os componentes em [`src/components/`](src/components) cuidam da apresentação. Na primeira visita, o site mostra só a escolha entre português e inglês, para ninguém abrir o portfólio no idioma errado. Um link com `?lang=pt` ou `?lang=en` pula a escolha (os CVs e estes READMEs usam esse formato). [`useLanguage`](src/composables/useLanguage.ts) aplica o atributo `lang` e guarda a escolha quando o armazenamento local está disponível.

## Rodar e verificar

Use Node.js 22 e npm.

```bash
git clone https://github.com/acamilateixeira/camilat.git
cd camilat
npm install
npm run dev
```

Abra a URL exibida pelo Vite. Para conferir uma alteração:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

O CI verifica que o JavaScript gerado fica abaixo de 150 KiB. A validação de PR confere título e descrição. A revisão por IA é opcional e depende de `ANTHROPIC_API_KEY`. O deploy roda após mudanças na `main`, com **GitHub Actions** configurado como fonte do Pages. [Workflows](.github/workflows)

## Postman, Insomnia e verificação

Importe a [coleção do portfólio](docs/postman.collection.json) para verificar a resposta HTML do site publicado. Use `npm test` para navegação e idiomas. Para a checagem manual, mude de idioma e abra um link de estudo de caso.
