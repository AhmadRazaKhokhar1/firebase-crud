
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDIg-ZzFsxqGorfG2GBF0LpwYvrgMh-mag",
  authDomain: "weather-app-3366a.firebaseapp.com",
  projectId: "weather-app-3366a",
  storageBucket: "weather-app-3366a.appspot.com",
  messagingSenderId: "154617054402",
  appId: "1:154617054402:web:17a1ccf98c4420161d675b",
  measurementId: "G-W8Z9D3QK7W"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);
export const db = getFirestore(app);