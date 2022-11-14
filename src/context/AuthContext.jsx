import { createContext, useEffect, useState } from "react";
import { userObserver } from "../auth/firebase";

export const MovieContext = createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentuser] = useState(false);

  useEffect(() => {
   userObserver(setCurrentuser)
  }, []);

  return (
    <MovieContext.Provider value={{ currentUser }}>
      {children}
    </MovieContext.Provider>
  );
};

export default AuthContext;
