// config/firebase.js
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');
const { getStorage } = require('firebase-admin/storage');

const firebaseConfig = {
  apiKey: "AIzaSyDr7OADT6n5yC9Ax5BVemxrQGypUFfq7KI",
  authDomain: "industrial-management-sys1604.firebaseapp.com",
  projectId: "industrial-management-sys1604",
  storageBucket: "industrial-management-sys1604.firebasestorage.app",
  messagingSenderId: "117479346154",
  appId: "1:117479346154:web:f0986e743721226c1c2c93",
  measurementId: "G-6R0HBG1TJD"
};

// Initialize Firebase Admin
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore();

// Initialize Firebase Auth
const auth = getAuth();

// Initialize Firebase Storage
const storage = getStorage();

module.exports = { app, db, auth, storage };
