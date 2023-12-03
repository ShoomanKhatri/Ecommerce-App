import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBa_rEgn3XhoOYa4EF3wIQKjnsVCPLtEwI",
    authDomain: "myfirstapp-280e3.firebaseapp.com",
    projectId: "myfirstapp-280e3",
    storageBucket: "myfirstapp-280e3.appspot.com",
    messagingSenderId: "373115286070",
    appId: "1:373115286070:web:458385346ec388be759e97"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;