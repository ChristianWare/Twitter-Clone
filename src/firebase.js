import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBMnIMmL1wmb6MBiD6MSRWvRmk82oKCpTM",
  authDomain: "twitter-clone-f3830.firebaseapp.com",
  projectId: "twitter-clone-f3830",
  storageBucket: "twitter-clone-f3830.appspot.com",
  messagingSenderId: "432964007139",
  appId: "1:432964007139:web:524405e11d10d047f1c1d6",
  measurementId: "G-FSD49K40VY",
};

const firebase = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;