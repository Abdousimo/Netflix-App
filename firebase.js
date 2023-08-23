// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe80MQC_fI8AroEnlChuwpuPSN7Q3R6NE",
  authDomain: "netflix-next-c65cb.firebaseapp.com",
  projectId: "netflix-next-c65cb",
  storageBucket: "netflix-next-c65cb.appspot.com",
  messagingSenderId: "368945851371",
  appId: "1:368945851371:web:4681743f0260ec086c87ae",
  measurementId: "G-6PKR7JLSYW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
