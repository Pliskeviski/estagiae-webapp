import api from '@axios';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import {
  ILoadMore,
  IPaginatedResponse,
} from 'src/interfaces/pagination.interface';
import { IJobFilters } from 'src/interfaces/job-filters.interface';
import { apiRoutes } from 'src/services/routes';

export const getJobsList = (
  params: ILoadMore & IJobFilters
): Promise<IPaginatedResponse<IJobPreview>> => {
  let mappedParams: any = {
    page: params.page,
    size: params.size,
    search: params.text,
    company: params.company?.value,
  };

  if (params.location?.type === 0) {
    mappedParams = {
      ...mappedParams,
      countryId: params.location.value,
    };
  } else if (params.location?.type === 1) {
    mappedParams = {
      ...mappedParams,
      stateId: params.location.value,
    };
  } else if (params.location?.type === 2) {
    mappedParams = {
      ...mappedParams,
      cityId: params.location.value,
    };
  }

  return api.get(apiRoutes.job, {
    params: mappedParams,
  });
};
