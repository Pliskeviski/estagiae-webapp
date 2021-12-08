import api from '@axios';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import {
  ILoadMore,
  IPaginatedResponse,
} from 'src/interfaces/pagination.interface';
import { apiRoutes } from 'src/services/routes';

export const getJobsList = (
  params: ILoadMore
): Promise<IPaginatedResponse<IJobPreview>> =>
  api.get(apiRoutes.job, {
    params,
  });
