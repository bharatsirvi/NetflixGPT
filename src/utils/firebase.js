import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpbq6d0MSgja9dHEWL5DaDkg3aNNQwUaA",
  authDomain: "netflixgpt-17d9e.firebaseapp.com",
  projectId: "netflixgpt-17d9e",
  storageBucket: "netflixgpt-17d9e.firebasestorage.app",
  messagingSenderId: "1098638257436",
  appId: "1:1098638257436:web:652e989cb27b89ded71ed9",
  measurementId: "G-DNX30QB8NK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();