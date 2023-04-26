import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwICGc9ohu5tTIWTH8D-RkNzMwwcOm9zg',
  authDomain: 'messaging-app-mern-8e69b.firebaseapp.com',
  databaseURL: 'https://messaging-app-mern-8e69b-default-rtdb.firebaseio.com',
  projectId: 'messaging-app-mern-8e69b',
  storageBucket: 'messaging-app-mern-8e69b.appspot.com',
  messagingSenderId: '1046774636440',
  appId: '1:1046774636440:web:b8b3adb6070f087a2495ed',
  measurementId: 'G-H4K9Y8L6PQ'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
