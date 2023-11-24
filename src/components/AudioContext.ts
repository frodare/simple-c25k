import { createContext } from "react";

type AudioType = 'startInterval';

interface AudioControls {
  play: (type: AudioType) => void;
}

const AudioContext = createContext<AudioControls>({
  play: () => { },
});

export type { AudioControls };
export default AudioContext;
