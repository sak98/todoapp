import  firebase from 'firebase';
import 'firebase/firestore';
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAo9CyhPUZtyQXanrx9OfyatYaPwCTEKRM",
  authDomain: "todo-app-ddff5.firebaseapp.com",
  databaseURL: "https://todo-app-ddff5.firebaseio.com",
  projectId: "todo-app-ddff5",
  storageBucket: "todo-app-ddff5.appspot.com",
  messagingSenderId: "977931332547",
  appId: "1:977931332547:web:15564bdfc91ac593416b76",
  measurementId: "G-HYJ29NSLXZ"
});

const db = firebaseApp.firestore()

export default db;