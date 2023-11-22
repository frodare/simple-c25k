import { FC } from "react";
import { useAppSelector } from "../store";
import workoutSelector from "../store/selectors/workoutSelector";

interface Props {
  className?: string;
}

const formatIndexNumber = (n: number | undefined): string => {
  if (n == null) return '??';
  return n + 1 + '';
}

const CurrentWorkout: FC<Props> = ({ className }) => {
  const workout = useAppSelector(workoutSelector);
  return (
    <div className={'text-center opacity-60 ' + className}>
      <p className={'text-3xl font-thin bg-blue-100 p-2'}>
        Week: {formatIndexNumber(workout?.week)} Day: {formatIndexNumber(workout?.day)}
      </p>
    </div>
  )
}

export default CurrentWorkout;
