// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuPKwW-4PHC_h46tZion7gvXZiaEwjj60",
  authDomain: "skill-swap-2878b.firebaseapp.com",
  projectId: "skill-swap-2878b",
  storageBucket: "skill-swap-2878b.firebasestorage.app",
  messagingSenderId: "724557070869",
  appId: "1:724557070869:web:26d7ea136c79f5eba5c41c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
