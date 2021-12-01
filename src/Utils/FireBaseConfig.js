import firebase, {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDnuGOEGLxWYTsz_lBsBJsUaUt0Unzq3Ts",
  authDomain: "psicomet-unimet.firebaseapp.com",
  projectId: "psicomet-unimet",
  storageBucket: "psicomet-unimet.appspot.com",
  messagingSenderId: "1058144025256",
  appId: "1:1058144025256:web:054890f4ece8962317e09d",
  measurementId: "G-WNB774HQDD"
};

export const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

