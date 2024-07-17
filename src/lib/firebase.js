import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cosmo-blog.firebaseapp.com",
  projectId: "cosmo-blog",
  storageBucket: "cosmo-blog.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDERID,
  appId:  import.meta.env.VITE_FIREBASE_APPID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()