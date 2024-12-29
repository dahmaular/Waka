import reducer, { updateVehicles } from './slices';

describe('realTimeTracking slice', () => {
  it('should update vehicles state correctly', () => {
    const initialState = { vehicles: [] };
    const newVehicles = [{ id: '1', latitude: 10, longitude: 20 }];
    const state = reducer(initialState, updateVehicles(newVehicles));
    expect(state.vehicles).toEqual(newVehicles);
  });
});
