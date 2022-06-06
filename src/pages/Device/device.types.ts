type DeviceType = 'MAC' | 'WINDOWS_SERVER' | 'WINDOWS_WORKSTATION';

export interface IPayload {
  system_name: string;
  type: DeviceType;
  hdd_capacity: string | number;
}
export interface IDevice extends IPayload {
  id: string;
}
