import { useAppSelector } from "../store";
import workoutsSelector, { ComputedWorkout } from "../store/selectors/workoutsSelector";

const useNextWorkout = (step: number): ComputedWorkout | null => {
  const workouts = useAppSelector(workoutsSelector);
  const week = useAppSelector(state => state.activity.week);
  const day = useAppSelector(state => state.activity.day);
  const currentWorkoutIndex = workouts.findIndex(workout => workout.week === week && workout.day === day);
  return workouts[currentWorkoutIndex + step] ?? null;
};

export default useNextWorkout;
