import firebase from "firebase"
import "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyBE-4Jaiy0t-tNWJkE6ZkbNHhwcsJyNicA",
    authDomain: "twitter-clone-e9df0.firebaseapp.com",
    projectId: "twitter-clone-e9df0",
    storageBucket: "twitter-clone-e9df0.appspot.com",
    messagingSenderId: "206071917566",
    appId: "1:206071917566:web:f21badabaf16004023eeaf",
    measurementId: "G-T9JGENC0WN"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db = firebase.firestore()

  export default db