import { pause } from "../features/activity/activitySlice";
import { useAppDispatch, useAppSelector } from "../store";

const PauseButton = () => {
  const isPaused = useAppSelector((state) => state.activity.pausedOn !== null);
  const dispatch = useAppDispatch();
  const label = isPaused ? 'Resume' : 'Pause';

  const onClick = () => {
    dispatch(pause(Date.now()));
  }

  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
}

export default PauseButton;
