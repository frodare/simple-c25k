import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoutineKey } from '../../routines';

export interface ActivityState {
  routine: RoutineKey | null;
  week: number | null;
  day: number | null;
  start: number | null;
  pausedOn: number | null;
  now: number | null;
  locked: boolean;
}

const initialState: ActivityState = {
  routine: '9wc25k',
  week: 0,
  day: 0,
  now: null,
  start: new Date().getTime() - 0,
  pausedOn: null,
  locked: false
}

interface SetWorkoutPayload {
  routine: RoutineKey;
  week: number;
  day: number;
}

interface SetStartPayload {
  start: number;
  now: number;
}

const activity = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    start: (state, action: PayloadAction<number>) => {
      if (start !== null) return;
      state.pausedOn = null;
      state.now = action.payload;
      state.start = action.payload;
    },
    setStart: (state, action: PayloadAction<SetStartPayload>) => {
      state.start = action.payload.start;
      state.now = action.payload.now;
      if (state.pausedOn) {
        state.pausedOn = state.now;
      }
    },
    pause: (state, action: PayloadAction<number>) => {
      state.now = action.payload;
      if (state.start === null) {
        state.start = action.payload;
        state.pausedOn = null;
        return; 
      }
      if (state.pausedOn === null) {
        state.pausedOn = action.payload;
        return;
      }
      const pausedTime = action.payload - state.pausedOn;
      state.start += pausedTime;
      state.pausedOn = null;
    },
    reset: state => {
      state.start = null;
      state.pausedOn = null;
    },
    setWorkout: (state, action: PayloadAction<SetWorkoutPayload>) => {
      const { routine, week, day } = action.payload;
      if (state.routine === routine && state.week === week && state.day === day) return;
      state.routine = routine;
      state.week = week;
      state.day = day;
    },
    tick: (state, action: PayloadAction<number>) => {
      state.now = action.payload;
    },
    setLocked: (state, action: PayloadAction<boolean>) => {
      state.locked = action.payload;
    }
  }
});

export const { 
  start,
  setStart,
  pause,
  reset,
  setWorkout,
  tick,
  setLocked
} = activity.actions

export default activity;
