// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fpmsme-df815.firebaseapp.com",
  projectId: "fpmsme-df815",
  storageBucket: "fpmsme-df815.appspot.com",
  messagingSenderId: "699610764439",
  appId: "1:699610764439:web:ad658b59875a2f0cb705d2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);