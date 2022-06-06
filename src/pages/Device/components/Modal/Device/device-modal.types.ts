import { FieldValues, UseFormReturn } from 'react-hook-form';

export interface IInput {
  hasError: boolean;
}

export interface IModal {
  title: string;
  isOpen: boolean;
  isLoading: boolean;
  onCancel: () => void;
  onSubmit: () => Promise<void>;
  formMethods: UseFormReturn<FieldValues, any>;
}
