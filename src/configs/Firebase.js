// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC6nGgII-pNfb04Y8aZzQH_TrJfTHoyd2o",
	authDomain: "test-firebase-8c1db.firebaseapp.com",
	projectId: "test-firebase-8c1db",
	storageBucket: "test-firebase-8c1db.appspot.com",
	messagingSenderId: "757038796902",
	appId: "1:757038796902:web:e06eb0cc5dbf0cd4835da7",
	measurementId: "G-CJBVHCG1CB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

console.log('Hello there, Firestore')

export { auth, db, app }