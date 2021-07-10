// @ts-ignore
import MaterialButton from "@material-tailwind/react/Button";

interface ButtonProps {
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <MaterialButton
      className={className}
      color="blue"
      buttonType="filled"
      ripple="light"
      onClick={onClick}
    >
      {children}
    </MaterialButton>
  );
};

export default Button;
