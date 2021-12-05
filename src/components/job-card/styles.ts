import styled from 'styled-components';

export const JobCardContainer = styled.div`
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors['light-blue']};
  border-radius: 0.5rem;
  height: max-content;
  border-radius: 0.2rem;
`;

export const JobCardHeader = styled.div`
  display: flex;
`;

export const CompanyLogoContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const JobCardTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body.large};
  color: ${({ theme }) => theme.colors['gray-80']};
  font-weight: 600;
`;

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

interface IItemBadge {
  backgroundColor: string;
  textColor: string;
}
export const ItemBadge = styled.div<IItemBadge>`
  padding: 0.2rem 1rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  width: auto;
  margin-right: 0.5rem;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
`;

export const LocationText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  color: ${({ theme }) => theme.colors['gray-80']};
  font-weight: 600;
  margin: 0;
`;

export const DescriptionText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  color: ${({ theme }) => theme.colors['gray-50']};
  font-weight: 500;
`;
