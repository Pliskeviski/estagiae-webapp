import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Search } from 'src/components/search';
import { useInfinityScroll } from 'src/hooks/useInfinityScroll';
import { getJobsList } from 'src/services/job.service';
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

const RenderJobs = React.memo(() => {
  const { onLoadMore, onReset, items, hasMore, hasError } = useInfinityScroll({
    loadMore: getJobsList,
  });

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={onLoadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      refreshFunction={onReset}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
      }
      releaseToRefreshContent={
        <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
      }
    >
      {items.map((i, index) => (
        <div key={index}>
          div - #{index} <br />
          <br />
          <br />
          <br />{' '}
        </div>
      ))}
    </InfiniteScroll>
  );
});

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
              Resultados <AmountOfJobs>640</AmountOfJobs>
            </TitleContainer>
            <OrderByContainer>
              <OrderByLabel>Ordernar por </OrderByLabel>
              <OrderedByValue>Criação</OrderedByValue>
            </OrderByContainer>
          </ContainerJobsHeader>

          <RenderJobs />
        </ContainerJobs>
      </ContainerJobList>
    </>
  );
});
