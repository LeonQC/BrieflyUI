// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBb65qY4ZAGzE-HyrSqkw1oZ-9lnhCGKE",
  authDomain: "tinyurl-82ef0.firebaseapp.com",
  databaseURL: "https://tinyurl-82ef0-default-rtdb.firebaseio.com",
  projectId: "tinyurl-82ef0",
  storageBucket: "tinyurl-82ef0.appspot.com",
  messagingSenderId: "37187643176",
  appId: "1:37187643176:web:5d68557d63ec5e61d3521d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;