import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZZoi1OYcUMaBcSTkgAJEbmQI0YbroIDw",
  authDomain: "start-2af88.firebaseapp.com",
  databaseURL: "https://start-2af88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "start-2af88",
  storageBucket: "start-2af88.appspot.com",
  messagingSenderId: "362930819960",
  appId: "1:362930819960:web:fd2e3fe86caa470b80ee8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()