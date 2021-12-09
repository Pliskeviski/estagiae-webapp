import { useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiMapPin5Line } from 'react-icons/ri';
import { CgBriefcase } from 'react-icons/cg';
import { useCompany } from 'src/hooks/useCompany';
import { useLocation } from 'src/hooks/useLocation';
import { IJobFilters } from 'src/interfaces/job-filters.interface';
import useJobsListStore from 'src/stores/jobs-list.store';

import {
  ContainerInput,
  SearchContainer,
  SearchLimitedContainer,
  StyledInput,
} from './styles';
import { SelectInput } from '../select-input';

export const Search = () => {
  const {
    onUpdateFilters,
    filters: { company, location, text },
  } = useJobsListStore(useCallback((state) => state, []));

  const { loadOptions, isLoadingData } = useCompany(false);
  const {
    loadOptions: loadOptionsLocation,
    isLoadingData: isLoadingDataLocation,
  } = useLocation(false);

  const handleOnChangeFilter = useCallback(
    (property: string, value: string | number) => {
      const partialFilter: Partial<IJobFilters> = {
        [property]: value,
      };

      onUpdateFilters(partialFilter);
    },
    [onUpdateFilters]
  );

  return (
    <SearchContainer>
      <SearchLimitedContainer>
        <ContainerInput>
          <StyledInput
            placeholder="Procurar"
            icon={FiSearch}
            value={text}
            onChange={(e) => {
              handleOnChangeFilter('text', e.target.value);
            }}
          />
        </ContainerInput>

        <ContainerInput>
          <SelectInput
            placeholder="Localização"
            loadOptions={loadOptionsLocation}
            isLoading={isLoadingDataLocation}
            icon={RiMapPin5Line}
            value={location}
            onChange={(e) => {
              if (!e) {
                return handleOnChangeFilter('location', '');
              }

              return handleOnChangeFilter('location', e);
            }}
          />
        </ContainerInput>

        <ContainerInput>
          <SelectInput
            placeholder="Empresa"
            loadOptions={loadOptions}
            isLoading={isLoadingData}
            icon={CgBriefcase}
            value={company}
            onChange={(e) => {
              if (!e) {
                return handleOnChangeFilter('company', '');
              }

              return handleOnChangeFilter('company', e);
            }}
          />
        </ContainerInput>
      </SearchLimitedContainer>
    </SearchContainer>
  );
};
