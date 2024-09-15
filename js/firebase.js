// firebase.js

// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5wspcUyuLy7tRCMsaZOaYvIfOJYDabOI",
    authDomain: "paramedy-31fd6.firebaseapp.com",
    projectId: "paramedy-31fd6",
    storageBucket: "paramedy-31fd6.appspot.com",
    messagingSenderId: "471068492008",
    appId: "1:471068492008:web:eac543ac52775e5fd9095d",
    measurementId: "G-Z2MWSRCY6P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore instance
export { db, collection, getDocs };
