// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_9hwqfCBJx28IuBBk5nGYl7EjoCDja3M",
  authDomain: "react-netflix-clone-c914c.firebaseapp.com",
  projectId: "react-netflix-clone-c914c",
  storageBucket: "react-netflix-clone-c914c.appspot.com",
  messagingSenderId: "541111338821",
  appId: "1:541111338821:web:c635251b4771191127602c",
  measurementId: "G-4JH0RT4LXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);