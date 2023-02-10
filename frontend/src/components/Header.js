import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/authContext";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useNavigate } from "react-router-dom";
function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const setFullScreen = (e) => {
    e.stopPropagation();
    const html = document.querySelector("html");
    const isFullScreen = document.fullscreenElement;
    if (isFullScreen === null) {
      html.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (!user) {
    return <></>;
  }
  return (
    <Wrapper>
      <div className="header">
        <div className="left"></div>
        <div className="right">
          <div className="arrow" onClick={setFullScreen}>
            <AiOutlineArrowsAlt />
          </div>
          <img src={user?.photo} alt="" className="user_img" />
          {/* <div className="user_name">{user?.name}</div> */}
          <DropdownButton
            as={ButtonGroup}
            title={user?.name}
            id="bg-vertical-dropdown-1"
            className="dropdown"
            variant=""
          >
            <Dropdown.Item eventKey="1">Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => logout(navigate)}>
              Logout
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: fixed;
  width: calc(100vw - 15rem);
  z-index: 999;
  background-color: #fff;
  .header {
    display: flex;
    align-items: center;
    padding: 0rem 2.5rem;
    height: 5rem;
    border-bottom: solid 1px #ccc;
  }
  .left {
    flex: 1;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .user_img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2.5rem;
  }
  .arrow {
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
  .user_name {
    font-weight: 600;
  }
  .dropdown {
    background-color: white;
    font-weight: 600;
  }
`;
export default Header;
