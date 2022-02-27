import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCc24A8JPN0tVrJRdBpQaHwPKsm52zpzd0",
    authDomain: "nutherbs.firebaseapp.com",
    projectId: "nutherbs",
    storageBucket: "nutherbs.appspot.com",
    messagingSenderId: "212072663692",
    appId: "1:212072663692:web:e5db4ccd4bdcb49141c9a9"
});
export function getFirebase() {
  return app;
}
export function getFirestore() {
  return firebase.firestore(app);
}
