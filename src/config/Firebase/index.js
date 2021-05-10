import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCPpZCCUoshdXzwjvYPr4kY8TcrIt_EmB8",
  authDomain: "moneyt-fe5ff.firebaseapp.com",
  projectId: "moneyt-fe5ff",
  storageBucket: "moneyt-fe5ff.appspot.com",
  messagingSenderId: "986611691259",
  appId: "1:986611691259:web:d14fa021f05baea2c08a5e",
  measurementId: "G-W36B8FNWEW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;