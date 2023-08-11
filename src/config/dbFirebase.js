import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAHzM65FQgcb5_0wd9pNuql5KsgVIkTPs",
    authDomain: "pruebaucamp.firebaseapp.com",
    projectId: "pruebaucamp",
    storageBucket: "pruebaucamp.appspot.com",
    messagingSenderId: "216287474425",
    appId: "1:216287474425:web:2d2ee2454488a19b0d6828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;