import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Workout } from "../../routines";
import routineSelector from "./routineSelector";

const weekSelector = (state: RootState): number | null => state.activity.week;
const daySelector = (state: RootState): number | null => state.activity.day;

const workoutSelector = createSelector(routineSelector, weekSelector, daySelector,
  (routine, week, day): Workout | null => {
    if (!routine) return null;
    const workout = routine.workouts[week ?? 0][day ?? 0];
    if (!workout) return null;
    return workout;
  }
);

export default workoutSelector;
