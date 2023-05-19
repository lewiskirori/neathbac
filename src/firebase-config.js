import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuZazSH1AQ-e6EpQavtMNraez9aMK9ggc",
    authDomain: "ecommerce-test-d0795.firebaseapp.com",
    projectId: "ecommerce-test-d0795",
    storageBucket: "ecommerce-test-d0795.appspot.com",
    messagingSenderId: "982079949081",
    appId: "1:982079949081:web:fefb8963dbed848885dd88"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
// const db = getFirestore(app);