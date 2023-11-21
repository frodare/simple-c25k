import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import routines, { Routine } from "../../routines";

const routineIdSelector = (state: RootState): string | null => state.activity.routine;

const routineSelector = createSelector(routineIdSelector, (routineId): Routine | null => {
  return routines.find((routine) => routine.id === routineId) ?? null;
});

export default routineSelector;
