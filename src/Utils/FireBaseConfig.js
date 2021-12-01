import firebase, {initializeApp} from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDw_25AEZJ0T0MQhBASsGLMUtK8PPoCUVM",
  authDomain: "psicomet2.firebaseapp.com",
  projectId: "psicomet2",
  storageBucket: "psicomet2.appspot.com",
  messagingSenderId: "848386047591",
  appId: "1:848386047591:web:1ee5820e06b83c90959ec2"
};

export const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();

