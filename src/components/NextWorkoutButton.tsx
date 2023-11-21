import { FC } from "react";
import { setWorkout } from "../features/activity/activitySlice";
import useNextWorkout from "../hooks/useNextWorkout";
import { useAppDispatch } from "../store";

interface Props {
  step: number;
}

const NextWorkoutButton: FC<Props> = ({ step }) => {
  const dispatch = useAppDispatch();
  const nextWorkout = useNextWorkout(step);

  const onClick = () => {
    if (!nextWorkout) return;
    dispatch(setWorkout({
      routine: nextWorkout.routine,
      week: nextWorkout.week,
      day: nextWorkout.day,
    }));
  }

  return (
    <button onClick={onClick}>
      { step > 0 ? 'Next' : 'Previous' }
    </button>
  );
}

export default NextWorkoutButton;
