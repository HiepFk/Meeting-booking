import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const UserAuth = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default UserAuth;
