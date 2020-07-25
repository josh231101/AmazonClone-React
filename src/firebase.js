import firebase from "firebase";

const firebaseApp = firebase.initializaApp({
    apiKey: "AIzaSyA-hz-rRocgZyw6kS7Ry7hlO1jyCG-eWjg",
    authDomain: "clone-c7913.firebaseapp.com",
    databaseURL: "https://clone-c7913.firebaseio.com",
    projectId: "clone-c7913",
    storageBucket: "clone-c7913.appspot.com",
    messagingSenderId: "1071050539013",
    appId: "1:1071050539013:web:73af9ff9af9fa11b8b5c6c",
    measurementId: "G-3CSD6J39BK"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};