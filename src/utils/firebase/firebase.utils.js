import {
  getAuth,
  //   signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC60Z4x-dSEW_m0PvyuIcZHxS-Trzxit-E",
  authDomain: "crown-clothing-db-10c43.firebaseapp.com",
  projectId: "crown-clothing-db-10c43",
  storageBucket: "crown-clothing-db-10c43.appspot.com",
  messagingSenderId: "819672649437",
  appId: "1:819672649437:web:bc95ed35abc97543c71534",
  measurementId: "G-2QHZC71FR3",
};

// const firebase =
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const Auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(Auth, provider);
const db = getFirestore();

// const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey);

//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const Docref = doc(collectionRef, object.title.toLowerCase());
//     batch.set(Docref, object);
//   });

//   await batch.commit();
// };

const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "category");

  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs.map((docsnapshot) => docsnapshot.data());
};

const createUserDocumentFromAuth = async (
  userAuth,
  additionalinformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalinformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapshot;
};

const createUserWithEmailAndpassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(Auth, email, password);
};

const SignInAuthWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(Auth, email, password);
};

const SignOutApp = async () => await signOut(Auth);

// const authenticationstatechanged = (callback) => {
//   return onAuthStateChanged(Auth, callback);
// };

export const getCurrentUser = () => {
  return new Promise((res, rej) => {
    const unSubscribe = onAuthStateChanged(Auth, (user) => {
      unSubscribe();
      res(user);
    },
    rej
    );
  });
};

export {
  Auth,
  signInWithGooglePopup,
  db,
  createUserDocumentFromAuth,
  createUserWithEmailAndpassword,
  SignInAuthWithEmailandPassword,
  SignOutApp,
  getCollectionAndDocuments,
};
