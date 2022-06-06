import { filterFields, sortFields } from './device.fields';
import Select from '../../components/SelectionGenericField/selection-generic-field.component';
import DeviceGrid from './components/DeviceGrid/device-grid.component';
import { Container, Box, Button, Content } from './device.styles';
import EmptyDevice from '../../components/EmptyDevice/empty-device.component';
import { useDevice } from './device.hook';
import DeviceModal from './components/Modal/Device/device-modal.component';
import Loading from '../../components/Loading/loading.component';

const Device = () => {
  const {
    filteredAndSortedDevices,
    hasDevices,
    isLoading,
    isFetchingDevices,
    isOpenAddDeviceModal,
    isOpenUpdateDeviceModal,
    formMethods,
    handleFilter,
    handleSort,
    handleOpenAddDeviceModal,
    handleCloseAddDeviceModal,
    handleOpenUpdateDeviceModal,
    handleCloseUpdateDeviceModal,
    handleDelete,
    handleSave,
    handleEdit,
  } = useDevice();


  if (isFetchingDevices) return <Loading />;

  return (
    <Container>
      <Content>
        <Box>
          <Select name="filter" onChange={handleFilter} label='Device Type:' fields={filterFields} />
          <Select name="sort" onChange={handleSort} label='Sort by:' fields={sortFields} />
          <Button type='button' onClick={handleOpenAddDeviceModal}>
            Add a new device
          </Button>
        </Box>
        {hasDevices ?
          <DeviceGrid
            devices={filteredAndSortedDevices}
            handleDelete={handleDelete}
            handleOpenUpdateDeviceModal={handleOpenUpdateDeviceModal}
            isLoading={isLoading}
          />
          :
          <EmptyDevice />}
      </Content>

      {/* Add device */}
      <DeviceModal
        title='Add device'
        isLoading={isLoading}
        isOpen={isOpenAddDeviceModal}
        onSubmit={handleSave}
        onCancel={handleCloseAddDeviceModal}
        formMethods={formMethods}
      />

      {/* Update device */}
      <DeviceModal
        title='Update device'
        isLoading={isLoading}
        isOpen={isOpenUpdateDeviceModal}
        onSubmit={handleEdit}
        onCancel={handleCloseUpdateDeviceModal}
        formMethods={formMethods}
      />
    </Container>
  );
};

export default Device;
