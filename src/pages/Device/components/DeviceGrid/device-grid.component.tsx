import {
  Button,
  ButtonBox,
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from './device-grid.styles';
import { ReactComponent as DeleteIcon } from '../../../../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../../../../assets/icons/edit.svg';
import { IDevice } from '../../device.types';
import { IDeviceTable } from './device-grid.types';
import Spinner from '../../../../components/Spinner/spinner.component';

const DeviceGrid = ({ handleDelete, handleOpenUpdateDeviceModal, devices, isLoading }: IDeviceTable) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>System Name</TableHeader>
          <TableHeader>Type</TableHeader>
          <TableHeader>Hdd Capacity (GB)</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {devices?.map((device: IDevice) => (
          <TableRow key={device.id}>
            <TableData>{device.system_name}</TableData>
            <TableData>{device.type}</TableData>
            <TableData>{device.hdd_capacity}</TableData>
            <TableData>
              {isLoading ? <Spinner fontSize={24} color="#000" /> : (
                <ButtonBox>
                  <Button onClick={() => handleDelete(device.id)}>
                    <DeleteIcon width={'12'} color='#fff' />
                  </Button>
                  <Button onClick={() => handleOpenUpdateDeviceModal(device)}>
                    <EditIcon width={'12'} color='#fff' />
                  </Button>
                </ButtonBox>
              )}
            </TableData>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DeviceGrid;
