import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListEvent from "./Navbar/ListEvent";
import Menu from "./Navbar/Menu";
import Top from "./Navbar/Top";
function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth?.user);
  if (!user) {
    return <></>;
  }
  return (
    <>
      <Top name={user?.name} photo={user?.photo} />
      <Menu role={user?.isAdmin} />
      <ListEvent accessToken={user?.accessToken} />
    </>
  );
}

export default Navbar;
