import * as yup from 'yup';
import { DeviceSorting } from '../../enums/device-sort';
import { DeviceTypes } from '../../enums/device-type';

export const schemaValidation = yup.object().shape({
  system_name: yup.string().required('This field is required'),
  type: yup.string().required('This field is required'),
  hdd_capacity: yup.number().typeError('This field must to be a number'),
});

export const filterFields = [
  { value: 'ALL', description: 'ALL' },
  { value: DeviceTypes.MAC, description: 'MAC' },
  { value: DeviceTypes.WINDOWS_SERVER, description: 'WINDOWS SERVER' },
  { value: DeviceTypes.WINDOWS_WORKSTATION, description: 'WINDOWS WORKSTATION' },
];

export const sortFields = [
  { value: DeviceSorting.HDD_CAPACITY, description: 'HDD CAPACITY' },
  { value: DeviceSorting.SYSTEM_NAME, description: 'SYSTEM NAME' },
];
