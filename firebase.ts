import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCpnNeAUg_pYseKlyFD1EM7SoUg5G13Hks",
  authDomain: "medbank-notification-system.firebaseapp.com",
  projectId: "medbank-notification-system",
  storageBucket: "medbank-notification-system.appspot.com",
  messagingSenderId: "224351613550",
  appId: "1:224351613550:web:a95ee4855e67567511ac7f",
  measurementId: "G-HLS8DBCF2B"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
