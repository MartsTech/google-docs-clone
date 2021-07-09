// @ts-ignore
import MaterialIcon from "@material-tailwind/react/Icon";

interface IconProps {
  name: string;
  size: string;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  return <MaterialIcon name={name} size={size} color={color} />;
};

export default Icon;
