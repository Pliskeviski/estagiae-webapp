import { LimitedContainerCss } from 'src/theme/globalStyles';
import styled from 'styled-components';

export const ContainerJobList = styled.section`
  ${LimitedContainerCss};
  margin: 0 auto;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
    margin-top: 0;
  }
`;

export const ContainerFilterDetails = styled.div``;

export const ContainerJobs = styled.div``;

export const ContainerJobsHeader = styled.div`
  display: flex;
  width: 100%;
`;

export const TitleContainer = styled.h3`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.h5};
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    margin-bottom: 1rem;
  }
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
  margin-bottom: 0.8rem;
  height: auto;
  align-self: center;
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

export const JobsCardsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingContainer = styled.div`
  margin-top: 3rem;
  height: 80px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
