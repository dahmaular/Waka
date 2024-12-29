import apiClient from './apiClient';

export const fetchVehicleLocations = async () => {
  const response = await apiClient.get('/vehicles');
  return response.data;
};

export const fetchRoutes = async (start: string, end: string) => {
  const response = await apiClient.get(`/routes?start=${start}&end=${end}`);
  return response.data;
};
