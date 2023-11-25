import { FC } from "react";
import { useAppSelector } from "../store";
import intervalProgressSelector from "../store/selectors/intervalProgressSelector";
import formatTime from "../utils/formatTime";
import { createSelector } from "@reduxjs/toolkit";
import intervalsSelector from "../store/selectors/intervalsSelector";

interface Props {
  className?: string;
}

const intervalCountSelector = createSelector(
  intervalsSelector,
  (intervals) => intervals?.length ?? 0
);

const CurrentInterval: FC<Props> = ({ className }) => {
  const interval = useAppSelector(intervalProgressSelector);
  const intervalCount = useAppSelector(intervalCountSelector);
  const paused = useAppSelector(state => state.activity.pausedOn !== null);
  const color = interval?.type === 'run' ? '255,100,200' : '100,100,255';
  const glow = ` drop-shadow-[0_0px_10px_rgba(${color},1)]`;

  const type = paused ? 'PAUSED' : interval?.type ?? '????';

  const wakeLocked = useAppSelector(state => state.status.wakeLocked);

  return (
    <div className={"block m-12 p-6 bg-gray-900 border border-gray-200 rounded-lg shadow-lg bg-opacity-80 text-center " + className}>
      <h5 className={"mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white uppercase " + glow}>
        {type}
      </h5>
      <span className='text-lg font-bold opacity-80 ml-4 text-white'>{(interval?.index ?? 0) + 1} of {intervalCount}</span>
      <p className={'text-8xl font-thin mt-10 mb-10 text-white' + glow}>
        {formatTime(interval?.remaining ?? -1)}
      </p>
      <p className='text-lg font-bold opacity-80 text-white'>
        {wakeLocked ? 'WAKE LOCKED' : ''}
      </p>
    </div>
  )
}

export default CurrentInterval;
