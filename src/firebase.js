// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDR1mFmxw9GbgKwh-fXCgI22WFZVcw6Y_w",
  authDomain: "hospitalapp-c4dca.firebaseapp.com",
  projectId: "hospitalapp-c4dca",
  storageBucket: "hospitalapp-c4dca.appspot.com",
  messagingSenderId: "720139882538",
  appId: "1:720139882538:web:32080e0441d3175caff353",
  measurementId: "G-R1H18LD82G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);