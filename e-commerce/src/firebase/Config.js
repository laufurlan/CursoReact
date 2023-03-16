
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBW4QhKtAlhzaJVjemVmHEhJk1mnbQ6n4o",
  authDomain: "e-commerce-laura.firebaseapp.com",
  projectId: "e-commerce-laura",
  storageBucket: "e-commerce-laura.appspot.com",
  messagingSenderId: "921173659539",
  appId: "1:921173659539:web:33b43555af1b58b94d6266",
  measurementId: "G-832N9BJ3SC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);