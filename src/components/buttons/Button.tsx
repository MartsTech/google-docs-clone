// @ts-ignore
import MaterialButton from "@material-tailwind/react/Button";

interface ButtonProps {
  type: "filled" | "link";
  ripple: "light" | "dark";
  color: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  ripple,
  color,
  onClick,
  className,
}) => {
  return (
    <MaterialButton
      color={color}
      buttonType={type}
      ripple={ripple}
      onClick={onClick}
      className={className}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
