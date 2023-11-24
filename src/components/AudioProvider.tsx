import { FC, ReactNode, useMemo, useRef } from "react";
import AudioContext from "./AudioContext";

interface Props {
  children?: ReactNode;
}

const AudioProvider: FC<Props> = ({ children }) => {
  const refStartInterval = useRef<HTMLAudioElement>(null);

  const controls = useMemo(() => ({
    play: () => {
      const audio = refStartInterval.current;
      if (!audio) return;
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    },
  }), []);

  return (
    <AudioContext.Provider value={controls}>
      <audio ref={refStartInterval} src="copper-bell-ding-2.mp3" />
      {children}
    </AudioContext.Provider>);
}

export default AudioProvider;
