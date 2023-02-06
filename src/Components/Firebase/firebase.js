
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDBEzFlmLyIqWA3TDKLOQAYpg-I2VTxDxc",
  authDomain: "jaza-miti.firebaseapp.com",
  projectId: "jaza-miti",
  storageBucket: "jaza-miti.appspot.com",
  messagingSenderId: "981861804375",
  appId: "1:981861804375:web:1aa05054b9b37400857612",
  measurementId: "G-2DBFET9LGQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth ();

export { app, auth };