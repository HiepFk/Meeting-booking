import React from "react";
import { Route, Routes } from "react-router-dom";
import Department from "../pages/Department";
import Home from "../pages/Home";
import Room from "../pages/Room";
import User from "../pages/User";

function AdminRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default AdminRouter;
