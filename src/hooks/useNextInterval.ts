import { useAppSelector } from "../store";
import intervalSelector from "../store/selectors/intervalSelector";
import intervalsSelector, { ComputedInterval } from "../store/selectors/intervalsSelector";

const useNextInterval = (step: number): ComputedInterval | null => {
  const intervals = useAppSelector(intervalsSelector);
  const currentInterval = useAppSelector(intervalSelector);
  if (!currentInterval) return null;
  return intervals[currentInterval.index + step] ?? null;
};

export default useNextInterval;
