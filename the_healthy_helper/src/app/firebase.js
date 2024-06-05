// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyB4XsfLLycuu0Y4fdm11Rk04PHvwJVtfqk",

  authDomain: "the-healthy-helper.firebaseapp.com",

  projectId: "the-healthy-helper",

  storageBucket: "the-healthy-helper.appspot.com",

  messagingSenderId: "999891604942",

  appId: "1:999891604942:web:74d75219166dc52cdc079f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
