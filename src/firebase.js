
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCca3ddoFqScl9HkgFWxzF_piH3nuOFjQw",
  authDomain: "netflix-clone-b0336.firebaseapp.com",
  projectId: "netflix-clone-b0336",
  storageBucket: "netflix-clone-b0336.firebasestorage.app",
  messagingSenderId: "761063596377",
  appId: "1:761063596377:web:c031ac2ef04e05a61c2c48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
