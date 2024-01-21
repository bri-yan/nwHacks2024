import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

import firebaseConfig from "./secret_config";

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

export const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider);
}

export const SignOut = () => {
  auth.signOut();
}

export const handleUserProfile = async (userAuth, additionalData = {}) => {
    if (!userAuth) return null;
  
    const userRef = doc(firestore, "users", userAuth.uid);
    const snapshot = await getDoc(userRef);
  
    if (!snapshot.exists()) {
      const { displayName, email } = userAuth;
      const timestamp = new Date();
  
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt: timestamp,
          ...additionalData
        });
      } catch (error) {
        console.error("Error creating user profile", error);
        return null;
      }
    }
  
      // If snapshot doesn't exist, it's a new user
  return { userRef, isNewUser: !snapshot.exists(), userData: snapshot.data()};
};