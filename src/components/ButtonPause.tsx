import { pause } from "../features/activity/activitySlice";
import { RootState, useAppDispatch, useAppSelector } from "../store";
import { TfiControlPause, TfiControlPlay } from "react-icons/tfi";
import Button from "./Button";

const isPausedSelector = (state: RootState) =>
  state.activity.pausedOn !== null || state.activity.start === null;

const ButtonPause = () => {
  const isPaused = useAppSelector(isPausedSelector);
  const dispatch = useAppDispatch();
  const label = isPaused ? 'Resume' : 'Pause';
  const icon = isPaused ? TfiControlPlay : TfiControlPause;

  const onClick = () => {
    dispatch(pause(Date.now()));
  };

  return <Button onClick={onClick} label={label} icon={icon} />;
}

export default ButtonPause;
