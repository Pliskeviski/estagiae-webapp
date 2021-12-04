import api from '@axios';
import { ILoadMore, IPaginatedResponse } from 'src/hooks/useInfinityScroll';
import { apiRoutes } from 'src/services/routes';

export const getJobsList = (
  params: ILoadMore
): Promise<IPaginatedResponse<any>> =>
  api.get(apiRoutes.job, {
    params,
  });
