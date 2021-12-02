/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
// import "./styles/common.scss";
// import "./styles/reset.scss";
import Parents from "./pages/Parents/Parents";
import Child from "./pages/Child/Child";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/child' element={<Child />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
