import { RootState } from "..";
import { createSelector } from "@reduxjs/toolkit";

const startSelector = (state: RootState): number | null => state.activity.start;
const nowSelector = (state: RootState): number | null => state.activity.now;

const elapsedTimeSelector = createSelector(startSelector, nowSelector, (start, now): number => {
  if (!start || !now) return 0;
  return now - start;
});

export default elapsedTimeSelector;
