import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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
`;
export default Navbar;
