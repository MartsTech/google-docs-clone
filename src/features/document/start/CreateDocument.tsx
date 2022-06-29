import Button from "@component/buttons/Button";
import Modal from "@component/modals/Modal";
import { createDocument } from "@service/documentServices";
import { useSession } from "next-auth/react";
import { useState } from "react";

interface CreateDocumentProps {
  showModal: boolean;
  close: () => void;
}

const CreateDocument: React.FC<CreateDocumentProps> = ({
  showModal,
  close,
}) => {
  const [input, setInput] = useState("");
  const session = useSession();

  const create = () => {
    createDocument(input, session?.data?.user?.email || "");
    setInput("");
    close();
  };

  return (
    <Modal
      active={showModal}
      onClose={close}
      Body={
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of document..."
          onKeyDown={(e) => e.key === "Enter" && create()}
        />
      }
      Footer={
        <>
          <Button type="link" ripple="dark" color="blue" onClick={close}>
            Cancel
          </Button>
          <Button
            type="filled"
            ripple="light"
            color="blue"
            onClick={() => create()}
          >
            Create
          </Button>
        </>
      }
    />
  );
};

export default CreateDocument;
