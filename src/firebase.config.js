import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_0cia3lzpg5tjftUQGT-E81Zt2eOp9o",
  authDomain: "house-marketplace-app-13109.firebaseapp.com",
  projectId: "house-marketplace-app-13109",
  storageBucket: "house-marketplace-app-13109.appspot.com",
  messagingSenderId: "123398349559",
  appId: "1:123398349559:web:c857811c3e02d7430fe9f2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
