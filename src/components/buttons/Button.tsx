// @ts-ignore
import MaterialButton from "@material-tailwind/react/Button";

interface ButtonProps {
  type: "filled" | "link";
  ripple: "light" | "dark";
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  ripple,
  onClick,
  className,
}) => {
  return (
    <MaterialButton
      color="blue"
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
