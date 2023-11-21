import { FC } from "react";
import { useAppSelector } from "../store";
import intervalProgressSelector from "../store/selectors/intervalProgressSelector";
import formatTime from "../utils/formatTime";

const CurrentInterval: FC = () => {
  const interval = useAppSelector(intervalProgressSelector);
  const color = interval?.type === 'run' ? 'text-blue-700' : 'text-gray-600';
  return (
    <div className='text-center'>
      <p className={'text-3xl font-bold font-serif uppercase ' + color}>
        {interval?.type ?? '????'} {interval?.index ?? 'N'}
      </p>
      <p className={'text-5xl font-thin ' + color}>
        {formatTime(interval?.remaining ?? -1)}
      </p>
    </div>
  )
}

export default CurrentInterval;
