// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  // GoogleAuthProvider,
  // signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
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
// const provider = new GoogleAuthProvider();

export const createRegister = async (registerEmail, registerPassword,navigate) => {
  try {
    const userRegister = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    navigate('/')
    console.log(userRegister);
  } catch (error) {
    console.log(error);
  }
};

export const createLogin = async (loginEmail, loginPassword,navigate) => {
  try {
     await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    navigate('/')
  } catch (error) {
    console.log(error);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
     console.log(user);
    } else {
      setCurrentUser(false)
      console.log('user logged out');
    }
  });
};


export const logOut = async () => {
  await signOut(auth);
};

// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;

//       localStorage.setItem("name", name);
//       localStorage.setItem("email", email);
//       localStorage.setItem("profilePic", profilePic);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
