export interface IFields {
  description: string;
  value: string;
}

export interface ISelectionField {
  label: string;
  name: string;
  required?: boolean;
  fields: IFields[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
