import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ENDPOINTS } from '../../endpoints/endpoints';
import { displayNotification } from '../../utils/notification';
import { schemaValidation } from './device.fields';
import { IDevice, IPayload } from './device.types';

export const useDevice = () => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetchingDevices, setIsFetchingDevices] = useState(false);
  const [orderBy, setOrderBy] = useState('hdd_capacity');
  const [filter, setFilter] = useState('ALL');
  const [isOpenAddDeviceModal, setIsOpenAddDeviceModal] = useState(false);
  const [isOpenUpdateDeviceModal, setIsOpenUpdateDeviceModal] = useState(false);
  const selectedDeviceIdRef = useRef('');

  const formMethods = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const { trigger, getValues, reset } = formMethods;

  const serializeDevices = (devices: IDevice[]) => {
    const serializedDevices = devices?.map((item: IDevice) => {
      const device = { ...item, hdd_capacity: Number(item.hdd_capacity) };

      return device;
    });
    return serializedDevices;
  };

  const sortDevices = () => {
    const orderedDevices = devices?.sort((a, b) => {
      return a[orderBy as keyof typeof a] > b[orderBy as keyof typeof b] ? 1 : -1;
    });

    return orderedDevices;
  };

  const filterDevices = (devices: IDevice[]) => {
    if (filter === 'ALL') {
      return devices;
    }

    const filteredDevices = devices.filter((device: IDevice) => device['type'] === filter);
    return filteredDevices;
  };

  const filteredAndSortedDevices = filterDevices(sortDevices());

  const hasDevices = filteredAndSortedDevices?.length > 0;

  const resetForm = () => {
    reset({ system_name: '', type: '', hdd_capacity: '' });
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterValue = e.target.value;
    setFilter(filterValue);
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortValue = e.target.value;
    setOrderBy(sortValue);
  };

  const handleOpenAddDeviceModal = () => {
    setIsOpenAddDeviceModal(true);
    resetForm();
  };

  const handleCloseAddDeviceModal = () => {
    setIsOpenAddDeviceModal(false);
  };

  const handleOpenUpdateDeviceModal = (device: IDevice) => {
    const { id, system_name, type, hdd_capacity } = device;
    reset({ system_name, type, hdd_capacity });
    selectedDeviceIdRef.current = id;
    setIsOpenUpdateDeviceModal(true);
  };

  const handleCloseUpdateDeviceModal = () => {
    setIsOpenUpdateDeviceModal(false);
    resetForm();
  };

  const handleDelete = async (id: string) => {
    try {
      setIsLoading(true);
      await fetch(ENDPOINTS.devices.delete(id), {
        method: 'DELETE',
      });
      const filteredDevices = devices.filter((device: IDevice) => device.id !== id);
      setDevices(filteredDevices);
      displayNotification({
        message: 'The device has been successfully deleted',
        type: 'success',
      });
    } catch (e) {
      displayNotification({ message: 'Something went wrong. Try again', type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  const getPayload = (device: IPayload) => {
    const { system_name } = device;
    const payload = { ...device, system_name: system_name.toUpperCase() };
    return payload;
  };

  const handleSave = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    try {
      setIsLoading(true);
      const formValues = getValues();
      const payload = getPayload(formValues as IPayload);
      const response = await fetch(ENDPOINTS.devices.post, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setDevices((prevDevices) => {
        const serializedDevices = serializeDevices([...prevDevices, data]);
        return serializedDevices;
      });
      displayNotification({ message: 'The device has been saved successfully', type: 'success' });
      resetForm();
    } catch (e) {
      displayNotification({ message: 'Something went wrong. Try again', type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = async () => {
    const isValid = await trigger();
    if (!isValid) return;

    try {
      setIsLoading(true);
      const formValues = getValues();
      const payload = getPayload(formValues as IPayload);
      await fetch(ENDPOINTS.devices.put(selectedDeviceIdRef.current), {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(payload),
      });
      setDevices((prevDevices) => {
        const filteredDevices = prevDevices.filter(
          (device: IDevice) => device.id !== selectedDeviceIdRef.current,
        );
        const devices = [
          ...filteredDevices,
          {
            ...payload,
            hdd_capacity: Number(payload.hdd_capacity),
            id: selectedDeviceIdRef.current,
          },
        ];
        return devices;
      });
      displayNotification({ message: 'The device has been successfully updated', type: 'success' });
    } catch (e) {
      displayNotification({ message: 'Something went wrong. Try again', type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDevices = useCallback(async () => {
    try {
      setIsFetchingDevices(true);
      const response = await fetch(ENDPOINTS.devices.getAll);
      const data = await response.json();
      setDevices(serializeDevices(data));
    } catch (e) {
      displayNotification({ message: 'Something went wrong. Unable to load data', type: 'danger' });
    } finally {
      setIsFetchingDevices(false);
    }
  }, []);

  useEffect(() => {
    fetchDevices();
  }, [fetchDevices]);

  return {
    filteredAndSortedDevices,
    hasDevices,
    handleFilter,
    handleSort,
    handleOpenAddDeviceModal,
    handleCloseAddDeviceModal,
    handleOpenUpdateDeviceModal,
    handleCloseUpdateDeviceModal,
    handleDelete,
    handleSave,
    handleEdit,
    isLoading,
    isFetchingDevices,
    isOpenAddDeviceModal,
    isOpenUpdateDeviceModal,
    formMethods,
  };
};
