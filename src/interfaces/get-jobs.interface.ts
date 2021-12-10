export interface IGetJobsInterface {
  page: number;
  size: number;
  search?: string;
  company?: string;
  countryId?: string;
  stateId?: string;
  cityId?: string;
  industries?: string[];
  responsabilities?: string[];
}
