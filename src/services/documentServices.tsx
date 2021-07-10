import { db } from "@config/firebase";
import firebase from "firebase";

export const createDocument = (filename: string, email: string) => {
  if (filename == "" || email == "") return;

  db.collection("userDocs").doc(email).collection("docs").add({
    filename,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  });
};
