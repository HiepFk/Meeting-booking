import React, { useState } from "react";
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Department from "./Department";
import Room from "./Room";
function RG() {
  const [tab, setTab] = useState("room");
  return (
    <Wrapper>
      <Tabs
        id="controlled-tab-example"
        activeKey={tab}
        onSelect={(k) => setTab(k)}
        className="mb-3"
      >
        <Tab eventKey="room" title="Manage rooms">
          <Room tab={tab} />
        </Tab>
        <Tab eventKey="department" title="Manage departments">
          <Department tab={tab} />
        </Tab>
      </Tabs>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 5rem 1.5rem 2rem;
  z-index: 2;
  background-color: #ddd;
  margin-top: 1rem;
`;
export default RG;
