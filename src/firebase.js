import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAi4zBoPZS39ydCc7HTrJ-5Q_VCk033RCc",
    authDomain: "project-vue-mj.firebaseapp.com",
    projectId: "project-vue-mj",
    storageBucket: "project-vue-mj.appspot.com",
    messagingSenderId: "124963986673",
    appId: "1:124963986673:web:d9ae6e957767a07cd89d50"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);