// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrampmntU-EDwbIOh3LaCuU4lgH3xZjrU",
  authDomain: "food-delivery-app-f51dc.firebaseapp.com",
  projectId: "food-delivery-app-f51dc",
  storageBucket: "food-delivery-app-f51dc.appspot.com",
  messagingSenderId: "330693852152",
  appId: "1:330693852152:web:c368682a0fec9edfe6f40d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig, {
  persistence: browserLocalPersistence,
});

export default firebaseApp;
