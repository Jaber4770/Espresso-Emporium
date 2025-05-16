// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoNctdaBhXMmH2E11pAtNQSA120NgSc5w",
    authDomain: "espresso-emporium-595c7.firebaseapp.com",
    projectId: "espresso-emporium-595c7",
    storageBucket: "espresso-emporium-595c7.firebasestorage.app",
    messagingSenderId: "470041712777",
    appId: "1:470041712777:web:72c081cd364ebbb7330e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);