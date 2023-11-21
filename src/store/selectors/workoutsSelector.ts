import { createSelector } from "@reduxjs/toolkit";
import { RoutineKey, Workout } from "../../routines";
import routineSelector from "./routineSelector";

interface ComputedWorkout extends Workout {
  week: number;
  day: number;
  routine: RoutineKey;
}

const workoutsSelector = createSelector(routineSelector,
  (routine): ComputedWorkout[] => {
    if (!routine) return [];
    return routine.workouts.reduce(
      (acc: ComputedWorkout[], week, weekIndex) => {
        return [
          ...acc,
          ...week.map((workout, dayIndex) => ({ 
            ...workout, 
            week: weekIndex, 
            day: dayIndex,
            routine: routine.id,
          }))
        ];
      },
      []
    );
  }
);

export type { ComputedWorkout };
export default workoutsSelector;
