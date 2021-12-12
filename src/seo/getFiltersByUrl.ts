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
  'vagas-de-estagio-em-sp': {
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
  'vagas-de-estagio-em-curitiba': {
    filters: {
      location: {
        label: 'Curitiba',
        value: 'd35cd1f0-046c-4c87-a1bf-3a4320ee76de',
        type: LocationType.City,
      },
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Curitiba! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-florianópolis': {
    filters: {
      location: {
        label: 'Florianópolis',
        value: '4c8fa15b-97b4-40c8-91b6-add645b8e594',
        type: LocationType.City,
      },
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Florianópolis! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-em-porto-alegre': {
    filters: {
      location: {
        label: 'Porto Alegre',
        value: '7c85595c-bbf4-4a2b-9520-6b25d552d01c',
        type: LocationType.City,
      },
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio em Porto Alegre! De uma olhada nas vagas em aberto com a gente.',
  } as IPrefetchedFilters,
  'vagas-de-estagio-no-rio-de-janeiro': {
    filters: {
      location: {
        label: 'Rio de Janeiro',
        value: 'bf50a857-167b-47e5-b847-862db1c6c96d',
        type: LocationType.State,
      },
    },
    filterSections: [],
    description:
      'A Estagiaê te ajuda a encontrar as melhores oportunidades de estágio no Rio de Janeiro! De uma olhada nas vagas em aberto com a gente.',
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
