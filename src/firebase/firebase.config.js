// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBhfT7TITO1y3o6YF1QxmX8LG0BeuZ-cAk",
	authDomain: "nextjus.firebaseapp.com",
	projectId: "nextjus",
	storageBucket: "nextjus.firebasestorage.app",
	messagingSenderId: "58973042266",
	appId: "1:58973042266:web:584d0a75a5a6eef740ca63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
