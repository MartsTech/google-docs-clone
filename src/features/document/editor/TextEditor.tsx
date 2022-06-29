import { db } from "@config/firebase";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

const Editor = dynamic(
  // @ts-ignore
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  { ssr: false }
);

interface TextEditorProps {}

const TextEditor: React.FC<TextEditorProps> = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const session = useSession();

  const router = useRouter();
  const { id } = router.query;

  const [snapshot] = useDocumentOnce(
    db
      .collection("userDocs")
      .doc(session?.data?.user?.email as string)
      .collection("docs")
      .doc(id as string)
  );

  useEffect(() => {
    if (snapshot?.data()?.editorState) {
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
    }
  }, [snapshot]);

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);

    db.collection("userDocs")
      .doc(session?.data?.user?.email as string)
      .collection("docs")
      .doc(id as string)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        {
          merge: true,
        }
      );
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen pb-16">
      {/*@ts-ignore*/}
      <Editor
        //@ts-ignore
        toolbarClassName="flex sticky top-0 z-50 !justify-center
      mx-auto"
        editorClassName="mt-6 bg-white shadow-lg max-w-5xl mx-auto
        mb-12 border p-10"
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
