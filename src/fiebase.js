// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCtW0MqCCCdP8HU7o8p0cmy8Tn8cT9e8hw",
    authDomain: "linkedinclone-ea8ae.firebaseapp.com",
    projectId: "linkedinclone-ea8ae",
    storageBucket: "linkedinclone-ea8ae.appspot.com",
    messagingSenderId: "971163453294",
    appId: "1:971163453294:web:349134ec801a66e549a37f",
    measurementId: "G-44K6VRBNXC"
};

const FirebaseApp = firebase.initializeApp(firebaseConfig)
const db = FirebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };