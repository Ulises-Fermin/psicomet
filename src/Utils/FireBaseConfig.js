import firebase, {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAgG24OYQaikTbKVeaS5hOzMToKZvIC2DI",
  authDomain: "psicomet-e1256.firebaseapp.com",
  projectId: "psicomet-e1256",
  storageBucket: "psicomet-e1256.appspot.com",
  messagingSenderId: "89105650998",
  appId: "1:89105650998:web:dd773c54c05f63129e8f97"
};

export const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

