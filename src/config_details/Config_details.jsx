
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqVxWt8ytNMCqFE-sddjgOD8dARves8ds",
  authDomain: "event-management-8579f.firebaseapp.com",
  projectId: "event-management-8579f",
  storageBucket: "event-management-8579f.firebasestorage.app",
  messagingSenderId: "1000683009137",
  appId: "1:1000683009137:web:7cae5732371837344cd7d0",
  measurementId: "G-VW2E6TSD14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app)
export const db = getFirestore(app)
