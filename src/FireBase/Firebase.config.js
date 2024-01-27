
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "AUTH_DOMAIN",
  projectId: "Project_ID",
  storageBucket: "Storage_Bucket",
  messagingSenderId: "Messaging_sender_ID",
  appId: "App_ID",
  measurementId: "Measurement_ID"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// const analytics = getAnalytics(app);
export const db = getFirestore(app);
