import React from "react";
import Top from "./Top";
import ListRoom from "./ListRoom";
import Canlendar from "./Canlendar";
import styled from "styled-components";

function Main() {
  return (
    <Wrapper>
      <Top />
      <div className="wrapper">
        <ListRoom />
        <div className="canlendar">
          <Canlendar />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 1rem;
  background-color: #fff;
  .wrapper {
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    width: 100%;
  }
  .list_room {
    display: flex;
    flex-direction: column;
    button {
      width: 15rem;
      margin-bottom: 0.5rem;
      border: 1px solid #ccc;
    }
  }
  .canlendar {
    flex: 1;
  }
`;
export default Main;
