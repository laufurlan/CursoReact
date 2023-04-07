
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW4QhKtAlhzaJVjemVmHEhJk1mnbQ6n4o",
  authDomain: "e-commerce-laura.firebaseapp.com",
  projectId: "e-commerce-laura",
  storageBucket: "e-commerce-laura.appspot.com",
  messagingSenderId: "921173659539",
  appId: "1:921173659539:web:33b43555af1b58b94d6266",
  measurementId: "G-832N9BJ3SC"
};
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app
