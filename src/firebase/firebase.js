// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSU59EcYhUnyN8AmZafxJ7JglCS0PGKCM",
  authDomain: "my-base-hub.firebaseapp.com",
  databaseURL:
    "https://my-base-hub-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-base-hub",
  storageBucket: "my-base-hub.firebasestorage.app",
  messagingSenderId: "460552298895",
  appId: "1:460552298895:web:35534934e1eafd532febfa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
