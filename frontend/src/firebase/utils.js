import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebaseConfig from "./secret_config";

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}