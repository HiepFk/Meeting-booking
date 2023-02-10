import React, { useContext } from "react";
import styled from "styled-components";
import ListEvent from "./Navbar/ListEvent";
import Menu from "./Navbar/Menu";
import Top from "./Navbar/Top";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <></>;
  }
  return (
    <Wrapper>
      <Top name={user?.name} photo={user?.photo} />
      <Menu role={user?.isAdmin} />
      <ListEvent accessToken={user?.accessToken} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #cccc;
  height: 100vh;
  width: 15rem;
  position: fixed;
  left: 0;
  top: 0;
`;
export default Navbar;
