import { useContext } from "react";
import { pause, reset, setStart, setWorkout } from "../store/slices/activity";
import { useAppDispatch, useAppSelector } from "../store";
import elapsedTimeSelector from "../store/selectors/elapsedTimeSelector";
import totalDurationSelector from "../store/selectors/totalDurationSelector";
import workoutsSelector from "../store/selectors/workoutsSelector";
import useNextWorkout from "./useNextWorkout";
import AudioContext from "../components/AudioContext";

const useHandleCompletion = (): void => {
  const dispatch = useAppDispatch();
  const totalDuration = useAppSelector(totalDurationSelector);
  const elapsed = useAppSelector(elapsedTimeSelector);
  const workouts = useAppSelector(workoutsSelector);
  const next = useNextWorkout(1);
  const lastWorkout = workouts[workouts.length - 1];
  const { play } = useContext(AudioContext);
  if (elapsed < 0) {
    const now = Date.now();
    dispatch(pause(now));
    dispatch(setStart({
      start: now,
      now,
    }));
  }
  if (elapsed >= totalDuration) {
    dispatch(reset());
    if (next) {
      dispatch(setWorkout({
        routine: next.routine,
        week: next.week,
        day: next.day,
      }));
    } else {
      dispatch(setWorkout({
        routine: lastWorkout.routine,
        week: lastWorkout.week,
        day: lastWorkout.day,
      }));
    }
    play('startInterval');
  }
};

export default useHandleCompletion;
