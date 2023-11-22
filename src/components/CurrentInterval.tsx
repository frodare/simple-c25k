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
  const color = interval?.type === 'run' ? 'text-blue-700' : 'text-gray-600';
  return (
    <div className={'text-center ' + className}>
      <p className={'text-3xl font-bold font-serif uppercase ' + color}>
        {interval?.type ?? '????'} {(interval?.index ?? 0) + 1}/{intervalCount}
      </p>
      <p className={'text-5xl font-thin ' + color}>
        {formatTime(interval?.remaining ?? -1)}
      </p>
    </div>
  )
}

export default CurrentInterval;
