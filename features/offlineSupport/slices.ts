
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OfflineState {
  cachedData: any[];
}

const initialState: OfflineState = {
  cachedData: [],
};

const offlineSupportSlice = createSlice({
  name: 'offlineSupport',
  initialState,
  reducers: {
    cacheData(state, action: PayloadAction<any[]>) {
      state.cachedData = action.payload;
    },
  },
});

export const { cacheData } = offlineSupportSlice.actions;
export default offlineSupportSlice.reducer;
