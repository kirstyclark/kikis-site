import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDUoCfiKptpC4cbfc7J5GG3p2rLUdBG3pw",
    authDomain: "kikis-sounds.firebaseapp.com",
    projectId: "kikis-sounds",
    storageBucket: "kikis-sounds.appspot.com",
    messagingSenderId: "58946047133",
    appId: "1:58946047133:web:71af0908bee2f53b68d874"
};

firebase.initializeApp(firebaseConfig);

// export const firestore = firebase.firestore();
export const auth = firebase.auth();
