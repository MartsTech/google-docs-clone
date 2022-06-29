import { db } from "@config/firebase";
import moment from "moment";
import { useSession } from "next-auth/react";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import RecentDocument from "./RecentDocument";

interface RecentDocumentsProps {}

const RecentDocuments: React.FC<RecentDocumentsProps> = ({}) => {
  const session = useSession();
  const [snapshot] = useCollectionOnce(
    db
      .collection("userDocs")
      .doc(session?.data?.user?.email as string)
      .collection("docs")
      .orderBy("timestamp", "desc")
  );

  return (
    <>
      {snapshot?.docs.map((doc) => (
        <RecentDocument
          key={doc.id}
          id={doc.id}
          filename={doc.data().filename as string}
          date={moment(doc.data().timestamp.toDate()).format("DD MMM YYYY")}
        />
      ))}
    </>
  );
};

export default RecentDocuments;
