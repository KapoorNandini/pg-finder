// Import the required Firebase modules
const { initializeApp } = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = require('firebase/auth');

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCHXWQ3PBCmGzEYgF_IGaYVCI_Z5bDLZoY",
  authDomain: "pgwale-7af44.firebaseapp.com",
  projectId: "pgwale-7af44",
  storageBucket: "pgwale-7af44.firebasestorage.app",
  messagingSenderId: "982638904209",
  appId: "1:982638904209:web:fe8f23d19161f83d949030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };

