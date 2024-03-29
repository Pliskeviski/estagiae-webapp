import React, { useCallback } from 'react';
import useJobsListStore from 'src/stores/jobs-list.store';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { Checkbox } from '../checkbox';
import {
  ContainerFilters,
  ExpandButton,
  FilterOptionContainer,
  FilterOptionLabel,
  FilterOptions,
  SectionFilter,
  SectionFilterTitle,
} from './styles';

export const Filters = React.memo(() => {
  const {
    onChangeFilterSections,
    filterSections,
    onToggleExpandedFilterSection,
  } = useJobsListStore(useCallback((state) => state, []));

  const handleChangeFilter = useCallback(
    (sectionId, optionId) => {
      const newFilter = filterSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            options: section.options.map((option) => {
              if (option.id === optionId) {
                return {
                  ...option,
                  selected: !option.selected,
                };
              }
              return option;
            }),
          };
        }
        return section;
      });

      onChangeFilterSections(newFilter);
    },
    [filterSections, onChangeFilterSections]
  );

  const handleOnToggleExpandedFilterSection = useCallback(
    (sectionId, domId) => {
      onToggleExpandedFilterSection(sectionId);

      document.getElementById(domId).scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [onToggleExpandedFilterSection]
  );

  return (
    <ContainerFilters>
      {filterSections.map((section) => {
        const { id: sectionId, label, options, isExpanded } = section;
        const localKey = `section-filter-${sectionId}`;
        const optionsDomId = `options-section-filter-${sectionId}`;

        const maxAmountOfOptions = 4;

        const hasMoreOptions = options.length > maxAmountOfOptions;

        return (
          <SectionFilter key={localKey}>
            <SectionFilterTitle>{label}</SectionFilterTitle>
            <FilterOptions isExpanded={isExpanded} id={optionsDomId}>
              {options.map((option) => (
                <FilterOptionContainer
                  key={`option-${sectionId}-${option.id}`}
                  id={`option-${sectionId}-${option.id}`}
                  onClick={() => handleChangeFilter(sectionId, option.id)}
                >
                  <Checkbox checked={option.selected} />
                  <FilterOptionLabel>{option.label}</FilterOptionLabel>
                </FilterOptionContainer>
              ))}
            </FilterOptions>

            {hasMoreOptions && (
              <ExpandButton
                onClick={() =>
                  handleOnToggleExpandedFilterSection(sectionId, optionsDomId)
                }
              >
                {isExpanded ? <HiMinusSm /> : <HiPlusSm />}
                {isExpanded ? 'Ver menos' : 'Ver mais'}
              </ExpandButton>
            )}
          </SectionFilter>
        );
      })}
    </ContainerFilters>
  );
});
