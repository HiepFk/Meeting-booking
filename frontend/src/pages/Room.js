import React from "react";
import Top from "../components/Room/Top";
import Filter from "../components/Room/Filter";
import TableRoom from "../components/Room/TableRoom";
import styled from "styled-components";

function Room({ tab }) {
  return (
    <Wrapper>
      <Top />
      <Filter />
      <TableRoom tab={tab} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
`;
export default Room;
