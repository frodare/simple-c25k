import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick: () => void;
  label: string;
  icon?: IconType;
  iconAfter?: IconType;
}

const Button: FC<Props> = ({ onClick, label, icon: Icon, iconAfter: IconAfter }) =>
  <button onClick={onClick} className="flex-1 opacity-80 bg-gray-300 hover:bg-blue-300 text-gray-800 font-bold py-2 px-4 inline-flex items-center">
    { Icon && <Icon className='mr-2' />}
    <span className="font-light">{label}</span>
    { IconAfter && <IconAfter className='ml-2' /> }
  </button>

export default Button;
