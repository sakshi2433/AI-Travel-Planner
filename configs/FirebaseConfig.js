// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClgRbkRVfEAmHt3FLFQpjN3P6G6PebACM",
  authDomain: "pineapple-9964f.firebaseapp.com",
  projectId: "pineapple-9964f",
  storageBucket: "pineapple-9964f.firebasestorage.app",
  messagingSenderId: "586165038745",
  appId: "1:586165038745:web:46dfd57f47f7a5d2cf9208",
  measurementId: "G-8WW2STFB17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



