import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBmvqO27r_Oa91tqTB-EXUMcdVfzq3cJ3I",
  authDomain: "xebia-blog.firebaseapp.com",
  projectId: "xebia-blog",
  storageBucket: "xebia-blog.appspot.com",
  messagingSenderId: "626287075187",
  appId: "1:626287075187:web:42604b3794d5a1ad6f6f06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();