import { useCallback, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { setWakeLocked } from "../store/slices/status";
import isActiveSelector from "../store/selectors/isActiveSelector";
import intervalProgressSelector from "../store/selectors/intervalProgressSelector";

const useWakeLock = (): void => {
  const dispatch = useAppDispatch();
  const wakeLockRef = useRef<WakeLockSentinel>();
  const requestingWakeLockTimerRef = useRef(0);
  const isActive = useAppSelector(isActiveSelector);
  useAppSelector(intervalProgressSelector);

  const requestWakeLock = useCallback(async () => {
    if (wakeLockRef.current) return;
    try {
      const wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => {
        wakeLockRef.current = undefined;
        dispatch(setWakeLocked(false));
      });
      dispatch(setWakeLocked(true));
      wakeLockRef.current = wakeLock;
     requestingWakeLockTimerRef.current = 0;
    } catch (err) {
      requestingWakeLockTimerRef.current = 0;
      wakeLockRef.current = undefined;
    }
  }, [dispatch]);

  useEffect(() => {
    if (!isActive && wakeLockRef.current) {
      wakeLockRef.current.release();
      wakeLockRef.current = undefined;
      requestingWakeLockTimerRef.current = 0;
      return;
    }

    if (isActive && !wakeLockRef.current) {
      if (requestingWakeLockTimerRef.current && requestingWakeLockTimerRef.current < 5) {
        requestingWakeLockTimerRef.current++;
        return;
      }
      requestingWakeLockTimerRef.current = 0;
      requestWakeLock();
    }
  });

  useEffect(() => {
    return () => {
      wakeLockRef.current?.release();
    };
  }, []);
}

export default useWakeLock;
