// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAipFSu0FxzVhagelIF_1ZBvclBQI5kx7o",

  authDomain: "petadoption-c5679.firebaseapp.com",

  projectId: "petadoption-c5679",

  storageBucket: "petadoption-c5679.appspot.com",

  messagingSenderId: "1047437463909",

  appId: "1:1047437463909:web:2e77c53c5f7940bac1d18c",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
