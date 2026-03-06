import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzjFPu8O2fttHphPfnnWWOmCTjqC_eyPM",
  authDomain: "pioneer-pass.firebaseapp.com",
  projectId: "pioneer-pass",
  storageBucket: "pioneer-pass.firebasestorage.app",
  messagingSenderId: "464845815492",
  appId: "1:464845815492:web:d96d2a5fe462f68fb3d391",
  measurementId: "G-J8MT1D6DKQ",
};

export const app = initializeApp(firebaseConfig);

export const initAnalytics = () =>
  isSupported().then((supported) => (supported ? getAnalytics(app) : null));
