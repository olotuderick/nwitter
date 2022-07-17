//import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyBJblDYnQXSVgFi8mSkEuMqTLQEuBy-Fyk",
  authDomain: "nwitter-a9a5a.firebaseapp.com",
  projectId: "nwitter-a9a5a",
  storageBucket: "nwitter-a9a5a.appspot.com",
  messagingSenderId: "91900613484",
  appId: "1:91900613484:web:8076976996f7e9ca9cd949",
};
//export default firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore()
export { auth,db };
