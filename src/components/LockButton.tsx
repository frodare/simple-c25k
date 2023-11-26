import { FC, useState } from "react";
import { TfiLock, TfiUnlock } from "react-icons/tfi";
import { useAppDispatch, useAppSelector } from "../store";
import { setLocked } from "../store/slices/activity";
import RadialProgressIndicator from "./RadialDelayIndicator";

const LockButton: FC = () => {
  const dispatch = useAppDispatch();
  const locked = useAppSelector(state => state.activity.locked);
  const [changing, setChanging] = useState(false)

  const onCompletion = () => {
    if (!changing) return;
    navigator.vibrate([100, 100, 100]);
    setChanging(false);
    dispatch(setLocked(!locked));
  }

  const onMouseDown = () => {
    setChanging(true);
  }

  const onMouseUp = () => {
    setChanging(false);
  }

  return (
    <div
      className="relative mt-8 w-1/4 aspect-square mx-auto bg-opacity-60 bg-gray-100 rounded-full flex items-center justify-center"
      onTouchStart={onMouseDown}
      onTouchEnd={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {changing && <RadialProgressIndicator delay={1000} onCompletion={onCompletion} />}
      {locked && <TfiLock size={40} className='inline-block text-blue-600' />}
      {!locked && <TfiUnlock size={40} className='inline-block text-gray-600' />}
    </div>
  );
};

export default LockButton;
