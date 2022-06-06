import { useFormContext } from 'react-hook-form';
import { IFields, ISelectionField } from '../utils/types';
import { Option, Select } from './selection-react-form-field.styles';

const SelectionField = ({ fields, name }: ISelectionField): JSX.Element => {
  const { register } = useFormContext();

  return (
    <Select {...register(name)}>
      {fields.map((field: IFields) => (
        <Option key={field.value} value={field.value} >
          {field.description}
        </Option>
      ))}
    </Select>
  );
};
export default SelectionField;
