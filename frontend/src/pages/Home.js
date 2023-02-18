import React from "react";
import Canlendar from "../components/Home/Canlendar";
import styled from "styled-components";
function Home() {
  return (
    <Wrapper>
      <Canlendar />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 1.5rem 2rem;
  z-index: 2;
  background-color: #ddd;
`;
export default Home;
