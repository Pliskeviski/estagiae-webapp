export interface IFilterSection {
  label: string;
  type: number;
  id: string;
  isExpanded: boolean;
  options: {
    label: string;
    id: string;
    selected: boolean;
  }[];
}
