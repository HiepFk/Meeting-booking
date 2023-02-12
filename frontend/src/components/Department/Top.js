import React, { useState } from "react";
import { MdRefresh } from "react-icons/md";
import styled from "styled-components";
import ModalDepartment from "./ModalDepartment";
import Button from "react-bootstrap/Button";

function Top({ setReFesh, reFesh }) {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <ModalDepartment show={show} setShow={setShow} />
      <Button variant="primary" onClick={() => setShow(true)}>
        Add new department
      </Button>
      <div className="top_title">Departments Manager</div>
      <div className="top_icon" onClick={() => setReFesh(!reFesh)}>
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
    cursor: pointer;
  }
`;
export default Top;
