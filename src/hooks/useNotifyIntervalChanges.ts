import { useContext, useEffect, useRef } from "react";
import AudioContext from "../components/AudioContext";
import { useAppSelector } from "../store";
import intervalSelector from "../store/selectors/intervalSelector";
import { ComputedInterval } from "../store/selectors/intervalsSelector";
import isActiveSelector from "../store/selectors/isActiveSelector";

const useNotifyIntervalChanges = (): void => {
  const { play } = useContext(AudioContext);
  const interval = useAppSelector(intervalSelector);
  const lastIntervalRef = useRef<ComputedInterval | null>(null);
  const lastIntervalCountRef = useRef(0);
  const isActive = useAppSelector(isActiveSelector);

  const notify = () => {
    play('startInterval');
    navigator.vibrate([300, 200, 300]);
  };
  
  useEffect(() => {
    if (!interval) return;
    if (!isActive) {
      lastIntervalCountRef.current = 0;
      return;
    }
    const lastInterval = lastIntervalRef.current;
    if (lastInterval && lastInterval.index !== interval.index) {
      if (lastIntervalCountRef.current > 4) {
        notify();
      }
      lastIntervalCountRef.current = 0;
    }
    lastIntervalRef.current = interval;
    lastIntervalCountRef.current = lastIntervalCountRef.current + 1;
  });
};

export default useNotifyIntervalChanges;
