import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const AdminAuth = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    // if (!user?.isAdmin) {
    //   navigate("/");
    // }
  }, [navigate, user]);
  return (
    <>
      <Outlet />
    </>
  );
};
export default AdminAuth;
