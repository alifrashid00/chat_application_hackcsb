import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-dbcfe.firebaseapp.com",
  projectId: "reactchatapp-dbcfe",
  storageBucket: "reactchatapp-dbcfe.appspot.com",
  messagingSenderId: "258338142336",
  appId: "1:258338142336:web:41ae3fa99ba45827a1ce65"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()