// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcmP7Clltk-aPLybBos17SODlzhtEwoZI",
  authDomain: "tinder-3-757c1.firebaseapp.com",
  projectId: "tinder-3-757c1",
  storageBucket: "tinder-3-757c1.appspot.com",
  messagingSenderId: "939461735406",
  appId: "1:939461735406:web:ee8b6656e5c098416fd4ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
