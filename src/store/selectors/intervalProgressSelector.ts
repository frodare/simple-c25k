import { createSelector } from "@reduxjs/toolkit";
import elapsedTimeSelector from "./elapsedTimeSelector";
import intervalSelector from "./intervalSelector";
import { ComputedInterval } from "./intervalsSelector";

interface CurrentInterval extends ComputedInterval {
  elapsed: number;
  remaining: number;
}

const intervalProgressSelector = createSelector(intervalSelector, elapsedTimeSelector,
  (interval, elapsed): CurrentInterval | null => {
    if (!interval) return null;
    const elapsedInterval = elapsed - interval.start;
    return {
      ...interval,
      elapsed: elapsedInterval,
      remaining: (interval.duration * 1000) - elapsedInterval,
    };
  }
);

export type { CurrentInterval };
export default intervalProgressSelector;
