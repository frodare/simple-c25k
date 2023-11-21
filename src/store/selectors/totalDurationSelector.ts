import { createSelector } from "@reduxjs/toolkit";
import intervalsSelector from "./intervalsSelector";

const totalDurationSelector = createSelector(intervalsSelector, (intervals): number => {
  return intervals.reduce((acc, interval) =>
    acc + interval.duration, 0) * 1000;
});

export default totalDurationSelector;
