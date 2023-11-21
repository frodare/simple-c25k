import { FC } from "react";
import { useAppSelector } from "../store";
import remainingTimeSelector from "../store/selectors/remainingTimeSelector";
import TimeDisplay from "./TimeDisplay";

interface Props {
  className: string;
}

const RemainingDisplay: FC<Props> = ({ className }) => {
  const time = useAppSelector(remainingTimeSelector);
  return <TimeDisplay time={time} className={className} />;
}

export default RemainingDisplay;
