import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJXZnh3DCNUHW-QkJAOCMu2-b9j5zVqHA",
    authDomain: "expense-manager-7e493.firebaseapp.com",
    databaseURL: "https://expense-manager-7e493-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "expense-manager-7e493",
    storageBucket: "expense-manager-7e493.appspot.com",
    messagingSenderId: "655463524789",
    appId: "1:655463524789:web:b7ef4299b2f9b6fdff51fc",
    measurementId: "G-R5HWQXYC1X"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };