import { FormProvider } from 'react-hook-form';
import { Modal } from 'antd';
import { deviceFields } from './device-modal.fields';
import { IModal } from './device-modal.types';
import { Button, Content, Form, FormGroup, Input } from './device-modal.styles';
import Typography from '../../../../../components/Typography/typography.component';
import Spinner from '../../../../../components/Spinner/spinner.component';
import ErrorField from '../../../../../components/ErrorField/error-field.component';
import SelectionField from '../../../../../components/SelectionReactFormField/selection-react-form-field.component';



const DeviceModal = ({ title, isOpen, onCancel, onSubmit, formMethods, isLoading }: IModal) => {
  const { register, formState: { errors } } = formMethods;

  return (
    <Modal centered visible={isOpen} onCancel={onCancel} footer={null}>
      <Content>
        <Typography as="h1" fontSize="20" lineHeight="20px" fontWeight='600'>{title}</Typography>
        <FormProvider {...formMethods}>
          <Form>
            <FormGroup>
              <Typography as="label" htmlFor="system_name" fontWeight='500' required>System name</Typography>
              <Input id="system_name" type='text' {...register('system_name')} hasError={errors?.system_name?.message} />
              <ErrorField name='system_name' />
            </FormGroup>
            <FormGroup>
              <Typography as="label" htmlFor="hdd_capacity" fontWeight='500' required>HDD Capacity (GB)</Typography>
              <Input id="hdd_capacity" type='text' {...register('hdd_capacity')} hasError={errors?.hdd_capacity?.message} />
              <ErrorField name='hdd_capacity' />
            </FormGroup>
            <FormGroup>
              <Typography as="label" fontWeight='500' required>Type</Typography>
              <SelectionField name='type' label='' fields={deviceFields} required />
              <ErrorField name='type' />
            </FormGroup>
            <Button type='button' onClick={onSubmit} disabled={isLoading}>
              {isLoading ? <Spinner fontSize={24} color="#fff" /> : 'Save'}
            </Button>
          </Form>
        </FormProvider>
      </Content>
    </Modal>
  );
};

export default DeviceModal;
