// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
// import firebase from "firebase";
// import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUZowwxi3k-2ngHhhRJXGt94D0eTOqXyA",
  authDomain: "insta-clone-dcba5.firebaseapp.com",
  projectId: "insta-clone-dcba5",
  storageBucket: "insta-clone-dcba5.appspot.com",
  messagingSenderId: "290760172838",
  appId: "1:290760172838:web:3b70272c4f7792aec30de7",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
