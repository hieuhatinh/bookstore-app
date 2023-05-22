import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = { 
  apiKey : "AIzaSyBe9OaCLjZ_9KS0bmeDGbS4uV2Y55MVJkI" , 
  authDomain : "bookstore-app-3b5f4.firebaseapp.com" , 
  projectId : "bookstore-app-3b5f4" , 
  storageBucket : "bookstore-app-3b5f4.appspot.com" , 
  messagingSenderId : "77348430773" , 
  appId : "1:77348430773:web:4401835a9b2ab5c085effc" , 
  measurementId : "G-GQELS1K80G" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }