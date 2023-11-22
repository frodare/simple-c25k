import { reset, setWorkout } from "../features/activity/activitySlice";
import { useAppDispatch, useAppSelector } from "../store";
import elapsedTimeSelector from "../store/selectors/elapsedTimeSelector";
import totalDurationSelector from "../store/selectors/totalDurationSelector";
import workoutsSelector from "../store/selectors/workoutsSelector";
import useNextWorkout from "./useNextWorkout";

const useHandleCompletion = (): void => {
  const dispatch = useAppDispatch();
  const totalDuration = useAppSelector(totalDurationSelector);
  const elapsed = useAppSelector(elapsedTimeSelector);
  const workouts = useAppSelector(workoutsSelector);
  const next = useNextWorkout(1);
  const lastWorkout = workouts[workouts.length - 1];

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
  }
};

export default useHandleCompletion;