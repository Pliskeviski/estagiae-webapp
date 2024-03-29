import styled from 'styled-components';
import { LimitedContainer } from 'src/theme/globalStyles';
import { Input } from '../input';

export const SearchContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors['gray-10']};
  padding: 0.5rem 0;
  box-shadow: rgb(227 227 227 / 20%) 0px 20px 24px;
`;

export const SearchLimitedContainer = styled(LimitedContainer)`
  margin: 0 auto;

  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    flex-direction: column;
  }
`;

export const StyledInput = styled(Input)`
  input {
    border: none;
    padding-left: 0;
  }
`;

export const ContainerInput = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors['gray-10']};
  margin-right: 2rem;
  flex: 1;

  &:last-child {
    border-right: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-right: 0;
    border-right: none;
  }
`;
