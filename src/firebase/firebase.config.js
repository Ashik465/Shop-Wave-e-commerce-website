// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR3wUo00wed5BGEFxHPEcd8Hz4hbaMZNw",
  authDomain: "shop-wave.firebaseapp.com",
  projectId: "shop-wave",
  storageBucket: "shop-wave.appspot.com",
  messagingSenderId: "455498376642",
  appId: "1:455498376642:web:a42342ef65c400bc19625b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;