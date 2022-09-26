import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmXsvYJi11DhPflo9XReM_za7fNPKPq2g",
  authDomain: "netflix-clone-edb52.firebaseapp.com",
  projectId: "netflix-clone-edb52",
  storageBucket: "netflix-clone-edb52.appspot.com",
  messagingSenderId: "794572058232",
  appId: "1:794572058232:web:d0787b7bd59af07bd4478d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth}