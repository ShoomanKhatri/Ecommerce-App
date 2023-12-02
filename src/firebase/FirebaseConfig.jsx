import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDCwLgYijc5kQxrnw1pwV2MsCBFI50Tg9I",
    authDomain: "ebharat-4863f.firebaseapp.com",
    projectId: "ebharat-4863f",
    storageBucket: "ebharat-4863f.appspot.com",
    messagingSenderId: "953523477230",
    appId: "1:953523477230:web:9b138fa6efa6a893cbf1ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;