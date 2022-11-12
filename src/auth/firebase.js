// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqyd-kHMSli0l7-_U9gOprU-jIZpwsEDw",
  authDomain: "movie-app-44691.firebaseapp.com",
  projectId: "movie-app-44691",
  storageBucket: "movie-app-44691.appspot.com",
  messagingSenderId: "344103909931",
  appId: "1:344103909931:web:bdebee95e08c6d4d73c86e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      
      localStorage.setItem('name', name)
      localStorage.setItem('email', email)
      localStorage.setItem('profilePic', profilePic)
    })
    .catch((error) => {
      console.log(error);
    });
};
