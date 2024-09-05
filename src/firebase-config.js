// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-0TgVqzzKM7UqH6CuSE610MUVLPLlvAo",
  authDomain: "chat-react-f75c8.firebaseapp.com",
  projectId: "chat-react-f75c8",
  storageBucket: "chat-react-f75c8.appspot.com",
  messagingSenderId: "752200669121",
  appId: "1:752200669121:web:9ad89f524de22c22648140",
  measurementId: "G-PBMR3ZTM3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)