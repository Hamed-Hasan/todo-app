// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3mSBPrz24ierTrSC_UvrIXOGlbQcvHhc",
  authDomain: "doctor-portal-f452f.firebaseapp.com",
  projectId: "doctor-portal-f452f",
  storageBucket: "doctor-portal-f452f.appspot.com",
  messagingSenderId: "1097445691548",
  appId: "1:1097445691548:web:67386cb29026eb4a059d59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;