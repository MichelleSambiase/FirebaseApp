import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBwE5JYRBF7Ejf2FwARC0VF6SjdVDj4SPY",
    authDomain: "fir-practice-7a914.firebaseapp.com",
    databaseURL: "https://fir-practice-7a914-default-rtdb.firebaseio.com",
    projectId: "fir-practice-7a914",
    storageBucket: "fir-practice-7a914.appspot.com",
    messagingSenderId: "973436402455",
    appId: "1:973436402455:web:380c028553dcb3ffe31552"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;