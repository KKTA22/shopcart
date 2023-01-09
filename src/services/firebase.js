import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAzdLJY-H_05k9nQoTF3l6-78arN1ewZy0",
  authDomain: "test-bcf54.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "test-bcf54",
  storageBucket: "test-bcf54.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;