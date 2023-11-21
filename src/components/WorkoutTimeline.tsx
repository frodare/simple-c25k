import { FC } from "react";
import { Interval } from "../routines";
import { useAppSelector } from "../store";
import intervalsSelector from "../store/selectors/intervalsSelector";
import ElapsedDisplay from "./ElapsedDisplay";
import RemainingDisplay from "./RemainingDisplay";

interface IntervalTimelineItemProps {
  interval: Interval;
  percentage: number;
}

const IntervalTimelineItem: FC<IntervalTimelineItemProps> = ({ interval, percentage }) => {
  const color = interval.type === 'walk' ? 'bg-gray-300' : 'bg-blue-500';
  return (
    <div
      className={'text-center h-full ' + color}
      style={{
        width: `${percentage * 100}%`,
      }}>
    </div>
  )
};

const WorkoutTimeline: FC = () => {
  const intervals = useAppSelector(intervalsSelector);
  const totalDuration = intervals.reduce((acc, interval) => acc + interval.duration, 0);
  const intervalPercentages = intervals.map((interval) => interval.duration / totalDuration);
  return (
    <div className='flex h-full relative flex-row'>
      {intervals.map((interval, index) =>
        <IntervalTimelineItem key={index} interval={interval} percentage={intervalPercentages[index]} />
      )}
      <ElapsedDisplay className='absolute left-0 bottom-0' />
      <RemainingDisplay className='absolute right-0 bottom-0' />
    </div>
  );
};

export default WorkoutTimeline;
