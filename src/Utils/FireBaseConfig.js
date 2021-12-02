import firebase, {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3TwOmYCO94tHlLTv-jo3LBhoUQdGyRHo",
  authDomain: "psicomet3.firebaseapp.com",
  projectId: "psicomet3",
  storageBucket: "psicomet3.appspot.com",
  messagingSenderId: "251349685405",
  appId: "1:251349685405:web:0aad99dbd207f4afb13074"
};

export const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

