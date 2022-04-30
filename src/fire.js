import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAhpaHXk3QSjN0LuA8vHG94yl6qZkRQT4g",
    authDomain: "react-firebase-auth-9e0c1.firebaseapp.com",
    projectId: "react-firebase-auth-9e0c1",
    storageBucket: "react-firebase-auth-9e0c1.appspot.com",
    messagingSenderId: "773489912904",
    appId: "1:773489912904:web:44a3fde708f92dfd9ebc7d",
    measurementId: "G-W6F75S2NRF"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;