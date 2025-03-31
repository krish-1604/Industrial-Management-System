const serviceAccount = require('../ServiceAccountKey.json');
const admin = require('firebase-admin');

// Initialize Firebase Admin
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "industrial-management-sys1604.firebasestorage.app"
});

// Initialize Firestore
const db = admin.firestore();

// Initialize Firebase Auth
const auth = admin.auth();

// Initialize Firebase Storage
const storage = admin.storage();

module.exports = { app, db, auth, storage };
