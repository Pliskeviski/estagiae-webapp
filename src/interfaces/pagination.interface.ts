export interface IPaginationFilterSection {
  label: string;
  type: number;
  options: {
    label: string;
    value: number | string;
  }[];
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
