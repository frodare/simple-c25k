import { FC } from "react";
import formatTime from "../utils/formatTime";

interface Props {
  time: number;
  className: string;
}

const TimeDisplay: FC<Props> = ({ time, className }) => {
  return (
    <div className={className + " text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"}>
      { formatTime(time) }
    </div >
  )
}

export default TimeDisplay;
