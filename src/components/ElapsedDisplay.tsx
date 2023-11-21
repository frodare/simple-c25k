import { FC } from "react";
import { useAppSelector } from "../store";
import elapsedTimeSelector from "../store/selectors/elapsedTimeSelector";
import TimeDisplay from "./TimeDisplay";

interface Props {
  className: string;
}

const ElapsedDisplay: FC<Props> = ({ className }) => {
  const time = useAppSelector(elapsedTimeSelector);
  return <TimeDisplay time={time} className={className} />;
}

export default ElapsedDisplay;
