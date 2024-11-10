// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhEfl85ZYVy9Cu1Tqrl0ZljICqzujgbwg",
  authDomain: "react-auth-integration-69385.firebaseapp.com",
  projectId: "react-auth-integration-69385",
  storageBucket: "react-auth-integration-69385.firebasestorage.app",
  messagingSenderId: "301834953160",
  appId: "1:301834953160:web:960ced0242aff025f5a0fd",
  measurementId: "G-9Q8JDWT7RF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

