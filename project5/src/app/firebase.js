import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAV6kTDdGI5LD7NYMtXsPDZdMBktaCVGH0",

  authDomain: "cs494-proj5.firebaseapp.com",

  projectId: "cs494-proj5",

  storageBucket: "cs494-proj5.appspot.com",

  messagingSenderId: "395940064354",

  appId: "1:395940064354:web:9c1beeedf1023fa7f7353b",

  measurementId: "G-7S9N9ZB08V",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
