import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  onClick: () => void;
  label: string;
  icon?: IconType;
  iconAfter?: IconType;
}

const Button: FC<Props> = ({ onClick, label, icon: Icon, iconAfter: IconAfter }) =>
  <button onClick={onClick} className="flex-1 bg-gray-300 hover:bg-blue-300 text-gray-800 py-2 px-4 inline-flex items-center">
    { Icon && <Icon size={20} className='mr-2' />}
    <span className="">{label}</span>
    { IconAfter && <IconAfter size={20} className='ml-2' /> }
  </button>

export default Button;
