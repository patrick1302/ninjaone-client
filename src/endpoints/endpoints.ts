const BASE_URL = 'http://localhost:3000';

export const ENDPOINTS = {
  devices: {
    getAll: `${BASE_URL}/devices`,
    getOne: (id: string) => `${BASE_URL}/devices/${id}`,
    post: `${BASE_URL}/devices`,
    put: (id: string) => `${BASE_URL}/devices/${id}`,
    delete: (id: string) => `${BASE_URL}/devices/${id}`,
  },
};
