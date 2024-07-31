
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-f6120.firebaseapp.com",
  projectId: "reactchatapp-f6120",
  storageBucket: "reactchatapp-f6120.appspot.com",
  messagingSenderId: "70391400798",
  appId: "1:70391400798:web:c02bde6c91502d893327cf",
  measurementId: "G-201TV28BLR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();