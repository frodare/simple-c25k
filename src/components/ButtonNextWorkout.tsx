import { FC } from "react";
import { setWorkout } from "../features/activity/activitySlice";
import useNextWorkout from "../hooks/useNextWorkout";
import { useAppDispatch } from "../store";
import { TfiControlForward, TfiControlBackward } from "react-icons/tfi";
import Button from "./Button";

interface Props {
  step: number;
}

const ButtonNextWorkout: FC<Props> = ({ step }) => {
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

  const label = step > 0 ? 'Next workout' : 'Previous workout';
  const icon = step > 0 ? undefined : TfiControlBackward;
  const iconAfter = step > 0 ? TfiControlForward : undefined;

  return <Button icon={icon} onClick={onClick} label={label} iconAfter={iconAfter} />;
}

export default ButtonNextWorkout;
