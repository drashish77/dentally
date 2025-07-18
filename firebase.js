// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBZBFNGktHNoK1KS315CKBs_bP4TTwWpc",
    authDomain: "dentally-e4739.firebaseapp.com",
    projectId: "dentally-e4739",
    storageBucket: "dentally-e4739.firebasestorage.app",
    messagingSenderId: "753472120085",
    appId: "1:753472120085:web:f50c61b58654212133f51c",
    measurementId: "G-EC95QYFJN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);