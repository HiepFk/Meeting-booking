import React from "react";
import Filter from "../components/Home/Filter";
import Main from "../components/Home/Main";
import styled from "styled-components";
function Home() {
  return (
    <Wrapper>
      <Filter />
      <Main />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 1.5rem 2rem;
  z-index: 2;
  background-color: #ddd;
`;
export default Home;
