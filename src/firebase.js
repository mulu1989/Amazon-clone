// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAn8OOgHyDSCbJga4uCH_I4AKbARHfEYUk",
    authDomain: "clone-final-a40cb.firebaseapp.com",
    projectId: "clone-final-a40cb",
    storageBucket: "clone-final-a40cb.appspot.com",
    messagingSenderId: "563484354381",
    appId: "1:563484354381:web:1343ae5ef5991b42e2f904",
    measurementId: "G-NLXE42FZRY",
  };

// Initialize Firebase 
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { db,auth }; 


