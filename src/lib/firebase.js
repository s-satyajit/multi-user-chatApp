import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-19335.firebaseapp.com",
  projectId: "reactchat-19335",
  storageBucket: "reactchat-19335.firebasestorage.app",
  messagingSenderId: "56836128606",
  appId: "1:56836128606:web:a4791ab38f23b7a4d519cf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()