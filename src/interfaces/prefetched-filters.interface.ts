import { IFilterSection } from './filter-section.interface';
import { IJobFilters } from './job-filters.interface';

export interface IPrefetchedFilters {
  filters: IJobFilters;
  filterSections: IFilterSection[];
  description: string;
}
