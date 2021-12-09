import { ISelectOption } from './select-option.interface';

export interface IJobFilters {
  text?: string;
  location?: ISelectOption;
  company?: ISelectOption;
}
