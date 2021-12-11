import styled, { css } from 'styled-components';

export const ContainerFilters = styled.div`
  width: 200px;

  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
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

interface IFilterOptions {
  isExpanded: boolean;
}
export const FilterOptions = styled.div<IFilterOptions>`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s 0.5s;
  max-height: 160px;
  overflow: auto;

  ${({ isExpanded }) =>
    isExpanded &&
    css`
      transition: all 0.2s 0s;
      max-height: 360px;
    `}
`;

export const FilterOptionContainer = styled.div`
  margin: 0.15rem 0;
  display: flex;
  align-items: center;
`;

export const FilterOptionLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  font-weight: 600;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.colors['gray-80']};

  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  font-weight: 400;
  color: ${({ theme }) => theme.colors['gray-80']};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 1rem;
`;
