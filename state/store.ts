
import { configureStore } from '@reduxjs/toolkit';
import realTimeTrackingReducer from '../features/realTimeTracking/slices';
import routePlannerReducer from '../features/routePlanner/slices';
import offlineSupportReducer from '../features/offlineSupport/slices';

const store = configureStore({
  reducer: {
    realTimeTracking: realTimeTrackingReducer,
    routePlanner: routePlannerReducer,
    offlineSupport: offlineSupportReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
