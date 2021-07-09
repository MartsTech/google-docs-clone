// @ts-ignore
import Icon from "@material-tailwind/react/Icon";

interface IconProps {
  name: string;
  size: string;
  color?: string;
}

const MyIcon: React.FC<IconProps> = ({ name, size, color }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default MyIcon;
