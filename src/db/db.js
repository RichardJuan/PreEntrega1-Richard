// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVL6UGZ4zK-r5-hNIdajPeCJg51-3S0OE",
  authDomain: "proyectofinal-richard.firebaseapp.com",
  projectId: "proyectofinal-richard",
  storageBucket: "proyectofinal-richard.appspot.com",
  messagingSenderId: "882968318687",
  appId: "1:882968318687:web:96dd4f70ddf170f3308f6a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()
export default db