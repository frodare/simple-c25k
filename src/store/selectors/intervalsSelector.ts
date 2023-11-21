import { createSelector } from "@reduxjs/toolkit";
import { Interval } from "../../routines";
import workoutSelector from "./workoutSelector";

interface ComputedInterval extends Interval {
  start: number;
  end: number;
  index: number;
}

const intervalsSelector = createSelector(workoutSelector,
  (workout): ComputedInterval[] => {
    if (!workout) return [];
    const rawIntervals = new Array(workout.repeat).fill(null).reduce(
      (acc: Interval[]) => {
        return [...acc, ...workout.intervals.map((interval) => ({ ...interval }))];
      },
      []
    );
  
    let prevStart = 0;

    return rawIntervals.map((interval, index) => {
      const prevDuration = index ? rawIntervals[index - 1].duration : 0;
      const start = prevStart + prevDuration * 1000;
      const end = start + interval.duration * 1000;
      prevStart = start;
      return {
        ...interval,
        start,
        index,
        end
      };
    });
  }
);

export type { ComputedInterval };
export default intervalsSelector;
