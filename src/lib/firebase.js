import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatcsb-5bf82.firebaseapp.com",
  projectId: "chatcsb-5bf82",
  storageBucket: "chatcsb-5bf82.appspot.com",
  messagingSenderId: "232204762697",
  appId: "1:232204762697:web:b81124a33a9df029474998"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()