/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Filters } from 'src/components/filters';
import { JobCard } from 'src/components/job-card';
import { Loading } from 'src/components/loading';
import { Search } from 'src/components/search';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import useJobsListStore from 'src/stores/jobs-list.store';
import {
  AmountOfJobs,
  ContainerFilterDetails,
  ContainerJobList,
  ContainerJobs,
  ContainerJobsHeader,
  EmptyMessage,
  JobsCardsList,
  LoadingContainer,
  OrderByContainer,
  OrderByLabel,
  OrderedByValue,
  TitleContainer,
} from './styles';

const RenderJobs = React.memo(() => {
  const { onLoadMore, onReset, items, hasMore, hasError, page, total } =
    useJobsListStore();

  const jobs: IJobPreview[] = items;

  useEffect(() => {
    if (page === 0) {
      onLoadMore();
    }
  }, [onLoadMore, page]);

  return (
    <>
      <ContainerJobsHeader>
        <TitleContainer>
          Resultados {total > 0 && <AmountOfJobs>{total}</AmountOfJobs>}
        </TitleContainer>
        <OrderByContainer>
          <OrderByLabel>Ordernar por </OrderByLabel>
          <OrderedByValue>Criação</OrderedByValue>
        </OrderByContainer>
      </ContainerJobsHeader>

      <InfiniteScroll
        dataLength={items.length}
        next={onLoadMore}
        hasMore={hasMore}
        loader={
          <LoadingContainer>
            <Loading color="primary" />
          </LoadingContainer>
        }
        endMessage={
          <EmptyMessage>
            {items.length === 0 && 'Nenhum resultado encontrado'}
          </EmptyMessage>
        }
        // refreshFunction={onReset}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center', userSelect: 'none' }}>
        //     Pull down to refresh
        //   </h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center', userSelect: 'none' }}>
        //     &#8593; Release to refresh
        //   </h3>
        // }
      >
        <JobsCardsList>
          {jobs.map((job, index) => (
            <JobCard key={`job-${job.id}-${index}`} job={job} />
          ))}
        </JobsCardsList>
      </InfiniteScroll>
    </>
  );
});

export const JobsListContainer = React.memo(() => {
  return (
    <>
      <Search />
      <ContainerJobList>
        <ContainerFilterDetails>
          <TitleContainer>Filtros</TitleContainer>

          <Filters />
        </ContainerFilterDetails>

        <ContainerJobs>
          <RenderJobs />
        </ContainerJobs>
      </ContainerJobList>
    </>
  );
});
