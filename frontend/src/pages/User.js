import React from "react";
import Top from "../components/User/Top";
import Filter from "../components/User/Filter";
import TableUser from "../components/User/TableUser";
import styled from "styled-components";

function User() {
  return (
    <Wrapper>
      <div className="wrapper">
        <Top />
        <Filter />
        <TableUser />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 1.5rem 2rem;
  z-index: 2;
  background-color: #ddd;

  .wrapper {
    margin-top: 2rem;
    padding: 1rem;
    background-color: #fff;
  }
`;
export default User;
