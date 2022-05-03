import { Projeto } from '../models/projeto';

export const projetosMock: Projeto[] = [
  {
    id: 1,
    nome: 'RDev',
    descricao:
      'O projeto é um sistema de recrutamento de TI. O sistema possui um cadastro de candidatos, empregadores e um sistema de gerenciamento de vagas.',
    status: 'Em Desenvolvimento',
  },
  {
    id: 2,
    nome: 'Mila',
    descricao:
      'Mila é sua assistente para todas as suas necessidades para atender seus clientes no WhatsApp, com ela você pode personalizar suas mensagens e deixar seus clientes satisfeitos.',
    status: 'Em Desenvolvimento',
  },
  {
    id: 4,
    nome: 'Pat',
    descricao:
      'Pat pode te ajudar a fazer seus exercícios de uma forma melhor, com uma forma simples e fácil de fazer. Ela compartilha os exercícios com seus alunos e os ajuda a fazê-lo.',
    status: 'Em Desenvolvimento',
  },
  {
    id: 5,
    nome: 'Emppo',
    descricao:
      'O Emppo é um sistema para a gestão do seu negócio. Possui diversas funcionalidades como: cadastro de clientes, cadastro de funcionários, cadastro de produtos..',
    status: 'Em Desenvolvimento',
  },
];
