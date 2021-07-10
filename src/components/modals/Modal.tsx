// @ts-ignore
import MaterialModal from "@material-tailwind/react/Modal";
// @ts-ignore
import ModalBody from "@material-tailwind/react/ModalBody";
// @ts-ignore
import ModalFooter from "@material-tailwind/react/ModalFooter";

interface ModalProps {
  active: boolean;
  onClose: () => void;
  Body: JSX.Element;
  Footer: JSX.Element;
}

const Modal: React.FC<ModalProps> = ({ active, onClose, Body, Footer }) => {
  return (
    <MaterialModal size="sm" active={active} toggler={onClose}>
      <ModalBody>{Body}</ModalBody>
      <ModalFooter>{Footer}</ModalFooter>
    </MaterialModal>
  );
};

export default Modal;
