import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Vehicle {
  id: string;
  latitude: number;
  longitude: number;
}

interface TrackingState {
  vehicles: Vehicle[];
}

const initialState: TrackingState = {
  vehicles: [],
};

const trackingSlice = createSlice({
  name: 'realTimeTracking',
  initialState,
  reducers: {
    updateVehicles(state, action: PayloadAction<Vehicle[]>) {
      state.vehicles = action.payload;
    },
  },
});

export const { updateVehicles } = trackingSlice.actions;
export default trackingSlice.reducer;
