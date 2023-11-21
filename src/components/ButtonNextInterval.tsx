import { FC } from "react";
import { setStart } from "../features/activity/activitySlice";
import useNextInterval from "../hooks/useNextInterval";
import { useAppDispatch } from "../store";
import Button from "./Button";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

interface Props {
  step: number;
}

const ButtonNextInterval: FC<Props> = ({ step }) => {
  const dispatch = useAppDispatch();
  const nextInterval = useNextInterval(step);

  const onClick = () => {
    if (!nextInterval) return;
    const now = Date.now();
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
