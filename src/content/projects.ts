import type { Project } from './types'

export const projects: Project[] = [
  {
    name: 'TripFlow',
    repo: 'tripflow',
    type: 'Back-end',
    featured: true,
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
