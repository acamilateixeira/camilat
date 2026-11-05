import type { Project } from './types'

export const projects: Project[] = [
  {
    name: 'TripFlow',
    repo: 'tripflow',
    type: 'Back-end',
    featured: true,
    symbol: '⇄',
    stack: 'Laravel 12 · MySQL · Redis · RabbitMQ · Docker · GitHub Actions',
    description: {
      pt: 'API de viagens corporativas: solicitação, aprovação dentro do orçamento do centro de custo, emissão de reservas e eventos para outros sistemas.',
      en: 'Corporate travel API: requests, approval within the cost center budget, booking, and events for downstream systems.',
    },
    highlights: {
      pt: [
        'Transactional outbox + RabbitMQ com publisher confirms, backoff e DLQ',
        'Lock pessimista no orçamento e lock distribuído no Redis para reservas',
        'Idempotency-Key, isolamento multi-tenant e correlation ID ponta a ponta',
        'Pest (arquitetura, feature e integração), Larastan nível 8, ADRs',
        'CI/CD com revisão de PR por IA e imagem publicada no GHCR',
      ],
      en: [
        'Transactional outbox + RabbitMQ with publisher confirms, backoff, and DLQ',
        'Pessimistic lock on budget and Redis distributed lock for bookings',
        'Idempotency-Key, multi-tenant isolation, and end-to-end correlation ID',
        'Pest (architecture, feature, integration), Larastan level 8, ADRs',
        'CI/CD with AI pull-request review and image published to GHCR',
      ],
    },
  },
  {
    name: 'Bora',
    repo: 'Bora',
    type: 'Full Stack · Mobile',
    featured: true,
    symbol: '⌖',
    stack: 'React Native · Expo · TypeScript · Supabase (Postgres, RLS, Realtime, Edge Functions)',
    description: {
      pt: 'App de gestão de corridas usado pela Prefeitura de Conceição do Mato Dentro (MG) em uma operação temporária. O passageiro solicita, o despacho aprova e atribui, e o motorista executa, com tudo atualizado em tempo real.',
      en: 'Ride management app used by the city of Conceição do Mato Dentro, Brazil, in a temporary operation. Riders request, dispatch approves and assigns, and drivers complete the trip, all updated in real time.',
    },
    highlights: {
      pt: [
        'Multi-tenant por organização com RLS no Postgres e funções security definer',
        'Tempo real com Supabase Realtime e localização do motorista no mapa',
        'Push por Edge Function em Deno, autorizada por um segredo guardado no Vault',
        'Disponibilidade do motorista com histórico e expiração automática no banco',
        'Testes de RLS entre organizações em Postgres, testes unitários e CI',
      ],
      en: [
        'Multi-tenant by organization with Postgres RLS and security definer functions',
        'Real-time updates with Supabase Realtime and live driver location on the map',
        'Push via a Deno Edge Function, authorized by a secret stored in Vault',
        'Driver availability with history and automatic expiry in the database',
        'Cross-tenant RLS tests on Postgres, unit tests, and CI',
      ],
    },
  },
  {
    name: 'GEMP',
    repo: 'GEMP',
    type: 'Full Stack',
    stack: 'Laravel · Vue 3 · MySQL · Swagger',
    description: {
      pt: 'Consulta e simulação de ofertas de crédito entre instituições financeiras, com API documentada em Swagger e interface em Vue.',
      en: 'Credit offer lookup and simulation across financial institutions, with a Swagger-documented API and a Vue interface.',
    },
  },
  {
    name: 'CRM',
    repo: 'crm',
    type: 'Full Stack',
    stack: 'Laravel · React · TypeScript',
    description: {
      pt: 'Gestão de processos com API Laravel e front-end React/TypeScript separados.',
      en: 'Process management with a decoupled Laravel API and React/TypeScript front end.',
    },
  },
  {
    name: 'CodeChronicles',
    repo: 'CodeChronicles',
    type: '.NET',
    stack: 'C# · ASP.NET Core MVC',
    description: {
      pt: 'Aplicação web em ASP.NET Core MVC no ecossistema .NET.',
      en: 'ASP.NET Core MVC web application in the .NET ecosystem.',
    },
  },
]
