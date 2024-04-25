// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD94BMB6-aoHW_I9_YiIByOP4rK8HIRJrM",
  authDomain: "user-database-c4e89.firebaseapp.com",
  projectId: "user-database-c4e89",
  storageBucket: "user-database-c4e89.appspot.com",
  messagingSenderId: "696492441190",
  appId: "1:696492441190:web:5ea7950dc3a96cd0fb77a7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
