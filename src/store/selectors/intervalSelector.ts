import { createSelector } from "@reduxjs/toolkit";
import elapsedTimeSelector from "./elapsedTimeSelector";
import intervalsSelector, { ComputedInterval } from "./intervalsSelector";

const intervalSelector = createSelector(intervalsSelector, elapsedTimeSelector,
  (intervals, elapsed): ComputedInterval | null => {
    if (!intervals.length) return null;
    const interval = intervals.find((interval) => elapsed >= interval.start && elapsed < interval.end);
    if (!interval) return intervals[intervals.length - 1];
    return interval;
  }
);

export default intervalSelector;
