import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyAPJ_TA4DMomK2s2q01sIdjKuT1Q5AEIb4",
  
    authDomain: "movies-86bf9.firebaseapp.com",
  
    projectId: "movies-86bf9",
  
    storageBucket: "movies-86bf9.appspot.com",
  
    messagingSenderId: "304953880552",
  
    appId: "1:304953880552:web:b7647609802838d60afe5d",
  
    measurementId: "G-XQS7BRY8J3"
  
  };
  
  
// Initialize Firebase

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}