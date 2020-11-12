import firebase from "firebase";

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyDixVq9GVoi71js0if_u5q5d_XvY9pbfGM",
    authDomain: "testtp-18fa6.firebaseapp.com",
    databaseURL: "https://testtp-18fa6.firebaseio.com",
    projectId: "testtp-18fa6",
    storageBucket: "testtp-18fa6.appspot.com",
    messagingSenderId: "995288328594",
    appId: "1:995288328594:web:722acba5f74dc02c05794b"
  });
  

const db = firebaseConfig.firestore();
const auth = firebase.auth();
const reference = firebase.database().ref();

export {db,auth, reference};