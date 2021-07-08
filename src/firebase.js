import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMnIMmL1wmb6MBiD6MSRWvRmk82oKCpTM",
  authDomain: "twitter-clone-1faac.firebaseapp.com",
  databaseURL: "https://twitter-clone-1faac.firebaseio.com",
  projectId: "twitter-clone-1faac",
  storageBucket: "twitter-clone-1faac.appspot.com",
  messagingSenderId: "316208638057",
  appId: "1:316208638057:web:75a37bf24fab32ff145af8",
  measurementId: "G-HGFP2LDXP9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
