// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { toastError, toastSuccess } from "../helper/Toastify";
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

export const createRegister = async (
  registerEmail,
  registerPassword,
  displayName,
  navigate
) => {
  try {
    const userRegister = await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccess("Registered successfully");
    console.log(userRegister);
  } catch (error) {
    toastError(error.message);
  }
};

export const createLogin = async (loginEmail, loginPassword, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    navigate("/");
    toastSuccess("Logged in succesfuly");
  } catch (error) {
    toastError(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName, photoURL } = user;
      setCurrentUser({ email, displayName, photoURL });
      console.log(user);
    } else {
      setCurrentUser(false);
      console.log("user logged out");
    }
  });
};

export const logOut = async () => {
  await signOut(auth);
  toastSuccess('Logged out successfully')
};

export const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccess('Logged in succesfully')
    })
    .catch((error) => {
      console.log(error);
    });
};
