import { pause } from "../features/activity/activitySlice";
import { useAppDispatch, useAppSelector } from "../store";
import { TfiControlPause, TfiControlPlay } from "react-icons/tfi";
import Button from "./Button";

const ButtonPause = () => {
  const isPaused = useAppSelector((state) => state.activity.pausedOn !== null);
  const dispatch = useAppDispatch();
  const label = isPaused ? 'Resume' : 'Pause';
  const icon = isPaused ? TfiControlPlay : TfiControlPause;

  const onClick = () => {
    dispatch(pause(Date.now()));
  };

  return <Button onClick={onClick} label={label} icon={icon} />
}

export default ButtonPause;
