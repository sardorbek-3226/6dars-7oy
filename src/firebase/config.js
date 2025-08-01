import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyBeeMgciYzs-4SO6LMZAM9xOoqgmFMnX2o",
  authDomain: "my-project-f93f0.firebaseapp.com",
  projectId: "my-project-f93f0",
  storageBucket: "my-project-f93f0.firebasestorage.app",
  messagingSenderId: "373311896517",
  appId: "1:373311896517:web:30fb2350b7a2d0f57ee9ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth(app)

//db

export const db = getFirestore();