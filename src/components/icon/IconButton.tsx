// @ts-ignore
import Button from "@material-tailwind/react/Button";

interface ButtonProps {
  className?: string;
}

const IconButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <Button
      color="gray"
      buttonType="outline"
      rounded={true}
      iconOnly={true}
      ripple="dark"
      className={`hidden md:inline-flex h-20 w-20 border-none ${className}`}
    >
      {children}
    </Button>
  );
};

export default IconButton;
