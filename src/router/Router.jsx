import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/MyNavbar";
import Login from "../pages/Login";
import Main from "../pages/Main";
import Register from "../pages/Register";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
