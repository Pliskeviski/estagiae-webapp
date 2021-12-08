import { FiSearch } from 'react-icons/fi';
import { RiMapPin5Line } from 'react-icons/ri';
import { CgBriefcase } from 'react-icons/cg';
import { useCompany } from 'src/hooks/useCompany';

import {
  ContainerInput,
  SearchContainer,
  SearchLimitedContainer,
  StyledInput,
} from './styles';
import { SelectInput } from '../select-input';

export const Search = () => {
  const { loadOptions, isLoadingData } = useCompany(false);

  return (
    <SearchContainer>
      <SearchLimitedContainer>
        <ContainerInput>
          <StyledInput placeholder="Procurar" icon={FiSearch} />
        </ContainerInput>

        <ContainerInput>
          <StyledInput placeholder="Localização" icon={RiMapPin5Line} />
        </ContainerInput>

        <ContainerInput>
          <SelectInput
            placeholder="Empresa"
            loadOptions={loadOptions}
            isLoading={isLoadingData}
            icon={CgBriefcase}
          />
          {/* <StyledInput placeholder="Empresa" icon={CgBriefcase} /> */}
        </ContainerInput>
      </SearchLimitedContainer>
    </SearchContainer>
  );
};
