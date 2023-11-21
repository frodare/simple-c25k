import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import routineSelector from "./routineSelector";
import { ComputedWorkout } from "./workoutsSelector";

const weekSelector = (state: RootState): number | null => state.activity.week;
const daySelector = (state: RootState): number | null => state.activity.day;

const workoutSelector = createSelector(routineSelector, weekSelector, daySelector,
  (routine, week, day): ComputedWorkout | null => {
    if (!routine) return null;
    const workout = routine.workouts[week ?? 0][day ?? 0];
    if (!workout) return null;
    return {
      ...workout,
      week: week ?? 0,
      day: day ?? 0,
      routine: routine.id,
    };
  }
);

export default workoutSelector;
