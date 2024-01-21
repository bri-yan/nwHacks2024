// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJYUYvA4Mvs3RmnB9QcH0iFA6AyYf8GwE",
  authDomain: "homegrown-6fa5b.firebaseapp.com",
  projectId: "homegrown-6fa5b",
  storageBucket: "homegrown-6fa5b.appspot.com",
  messagingSenderId: "216349909138",
  appId: "1:216349909138:web:c0eb372acdc34f5642864b",
  measurementId: "G-LD76WTGZL5"
};

export default firebaseConfig;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);