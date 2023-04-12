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
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Methods
// Create new user
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
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
    toastSuccess("Registered successfully");
    console.log(userRegister);
  } catch (error) {
    toastError(error.message);
  }
};

// create login method
export const createLogin = async (loginEmail, loginPassword, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    navigate("/");
    toastSuccess("Logged in succesfuly");
  } catch (error) {
    toastError(error.message);
  }
};

// User takibi yapan method
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

//logout method
export const logOut = async () => {
  await signOut(auth);
  toastSuccess("Logged out successfully");
};

// mit Google sign in
export const signInWithGoogle = (navigate) => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate("/");
      toastSuccess("Logged in succesfully");
    })
    .catch((error) => {
      console.log(error);
    });
};
