// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLZjAFtwqDeUUOnczVfA6Zj0-OVFAo1sk",
  authDomain: "health-tracker-db.firebaseapp.com",
  projectId: "health-tracker-db",
  storageBucket: "health-tracker-db.firebasestorage.app",
  messagingSenderId: "386891319963",
  appId: "1:386891319963:web:40c9fe453184ea40ca943e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth