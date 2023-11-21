import { FC } from "react";
import { setStart } from "../features/activity/activitySlice";
import useNextInterval from "../hooks/useNextInterval";
import { useAppDispatch } from "../store";

interface Props {
  step: number;
}

const NextIntervalButton: FC<Props> = ({ step }) => {
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

  return (
    <button onClick={onClick}>
      { step > 0 ? 'Next interval' : 'Previous interval' }
    </button>
  );
}

export default NextIntervalButton;
