// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjDPT9yuidSCURjIIwqDhWI89xoVH0c78",
  authDomain: "fir-social-219d7.firebaseapp.com",
  projectId: "fir-social-219d7",
  storageBucket: "fir-social-219d7.appspot.com",
  messagingSenderId: "322089459362",
  appId: "1:322089459362:web:8ea1e89bf2415aec9741fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();