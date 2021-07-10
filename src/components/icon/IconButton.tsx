// @ts-ignore
import Button from "@material-tailwind/react/Button";

interface ButtonProps {
  rounded?: boolean;
  className?: string;
}

const IconButton: React.FC<ButtonProps> = ({
  children,
  rounded = false,
  className,
}) => {
  return (
    <Button
      color="gray"
      buttonType="outline"
      rounded={rounded}
      iconOnly={true}
      ripple="dark"
      className={`border-none ${className}`}
    >
      {children}
    </Button>
  );
};

export default IconButton;
