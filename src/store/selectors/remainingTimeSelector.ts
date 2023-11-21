import { createSelector } from "@reduxjs/toolkit";
import elapsedTimeSelector from "./elapsedTimeSelector";
import totalDurationSelector from "./totalDurationSelector";

const remainingTimeSelector = createSelector(totalDurationSelector, elapsedTimeSelector, 
  (totalDuration, elapsedTime): number => totalDuration - elapsedTime
);

export default remainingTimeSelector;
