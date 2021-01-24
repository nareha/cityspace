// src/firebase.js
import firebase from 'firebase';

const config = { // this is the same thing as `firebaseConfig`
    apiKey: "AIzaSyCGTJzHC1fB7n_z8Ujx-Kz0RAkxiIOiYDs",
    authDomain: "cityspace-143a6.firebaseapp.com",
    projectId: "cityspace-143a6",
    storageBucket: "cityspace-143a6.appspot.com",
    messagingSenderId: "306181483168",
    appId: "1:306181483168:web:a2f0f7590159933a95b7c5"
};

firebase.initializeApp(config);

export default firebase;