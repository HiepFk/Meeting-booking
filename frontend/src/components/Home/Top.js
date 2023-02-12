import Button from "react-bootstrap/Button";
import React, { useContext, useState } from "react";
import { MdRefresh } from "react-icons/md";
import styled from "styled-components";
import ModalEvent from "./ModalEvent";
import { EventContext } from "../../context/eventContext";
function Top() {
  const [show, setShow] = useState(false);
  const { handeChangeReFresh } = useContext(EventContext);
  return (
    <Wrapper>
      <ModalEvent show={show} setShow={setShow} />
      <Button variant="primary" onClick={() => setShow(true)}>
        Add new event
      </Button>
      <div className="top_title">Events Manager</div>
      <div className="top_icon icon" onClick={() => handeChangeReFresh()}>
        <MdRefresh />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.2rem;
  .top_title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  .top_icon {
    font-size: 1.25rem;
    transform: scaleX(-1);
  }
`;
export default Top;
