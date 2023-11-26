import { FC } from "react";
import { Interval } from "../routines";
import { useAppSelector } from "../store";
import intervalsSelector from "../store/selectors/intervalsSelector";
import ElapsedDisplay from "./ElapsedDisplay";
import RemainingDisplay from "./RemainingDisplay";
import elapsedTimeSelector from "../store/selectors/elapsedTimeSelector";
import totalDurationSelector from "../store/selectors/totalDurationSelector";
import { createSelector } from "@reduxjs/toolkit";

interface IntervalTimelineItemProps {
  interval: Interval;
  percentage: number;
}

const intervalColor = (interval: Interval) => {
  if (interval.type === 'walk') return 'bg-blue-200';
  if (interval.type === 'run') return 'bg-blue-500';
  return 'bg-gray-300';
}

const IntervalTimelineItem: FC<IntervalTimelineItemProps> = ({ interval, percentage }) => {
  const color = intervalColor(interval);
  return (
    <div
      className={'text-center h-full ' + color}
      style={{
        width: `${percentage * 100}%`,
      }}>
    </div>
  )
};

const completionSelector = createSelector(elapsedTimeSelector, totalDurationSelector,
  (elapsed, total) => elapsed / total
);

const WorkoutTimeline: FC = () => {
  const intervals = useAppSelector(intervalsSelector);
  const totalDuration = intervals.reduce((acc, interval) => acc + interval.duration, 0);
  const intervalPercentages = intervals.map((interval) => interval.duration / totalDuration);
  const completion = useAppSelector(completionSelector);
  return (
    <div className='flex opacity-90 h-full relative flex-row'>
      {intervals.map((interval, index) =>
        <IntervalTimelineItem key={index} interval={interval} percentage={intervalPercentages[index]} />
      )}
      <div className='absolute left-0 bottom-0 bg-gray-500 h-full opacity-70' style={{ width: `${completion * 100}%` }} />
      <ElapsedDisplay className='absolute left-0 bottom-0' />
      <RemainingDisplay className='absolute right-0 bottom-0' />
    </div>
  );
};

export default WorkoutTimeline;
