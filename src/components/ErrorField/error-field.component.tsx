import { useFormContext } from 'react-hook-form';
import { Error } from './error-field.styles';
import { IErrorField } from './error-field.type';

const ErrorField = ({ name }: IErrorField): JSX.Element => {
  const {
    formState: { errors },
  } = useFormContext();

  return <div>{errors[name] && <Error>{errors[name].message}</Error>}</div>;
};

export default ErrorField;
