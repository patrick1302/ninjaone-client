import { IDevice } from '../../device.types';

export interface IDeviceTable {
  handleDelete: (id: string) => Promise<void>;
  handleOpenUpdateDeviceModal: (device: IDevice) => void;
  devices: IDevice[];
  isLoading: boolean;
}
