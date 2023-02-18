import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
function AdminRouter() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth?.isAdmin) {
      navigate("/");
    }
  }, [navigate, auth]);
  return <Outlet />;
}

export default AdminRouter;
