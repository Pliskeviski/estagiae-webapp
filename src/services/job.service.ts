import api from '@axios';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import {
  ILoadMore,
  IPaginatedResponse,
} from 'src/interfaces/pagination.interface';
import { IJobFilters } from 'src/interfaces/job-filters.interface';
import { apiRoutes } from 'src/services/routes';
import { IGetJobsInterface } from 'src/interfaces/get-jobs.interface';
import { IFilterSection } from 'src/interfaces/filter-section.interface';

export const getJobsList = (
  loadMoreParams: ILoadMore,
  filters: IJobFilters,
  filterSections: IFilterSection[]
): Promise<IPaginatedResponse<IJobPreview>> => {
  let mappedParams: IGetJobsInterface = {
    page: loadMoreParams.page,
    size: loadMoreParams.size,
    search: filters.text,
    company: filters.company?.value,
  };

  if (filters.location?.type === 0) {
    mappedParams = {
      ...mappedParams,
      countryId: filters.location.value,
    };
  } else if (filters.location?.type === 1) {
    mappedParams = {
      ...mappedParams,
      stateId: filters.location.value,
    };
  } else if (filters.location?.type === 2) {
    mappedParams = {
      ...mappedParams,
      cityId: filters.location.value,
    };
  }

  const industries = filterSections
    .find((x) => x.type === 0)
    ?.options?.filter((x) => x.selected)
    .map((x) => x.label);

  if (industries?.length > 0) {
    mappedParams = {
      ...mappedParams,
      industries,
    };
  }

  const resposabilities = filterSections
    .find((x) => x.type === 1)
    ?.options?.filter((x) => x.selected)
    .map((x) => x.label);

  if (resposabilities?.length > 0) {
    mappedParams = {
      ...mappedParams,
      resposabilities,
    };
  }

  return api.get(apiRoutes.job, {
    params: mappedParams,
  });
};
