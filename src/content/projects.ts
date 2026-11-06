import type { Project } from './types'

export const projects: Project[] = [
  {
    id: 'tripflow',
    name: 'TripFlow',
    repo: 'tripflow',
    type: 'Back-end',
    featured: true,
    symbol: '⇄',
    stack: 'PHP 8.3 · Laravel 12 · MySQL · Redis · RabbitMQ · Docker',
    description: {
      pt: 'Construí uma API de viagens corporativas para explorar três problemas de produção: aprovações simultâneas disputando o mesmo orçamento, tentativas repetidas de reserva e falhas entre o banco e o broker. A demo vai da solicitação à reserva com um fornecedor simulado.',
      en: 'I built a corporate travel API to explore three production problems: concurrent approvals competing for the same budget, booking retries, and failures between the database and the broker. The demo runs from request to booking with a simulated supplier.',
    },
    highlights: {
      pt: [
        'Para evitar que duas aprovações gastem o mesmo saldo, bloqueio a linha do centro de custo no MySQL e confiro o orçamento dentro da transação.',
        'A API reaproveita a resposta quando recebe a mesma Idempotency-Key. Na reserva, um lock no Redis coordena chamadas concorrentes sem manter aberta a transação durante a chamada ao fornecedor.',
        'A API grava a mudança de estado e o evento na outbox na mesma transação. Um relay publica no RabbitMQ depois do commit e o consumidor deduplica reentregas pelo ID da mensagem.',
        'O escopo por empresa e os testes de isolamento verificam a fronteira entre clientes. A demo em Codespaces e os ADRs permitem revisar o fluxo e os trade-offs.',
      ],
      en: [
        'To prevent two approvals from spending the same balance, I lock the cost-center row in MySQL and check the budget inside the transaction.',
        'The API replays the saved response for the same Idempotency-Key. During booking, a Redis lock coordinates concurrent calls without holding a database transaction open during the supplier call.',
        'The API saves the state change and the outbox event in one transaction. A relay publishes to RabbitMQ after commit, and the consumer deduplicates redeliveries by message ID.',
        'Company-level scoping and isolation tests verify the tenant boundary. The Codespaces demo and ADRs make the workflow and trade-offs easy to review.',
      ],
    },
  },
  {
    id: 'bora',
    name: 'Bora',
    repo: 'Bora',
    type: 'Full Stack · Mobile',
    featured: true,
    symbol: '⌖',
    stack: 'React Native · Expo · TypeScript · Supabase Auth · PostgreSQL · Realtime',
    description: {
      pt: 'A Prefeitura de Conceição do Mato Dentro (MG) solicitou o Bora para uma operação temporária. A equipe precisava saber quantas corridas cada motorista contratado tinha feito, para quem, para onde, como contatá-lo e se ainda podia atender pelo órgão.',
      en: 'The municipality of Conceição do Mato Dentro, Brazil, requested Bora for a temporary operation. Staff needed to know how many rides each contracted driver had completed, who requested them, where they went, how to contact the driver, and whether they were still eligible to take rides.',
    },
    highlights: {
      pt: [
        'Usei React Native e Expo para compartilhar uma base entre Android e iOS, com modos para passageiro, despacho e motorista. Supabase Auth e políticas no PostgreSQL dão acesso conforme o vínculo no órgão.',
        'Separei solicitação de atribuição para preservar o solicitante e o trajeto mesmo quando muda quem vai atender. O despacho pode consultar o histórico, contar corridas finalizadas por motorista e ligar pelo cadastro.',
        'Modelei o vínculo operacional separado da presença. Um motorista pode estar aprovado e offline. O despacho acompanha os estados da operação pelo Realtime e o banco registra o histórico das mudanças.',
        'O código inclui expiração de presença configurável, push por Edge Function com segredo no Vault e testes de políticas e migrações no PostgreSQL.',
      ],
      en: [
        'I used React Native and Expo to share an Android and iOS codebase across rider, dispatch, and driver modes. Supabase Auth and PostgreSQL policies scope access by department membership.',
        'I separated requests from assignments so the requester and route stay with the request when the assigned driver changes. Dispatch can check trip history, count completed rides by driver, and call from the driver profile.',
        'I modeled operational membership separately from presence. A driver can be approved and offline. Dispatch follows changes through Realtime, and the database records status history.',
        'The code includes configurable presence expiry, push via an Edge Function using a Vault secret, and PostgreSQL policy and migration tests.',
      ],
    },
  },
  {
    id: 'livit-live-controller',
    name: 'Livit Live Controller',
    type: 'Full Stack · macOS',
    featured: true,
    stack: 'Python · TikTokLive · Node.js · JavaScript · Canvas · AppleScript · Chromium',
    diagram: {
      file: 'img/livit-architecture.svg',
      alt: {
        pt: 'TikTok LIVE envia eventos ao servidor Python. O painel e o overlay usam o estado local. Um worker Node executa os jogos e uma extensão Chromium atende à fila de música.',
        en: 'TikTok LIVE sends events to the Python server. The control panel and overlay share local state. A Node worker runs the games and a Chromium extension handles the music queue.',
      },
    },
    description: {
      pt: 'Criei uma mesa de controle local para não depender de várias ferramentas pagas de overlay. No meu Mac com 8 GB de RAM, o desafio era manter uma transmissão com identidade própria enquanto LIVE Studio, navegador, player e animações disputavam recursos.',
      en: 'I built a local control desk to replace several paid overlay tools. On my 8 GB Mac, the challenge was giving the stream its own visual identity while LIVE Studio, the browser, the player, and animations shared limited resources.',
    },
    highlights: {
      pt: [
        'Separei o painel e a prévia da saída capturada pelo LIVE Studio. Posso ensaiar um jogo ou mudar o cenário antes de colocar a mudança no ar pela mesma fonte.',
        'O servidor Python recebe eventos do TikTok LIVE. Um único worker Node, iniciado sob demanda, aplica as regras dos jogos e mantém um placar compartilhado entre painel e overlay.',
        'AppleScript lê a faixa atual. Uma extensão Chromium opcional busca e enfileira pedidos no Spotify Web ou YouTube Music com pareamento local e confirmação da fila.',
        'O perfil adaptativo lê a pressão de memória do macOS e ajusta quadros, resolução interna e efeitos. O painel consulta menos em segundo plano e mantém a prévia lateral desligada por padrão.',
      ],
      en: [
        'I separated controls and rehearsal previews from the output captured by LIVE Studio. I can rehearse a game or change scenes before applying the change to the same broadcast source.',
        'The Python server receives TikTok LIVE events. One on-demand Node worker runs game rules and keeps a shared scoreboard for the panel and overlay.',
        'AppleScript reads the current track. An optional Chromium extension searches and queues requests in Spotify Web or YouTube Music using local pairing and queue confirmation.',
        'An adaptive profile reads macOS memory pressure and adjusts animation frame rate, internal resolution, and effects. The control tab polls less in the background and starts with its side preview off.',
      ],
    },
  },
  {
    id: 'sorteador',
    name: 'Sorteador',
    repo: 'sorteador-web',
    demo: 'https://acamilateixeira.github.io/sorteador-web/',
    type: 'Front-end · Angular',
    stack: 'Angular 22 · TypeScript · Reactive Forms · Signals · Web Crypto · Vitest',
    description: {
      pt: 'Sorteio de nomes ou números para atividades e eventos, feito todo no navegador. O sorteio usa Web Crypto sem viés de módulo, remove nomes duplicados e evita repetir resultados entre rodadas. Testes e publicação no GitHub Pages rodam no GitHub Actions.',
      en: 'A name and number draw for activities and events that runs entirely in the browser. It uses Web Crypto without modulo bias, removes duplicate names, and avoids repeating results across rounds. Tests and GitHub Pages deployment run on GitHub Actions.',
    },
  },
]
