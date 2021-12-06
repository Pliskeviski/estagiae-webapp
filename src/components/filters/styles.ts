import styled from 'styled-components';

export const ContainerFilters = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SectionFilter = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors['gray-10']};
`;

export const SectionFilterTitle = styled.div`
  color: ${({ theme }) => theme.colors['gray-50']};
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  font-weight: bold;
  margin-top: 1.5rem;
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const FilterOptionContainer = styled.div`
  margin: 0.15rem 0;
`;

export const FilterOptionLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  font-weight: 600;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors['gray-80']};
`;
