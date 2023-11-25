import { useContext, useEffect, useRef } from "react";
import AudioContext from "../components/AudioContext";
import { RootState, useAppSelector } from "../store";
import intervalSelector from "../store/selectors/intervalSelector";
import { ComputedInterval } from "../store/selectors/intervalsSelector";

const isPlayingSelector = (state: RootState) => state.activity.start && !state.activity.pausedOn;

const useNotifyIntervalChanges = (): void => {
  const { play } = useContext(AudioContext);
  const interval = useAppSelector(intervalSelector);
  const lastIntervalRef = useRef<ComputedInterval | null>(null);
  const isPlaying = useAppSelector(isPlayingSelector);

  const notify = () => {
    play('startInterval');
    navigator.vibrate([300, 200, 300]);
  };
  
  useEffect(() => {
    if (!interval) return;
    if (!isPlaying) return;
    const lastInterval = lastIntervalRef.current;
    if (lastInterval && lastInterval.index !== interval.index) {
      notify();
    }
    lastIntervalRef.current = interval;
  });
};

export default useNotifyIntervalChanges;
