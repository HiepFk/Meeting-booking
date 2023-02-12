import React, { useState } from "react";
import Top from "../components/Department/Top";
import Filter from "../components/Department/Filter";
import TableDepartment from "../components/Department/TableDepartment";
import styled from "styled-components";

function Department({ tab }) {
  return (
    <Wrapper>
      <Top />
      <Filter />
      <TableDepartment tab={tab} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fff;
`;
export default Department;
