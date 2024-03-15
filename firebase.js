import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpTYoEIBA_3HiE-gizCpwqp6DmMkifwus",
  authDomain: "carrot-market-b4ce7.firebaseapp.com",
  databaseURL:
    "https://carrot-market-b4ce7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-market-b4ce7",
  storageBucket: "carrot-market-b4ce7.appspot.com",
  messagingSenderId: "357815814984",
  appId: "1:357815814984:web:bf865fa7dad214eef4817d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);
