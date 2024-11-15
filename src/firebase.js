import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDu-uak2a3q9zRtFlqrDy-_aIJ2GZBlmZ0",
  authDomain: "prcoctel.firebaseapp.com",
  projectId: "prcoctel",
  storageBucket: "prcoctel.firebasestorage.app",
  messagingSenderId: "34926160532",
  appId: "1:34926160532:web:fa64cc2349da9879e8a281",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore
const db = getFirestore(app);

export { db };
