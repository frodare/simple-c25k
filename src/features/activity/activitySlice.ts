import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoutineKey } from '../../routines';

// type WorkoutKey = [number, number];

export interface ActivityState {
  routine: RoutineKey | null;
  week: number | null;
  day: number | null;
  start: number | null;
  pausedOn: number | null;
  now: number | null;
}

const initialState: ActivityState = {
  routine: '9wc25k',
  week: 0,
  day: 0,
  now: null,
  start: new Date().getTime() - 0,
  pausedOn: null
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

// const nextWorkoutKeyOld = (routine: Routine, workout: WorkoutKey): WorkoutKey | null => {
//   const [week, day] = workout;
//   if (week > routine.workouts.length - 1) return null;
//   const nextDay: WorkoutKey = [week, day + 1];
//   const nextWeek: WorkoutKey = [week + 1, 0];
//   if (routine.workouts[nextDay[0]][nextDay[1]]) return nextDay;
//   return nextWorkoutKey(routine, nextWeek);
// }

// const nextWorkoutKey = (routine: Routine, week: number, day: number, step: number): WorkoutKey | null => {
//   // const [week, day] = workout;
//   const maxWeek = routine.workouts.length - 1;
//   if (week < 0 || week > maxWeek) return null;
//   const nextDay = day + step;
//   // const nextWeek: WorkoutKey = [week + step, 0];
//   const next = routine.workouts?.[week]?.[nextDay];
//   if (next) return [week, nextDay];


//   return nextWorkoutKey(routine, week + 1, 0, nextWeek);
// }



export const activitySlice = createSlice({
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
    },
    pause: (state, action: PayloadAction<number>) => {
      if (state.start === null) {
        state.start = action.payload;
        state.pausedOn = null;
        state.now = action.payload;
        return; 
      }
      state.now = action.payload;
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
    // setWorkout: (state, action: PayloadAction<SetWorkoutPayload>) => {
    setWorkout: (state, action: PayloadAction<SetWorkoutPayload>) => {
      const { routine, week, day } = action.payload;
      if (state.routine === routine && state.week === week && state.day === day) return;
      state.routine = routine;
      state.week = week;
      state.day = day;
      // state.start = null;
      // state.pausedOn = null;
    },
    // nextWorkout: state => {
    //   if (state.routine === null || state.week === null || state.day === null) return;
    //   const routine = routines.find(r => r.id === state.routine);
    //   if (!routine) return state;
    //   const next = nextWorkoutKey(routine, [state.week, state.day]);
    //   if (next === null) return state;
    //   state.week = next[0];
    //   state.day = next[1];
    // },
    tick: (state, action: PayloadAction<number>) => {
      state.now = action.payload;
    }
  }
});

export const { start, setStart, pause, reset, setWorkout, tick } = activitySlice.actions

export default activitySlice.reducer