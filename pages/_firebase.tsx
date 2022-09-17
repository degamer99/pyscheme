// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ZZdYE0kKtreUDl8NCr0yliO5l8OaF_o",
  authDomain: "pyscheme.firebaseapp.com",
  projectId: "pyscheme",
  storageBucket: "pyscheme.appspot.com",
  messagingSenderId: "725912653800",
  appId: "1:725912653800:web:5f916dbc5d8a0e15915e5d",
  measurementId: "G-Q90LKR00JH"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const message = 'hello';
// const analytics = getAnalytics(app);
const Fire = () =>{
  return(<div> hi </div>)
}
export default Fire
