import React, { useState } from "react";
import Top from "../components/Room/Top";
import Filter from "../components/Room/Filter";
import TableRoom from "../components/Room/TableRoom";
import styled from "styled-components";

function Room({ tab }) {
  const [reFesh, setReFesh] = useState(false);
  return (
    <Wrapper>
      <Top setReFesh={setReFesh} reFesh={reFesh} />
      <Filter />
      <TableRoom reFesh={reFesh} tab={tab} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
`;
export default Room;
