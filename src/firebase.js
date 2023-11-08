import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA4QoNi6ObBTDKVMkbHXfsIuJ_lsf8mkzw",
  authDomain: "chat-68cde.firebaseapp.com",
  projectId: "chat-68cde",
  storageBucket: "chat-68cde.appspot.com",
  messagingSenderId: "1055479081042",
  appId: "1:1055479081042:web:8e66e0014daf90e936978b"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()