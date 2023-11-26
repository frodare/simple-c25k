import { createSelector } from "@reduxjs/toolkit";
import { Interval } from "../../routines";
import workoutSelector from "./workoutSelector";

interface ComputedInterval extends Interval {
  start: number;
  end: number;
  index: number;
}

const WARMUP: Interval = {
  duration: 5 * 60,
  type: 'warmup'
};

const COOLDOWN: Interval = {
  duration: 5 * 60,
  type: 'cooldown'
};


const repeat = (count: number) => (intervals: Interval[]): Interval[] => {
  return new Array(count).fill(null).reduce(
    (acc: Interval[]) => {
      return [...acc, ...intervals.map((interval) => ({ ...interval }))];
    },
    []
  );
}

const trimEndWalk = (intervals: Interval[]): Interval[] => {
  const lastInterval = intervals[intervals.length - 1];
  if (lastInterval.type === 'walk') {
    return intervals.slice(0, -1);
  }
  return intervals;
}

const includeWarmup = (intervals: Interval[]): Interval[] => [WARMUP, ...intervals, COOLDOWN];


const compute = (intervals: Interval[]): ComputedInterval[] => {
  let prevStart = 0;
  return intervals.map((interval, index) => {
    const prevDuration = index ? intervals[index - 1].duration : 0;
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

const intervalsSelector = createSelector(workoutSelector,
  (workout): ComputedInterval[] => {
    if (!workout) return [];
    return compute(includeWarmup(trimEndWalk(repeat(workout.repeat)(workout.intervals))));
  }
);

export type { ComputedInterval };
export default intervalsSelector;
