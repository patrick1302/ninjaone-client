import { DeviceTypes } from '../../../../../enums/device-type';

export const deviceFields = [
  { value: '', description: 'Select a device type' },
  { value: DeviceTypes.MAC, description: 'MAC' },
  { value: DeviceTypes.WINDOWS_SERVER, description: 'WINDOWS SERVER' },
  { value: DeviceTypes.WINDOWS_WORKSTATION, description: 'WINDOWS WORKSTATION' },
];
