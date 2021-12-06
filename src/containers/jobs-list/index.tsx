import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Filters } from 'src/components/filters';
import { JobCard } from 'src/components/job-card';
import { Search } from 'src/components/search';
import { useInfinityScroll } from 'src/hooks/useInfinityScroll';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { getJobsList } from 'src/services/job.service';
import {
  AmountOfJobs,
  ContainerFilterDetails,
  ContainerJobList,
  ContainerJobs,
  ContainerJobsHeader,
  JobsCardsList,
  OrderByContainer,
  OrderByLabel,
  OrderedByValue,
  TitleContainer,
} from './styles';

const RenderJobs = React.memo(() => {
  const { onLoadMore, onReset, items, hasMore, hasError, total } =
    useInfinityScroll({
      loadMore: getJobsList,
    });

  const jobs: IJobPreview[] = items;

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
        loader={<h4>Loading...</h4>}
        // refreshFunction={onReset}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: 'center', userSelect: 'none' }}>
        //     &#8b5e9b54; Pull down to refresh
        //   </h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: 'center', userSelect: 'none' }}>
        //     &#8593; Release to refresh
        //   </h3>
        // }
      >
        <JobsCardsList>
          {jobs.map((job) => (
            <JobCard key={`job-${job.id}`} job={job} />
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
