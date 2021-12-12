import { LocationType } from 'src/enums/LocationType';
import { IPrefetchedFilters } from 'src/interfaces/prefetched-filters.interface';

// TODO: add a custom description for each of the options
const availableRoutes = {
  'vagas-de-estagio-remotas': {
    filters: {
      text: 'remoto',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio remotas no Brasil! De um início na sua carreira sem sair de casa.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-desenvolvimento': {
    filters: {
      text: 'desenvolvimento',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio como Desenvolvedor(a) no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-programacao': {
    filters: {
      text: 'programação',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Programação no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-direito': {
    filters: {
      text: 'direito',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Direito no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-pedagogia': {
    filters: {
      text: 'pedagogia',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Pedagogia no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-contabeis': {
    filters: {
      text: 'contábeis',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Contábeis no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-educacao-fisica': {
    filters: {
      text: 'educação física',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Educação Física no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-engenharia': {
    filters: {
      text: 'engenharia',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Engenharia no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-engenharia-eletrica': {
    filters: {
      text: 'engenharia elétrica',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Engenharia Elétrica no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-engenharia-civil': {
    filters: {
      text: 'engenharia civil',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Engenharia Civil no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-psicologia': {
    filters: {
      text: 'psicologia',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Psicologia no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-publicidade-e-propaganda': {
    filters: {
      text: 'publicidade e propaganda',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Publicidade e Propaganda no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-engenharia-de-producao': {
    filters: {
      text: 'engenharia de produção',
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Egenharia de Produção no Brasil! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-sao-paulo': {
    filters: {
      location: {
        label: 'São Paulo',
        value: 'd6c8cda8-e019-4246-b36b-66c35e98c993',
        type: LocationType.State,
      },
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em São Paulo! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
};

export const getFiltersByUrl = (url: string): IPrefetchedFilters => {
  const routeFilters = availableRoutes[url];

  if (!routeFilters) {
    return {
      filters: {},
      filterSections: [],
      description: '',
    };
  }

  return routeFilters;
};
