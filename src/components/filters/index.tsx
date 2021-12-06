import React, { useMemo } from 'react';
import { Checkbox } from '../checkbox';
import {
  ContainerFilters,
  FilterOptionContainer,
  FilterOptionLabel,
  FilterOptions,
  SectionFilter,
  SectionFilterTitle,
} from './styles';

export const Filters = React.memo(() => {
  const filterSections = useMemo(
    () => [
      {
        id: 0,
        title: 'Tipo',
        options: [
          {
            id: 1,
            name: 'Tempo Integral',
          },
          {
            id: 2,
            name: 'Estágio',
          },
          {
            id: 3,
            name: 'Meio Período',
          },
        ],
      },
      {
        id: 1,
        title: 'Empresa',
        options: [
          {
            id: 1,
            name: 'PicPay',
          },
          {
            id: 2,
            name: 'Enext',
          },
        ],
      },
    ],
    []
  );

  return (
    <ContainerFilters>
      {filterSections.map((section) => (
        <SectionFilter key={`section-filter-${section.id}`}>
          <SectionFilterTitle>{section.title}</SectionFilterTitle>
          <FilterOptions>
            {section.options.map((option) => (
              <FilterOptionContainer key={`option-${section.id}-${option.id}`}>
                <Checkbox />
                <FilterOptionLabel>{option.name}</FilterOptionLabel>
              </FilterOptionContainer>
            ))}
          </FilterOptions>
        </SectionFilter>
      ))}
    </ContainerFilters>
  );
});
