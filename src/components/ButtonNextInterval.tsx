import { FC } from "react";
import { pause, setStart } from "../store/slices/activity";
import useNextInterval from "../hooks/useNextInterval";
import { useAppDispatch, useAppSelector } from "../store";
import Button from "./Button";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

interface Props {
  step: number;
}

const ButtonNextInterval: FC<Props> = ({ step }) => {
  const dispatch = useAppDispatch();
  const nextInterval = useNextInterval(step);
  const isPaused = useAppSelector((state) => !!state.activity.pausedOn);

  const onClick = () => {
    if (!nextInterval) return;
    const now = Date.now();

    if (!isPaused) dispatch(pause(now));
    dispatch(setStart({
      start: now - nextInterval.start,
      now,
    }));
  }

  const icon = step > 0 ? undefined : TfiAngleLeft;
  const iconAfter = step > 0 ? TfiAngleRight : undefined;

  const label = step > 0 ? 'Next interval' : 'Previous interval';

  return <Button onClick={onClick} label={label} icon={icon} iconAfter={iconAfter}  />
}

export default ButtonNextInterval;
