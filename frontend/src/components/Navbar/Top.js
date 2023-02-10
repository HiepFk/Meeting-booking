import React from "react";
import styled from "styled-components";
import logo from "../../assets/image/logo.png";
function Top({ name, photo }) {
  return (
    <TopStyle>
      <img src={logo} alt="" className="logo_img" />
      <div className="user">
        <img src={photo} alt="" className="user_img" />
        <div className="welcome">
          <h4 className="wel">Welcome</h4>
          <p className="user_name">{name}</p>
        </div>
      </div>
    </TopStyle>
  );
}
const TopStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #cccc;

  .logo_img {
    width: 10rem;
  }
  .user {
    display: flex;
  }
  h4 {
    font-weight: 400;
    opacity: 0.8;
    font-size: 1.3rem;
  }
  .welcome {
    margin-left: 0.5rem;
  }
  .user_img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }
  .user_name {
    font-weight: 600;
  }
`;
export default Top;
