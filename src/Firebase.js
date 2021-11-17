
import { initializeApp } from "firebase/app";
//Importing from authentication service
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3SKcqbmtgyCNj5rPJd_FVX-xWFeXT0-s",
  authDomain: "react-auth-4bb9d.firebaseapp.com",
  projectId: "react-auth-4bb9d",
  storageBucket: "react-auth-4bb9d.appspot.com",
  messagingSenderId: "547673046708",
  appId: "1:547673046708:web:39b9e4a58bd9eb9ca121e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Gets which user is currently authenticated
export const auth = getAuth(app);
//Logic for gmail authentication
const provider = new GoogleAuthProvider()
//Create a fn that represnets sign in for google
export const signInWithGoogle = ()=>{
signInWithPopup(auth,provider)
.then((result)=>{
    const name = result.user.displayName
    const email = result.user.email
   const profilePic = result.user.photoURL

    //Using localstorage to store information
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("profilePic",profilePic)
console.log(result)
}).catch((error)=>{
    console.log(error);
})
}