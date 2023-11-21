import { Interval } from "../routines";
import { useAppSelector } from "../store";
import workoutSelector from "../store/selectors/workoutSelector";
import useElapsedTime from "./useElapsedTime";

const useCurrentInterval = (): Interval | null => {
  const workout = useAppSelector(workoutSelector);
  if (!workout) return null;
  const elapsedTime = useElapsedTime();
}

export default useCurrentInterval;
