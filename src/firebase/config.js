import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOjcGl8IgxqgTw0wZHrCkfafu0_A869UA",
  authDomain: "lessons-1e155.firebaseapp.com",
  projectId: "lessons-1e155",
  storageBucket: "lessons-1e155.firebasestorage.app",
  messagingSenderId: "589190193148",
  appId: "1:589190193148:web:915ae2824650c332105c79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = getAuth()