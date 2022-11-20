// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlsB_A137Ffs_uFbqvN-cHy0ijgyFI_cQ",
    authDomain: "simple-firebase-4bd09.firebaseapp.com",
    projectId: "simple-firebase-4bd09",
    storageBucket: "simple-firebase-4bd09.appspot.com",
    messagingSenderId: "2724890171",
    appId: "1:2724890171:web:9bcf4d70e1d56a6da3fe1e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app