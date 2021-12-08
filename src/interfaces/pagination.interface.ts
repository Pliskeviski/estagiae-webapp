interface IPaginationFilterSection {
  label: string;
  options: string[];
}

export interface IPaginatedResponse<T> {
  data: T[];
  hasMore: boolean;
  page: number;
  size: number;
  total: number;
  filterSections: IPaginationFilterSection[];
}

export interface ILoadMore {
  page: number;
  size: number;
}
