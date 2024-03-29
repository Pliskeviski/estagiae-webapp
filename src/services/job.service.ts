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
import { LocationType } from 'src/enums/LocationType';

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

  if (filters.location?.type === LocationType.Country) {
    mappedParams = {
      ...mappedParams,
      countryId: filters.location.value,
    };
  } else if (filters.location?.type === LocationType.State) {
    mappedParams = {
      ...mappedParams,
      stateId: filters.location.value,
    };
  } else if (filters.location?.type === LocationType.City) {
    mappedParams = {
      ...mappedParams,
      cityId: filters.location.value,
    };
  }

  const industries = filterSections
    .find((x) => x.type === 0)
    ?.options?.filter((x) => x.selected)
    .map((x) => x.id);

  if (industries?.length > 0) {
    mappedParams = {
      ...mappedParams,
      industries,
    };
  }

  const responsabilities = filterSections
    .find((x) => x.type === 1)
    ?.options?.filter((x) => x.selected)
    .map((x) => x.id);

  if (responsabilities?.length > 0) {
    mappedParams = {
      ...mappedParams,
      responsabilities,
    };
  }

  return api.get(apiRoutes.job, {
    params: mappedParams,
  });
};
