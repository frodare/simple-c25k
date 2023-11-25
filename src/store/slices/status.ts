import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface StatusState {
  wakeLocked: boolean;
}

const initialState: StatusState = {
  wakeLocked: false,
}

const status = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setWakeLocked: (state, action: PayloadAction<boolean>) => {
      state.wakeLocked = action.payload;
    }
  }
});

export const { 
  setWakeLocked,
} = status.actions

export default status;
