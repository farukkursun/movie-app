import React, { useContext } from "react";
import { MovieContext } from "../context/AuthContext";

const Login = () => {
  const {
    setLoginEmail,
    setLoginPassword,
    login,
    logout,
    signInWithGoogle,
    user,
  } = useContext(MovieContext);
  return (
    <div>
      <div>
        <h3>login</h3>
        <input
          placeholder="email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button onClick={login}>login</button>
      </div>

      <h4>User logged in:</h4>
      {user?.email}
      <button onClick={logout}>Sign Out</button>
      <div>
        <button onClick={signInWithGoogle}>Sign In Witg Google</button>
        {/* <h1>{localStorage.getItem("name")}</h1>
        <h1>{localStorage.getItem("email")}</h1>
        <img src={localStorage.getItem("profilePic")} alt="" /> */}
      </div>
    </div>
  );
};

export default Login;
