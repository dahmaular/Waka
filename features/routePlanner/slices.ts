
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouteState {
  startPoint: string;
  endPoint: string;
  route: string[];
}

const initialState: RouteState = {
  startPoint: '',
  endPoint: '',
  route: [],
};

const routePlannerSlice = createSlice({
  name: 'routePlanner',
  initialState,
  reducers: {
    setRoutePoints(state, action: PayloadAction<{ startPoint: string; endPoint: string }>) {
      state.startPoint = action.payload.startPoint;
      state.endPoint = action.payload.endPoint;
    },
    setRoute(state, action: PayloadAction<string[]>) {
      state.route = action.payload;
    },
  },
});

export const { setRoutePoints, setRoute } = routePlannerSlice.actions;
export default routePlannerSlice.reducer;
