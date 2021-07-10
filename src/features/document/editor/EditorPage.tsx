import firebase from "firebase";
import EditorHeader from "./EditorHeader";
import TextEditor from "./TextEditor";

interface EditorPageProps {
  snapshot:
    | firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>
    | undefined;
}

const EditorPage: React.FC<EditorPageProps> = ({ snapshot }) => {
  return (
    <>
      <EditorHeader filename={snapshot?.data()?.filename as string} />
      <TextEditor />
    </>
  );
};

export default EditorPage;
