import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA1NhaAK_0ExKp4PnyDrr8EQmfUBIKBN-o",
    authDomain: "node-project-ad133.firebaseapp.com",
    databaseURL: "https://node-project-ad133.firebaseio.com",
    projectId: "node-project-ad133",
    storageBucket: "",
    messagingSenderId: "109361987673",
    appId: "1:109361987673:web:99125ec2ede0e5b45ff148"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();