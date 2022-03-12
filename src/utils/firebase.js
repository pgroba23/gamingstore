// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB5jUhLH-CfMjO8Ijn0XqOzmodJhk0OS28',
  authDomain: 'gamingstore-e7b38.firebaseapp.com',
  projectId: 'gamingstore-e7b38',
  storageBucket: 'gamingstore-e7b38.appspot.com',
  messagingSenderId: '1082050030060',
  appId: '1:1082050030060:web:aacfd9c469c017f067b8c9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
