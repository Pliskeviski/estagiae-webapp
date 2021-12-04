import styled from 'styled-components';
import { Input } from '../input';

export const SearchContainer = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors['gray-10']};
  padding: 1rem 0;
  box-shadow: rgb(227 227 227 / 20%) 0px 20px 24px;
`;

export const SearchLimitedContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.containers.large};
  margin: 0 auto;

  display: flex;
`;

export const StyledInput = styled(Input)`
  input {
    border: none;
  }
`;

export const ContainerInput = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors['gray-10']};
  margin-right: 2rem;

  &:last-child {
    border-right: none;
  }
`;
