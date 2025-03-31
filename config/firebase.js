// firebase.js
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth } = require('firebase/auth');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyDr7OADT6n5yC9Ax5BVemxrQGypUFfq7KI",
  authDomain: "industrial-management-sys1604.firebaseapp.com",
  projectId: "industrial-management-sys1604",
  storageBucket: "industrial-management-sys1604.appspot.com",
  messagingSenderId: "117479346154",
  appId: "1:117479346154:web:f0986e743721226c1c2c93",
  measurementId: "G-6R0HBG1TJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

module.exports = { app, db, auth, storage };
