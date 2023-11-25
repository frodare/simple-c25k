import { useInterval } from "usehooks-ts";
import { tick } from "../store/slices/activity";
import { RootState, useAppDispatch, useAppSelector } from "../store";

const REFRESH_DELAY = 1000;

const isRunningSelector = (state: RootState): boolean => {
  return state.activity.start !== null && state.activity.pausedOn === null;
};

const useClock = (): void => {
  const dispatch = useAppDispatch();
  const running = useAppSelector(isRunningSelector);
  useInterval(
    () => {
      dispatch(tick(Date.now()));
    },
    running ? REFRESH_DELAY : null,
  );
}

export default useClock;
