import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBR11xvGdJW0QQS5dAR1B4oLsm2CZ-Pa6I",
    authDomain: "fyp-grnn.firebaseapp.com",
    databaseURL: "https://fyp-grnn-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fyp-grnn",
    storageBucket: "fyp-grnn.appspot.com",
    messagingSenderId: "95810788963",
    appId: "1:95810788963:web:e7ad85c6619c2489c6a256"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();

