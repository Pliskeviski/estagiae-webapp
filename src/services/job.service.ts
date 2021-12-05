import api from '@axios';
import { ILoadMore, IPaginatedResponse } from 'src/hooks/useInfinityScroll';
import { IJobPreview } from 'src/interfaces/job-preview.interface';
import { apiRoutes } from 'src/services/routes';

export const getJobsList = (
  params: ILoadMore
): Promise<IPaginatedResponse<IJobPreview>> =>
  api.get(apiRoutes.job, {
    params,
  });
