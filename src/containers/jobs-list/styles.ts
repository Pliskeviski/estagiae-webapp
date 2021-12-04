import { LimitedContainerCss } from 'src/theme/globalStyles';
import styled from 'styled-components';

export const ContainerJobList = styled.section`
  ${LimitedContainerCss};
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
`;

export const ContainerFilterDetails = styled.div``;

export const ContainerJobs = styled.div``;

export const ContainerJobsHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const TitleContainer = styled.h3`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes.h5};
`;

export const AmountOfJobs = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.body.medium};
  color: ${({ theme }) => theme.colors['gray-50']};
  margin-left: 0.1rem;
`;

export const OrderByContainer = styled.div`
  margin-left: auto;
  font-size: ${({ theme }) => theme.fontSizes.body.small};
  font-weight: bold;
  display: flex;
  align-items: center;
`;

export const OrderByLabel = styled.div`
  color: ${({ theme }) => theme.colors['gray-50']};
  display: flex;
  align-items: center;
`;

export const OrderedByValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 0.4rem;
`;
