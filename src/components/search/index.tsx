import { useCallback, useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiMapPin5Line } from 'react-icons/ri';
import { CgBriefcase } from 'react-icons/cg';
import { useCompany } from 'src/hooks/useCompany';
import { useLocation } from 'src/hooks/useLocation';
import { IJobFilters } from 'src/interfaces/job-filters.interface';
import useJobsListStore from 'src/stores/jobs-list.store';
import { useDebounce } from 'src/hooks/useDebounce';

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
  const [searchValue, setSearchValue] = useState(text);
  const debouncedSearchValue = useDebounce(searchValue);

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

  useEffect(() => {
    handleOnChangeFilter('text', debouncedSearchValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchValue]);

  return (
    <SearchContainer>
      <SearchLimitedContainer>
        <ContainerInput>
          <StyledInput
            placeholder="Procurar"
            icon={FiSearch}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
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
