import React from 'react';
import { Search } from 'src/components/search';
import {
  AmountOfJobs,
  ContainerFilterDetails,
  ContainerJobList,
  ContainerJobs,
  ContainerJobsHeader,
  OrderByContainer,
  OrderByLabel,
  OrderedByValue,
  TitleContainer,
} from './styles';

export const JobsListContainer = React.memo(() => {
  return (
    <>
      <Search />
      <ContainerJobList>
        <ContainerFilterDetails>
          <TitleContainer>Filtros</TitleContainer>
        </ContainerFilterDetails>
        <ContainerJobs>
          <ContainerJobsHeader>
            <TitleContainer>
              Vagas <AmountOfJobs>640</AmountOfJobs>
            </TitleContainer>
            <OrderByContainer>
              <OrderByLabel>Ordernar por </OrderByLabel>
              <OrderedByValue>Criação</OrderedByValue>
            </OrderByContainer>
          </ContainerJobsHeader>
        </ContainerJobs>
      </ContainerJobList>
    </>
  );
});
