// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbyApC_JF4qF7XC63dC1KKf6L_7w9FqaQ",
  authDomain: "medbank-89a37.firebaseapp.com",
  projectId: "medbank-89a37",
  storageBucket: "medbank-89a37.appspot.com",
  messagingSenderId: "811223065437",
  appId: "1:811223065437:web:ce7405099faf50d8053eb4",
  measurementId: "G-CR9E1NX144"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);