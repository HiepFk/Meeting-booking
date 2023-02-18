import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/authContext";
import Loading from "../components/Loading";
function AuthRouter() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [navigate, auth]);

  if (!auth) {
    return <Loading />;
  }

  return (
    <div className="main">
      <Navbar />
      <div className="content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AuthRouter;
