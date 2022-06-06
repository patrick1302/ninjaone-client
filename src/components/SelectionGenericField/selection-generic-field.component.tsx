import Typography from '../Typography/typography.component';
import { IFields, ISelectionField } from '../utils/types';
import { Option, Select, SelectBox } from './selection-generic-field.styles';

const SelectionField = ({ fields, onChange, label }: ISelectionField): JSX.Element => {
  return (
    <SelectBox>
      <Typography as="label" fontWeight='500'>{label}</Typography>
      <Select onChange={onChange}>
        {fields.map((field: IFields) => (
          <Option key={field.value} value={field.value}>
            {field.description}
          </Option>
        ))}
      </Select>
    </SelectBox>
  );
};
export default SelectionField;
