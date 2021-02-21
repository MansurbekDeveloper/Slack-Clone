import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4Z5ttvMo0gi64Lqw7w3-LBoCk8AESkoQ",
  authDomain: "slack-clone-yt-74310.firebaseapp.com",
  projectId: "slack-clone-yt-74310",
  storageBucket: "slack-clone-yt-74310.appspot.com",
  messagingSenderId: "839137197745",
  appId: "1:839137197745:web:c78688e7178255d3b52c90",
  measurementId: "G-C5JH8PQ2HT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
