import { FiSearch } from 'react-icons/fi';
import { RiMapPin5Line } from 'react-icons/ri';
import { CgBriefcase } from 'react-icons/cg';

import {
  ContainerInput,
  SearchContainer,
  SearchLimitedContainer,
  StyledInput,
} from './styles';

export const Search = () => {
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
          <StyledInput placeholder="Empresa" icon={CgBriefcase} />
        </ContainerInput>
      </SearchLimitedContainer>
    </SearchContainer>
  );
};
