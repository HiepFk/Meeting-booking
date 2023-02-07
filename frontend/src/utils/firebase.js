import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCo94r_r9De6CzijZ_-VMev5cw4TffEk08",
  authDomain: "booking-meeting-532e9.firebaseapp.com",
  projectId: "booking-meeting-532e9",
  storageBucket: "booking-meeting-532e9.appspot.com",
  messagingSenderId: "1081288504488",
  appId: "1:1081288504488:web:2a33cc592360dd75ed7e9d",
  measurementId: "G-824KD01H4K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
