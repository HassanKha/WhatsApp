

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB-ago7XCIS3KI-eXbozraPoPFIhK6wQZg",
    authDomain: "whatsapp-992cf.firebaseapp.com",
    projectId: "whatsapp-992cf",
    storageBucket: "whatsapp-992cf.appspot.com",
    messagingSenderId: "669592713757",
    appId: "1:669592713757:web:4120e9399a69865849a4f4",
    measurementId: "G-Z3N6ZY89JV"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()
const storage = firebase.storage();
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export {db , storage,auth,provider};