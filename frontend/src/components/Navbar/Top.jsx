import React from "react";
import styled from "styled-components";
import logo from "../../assets/image/logo.png";
function Top({ name, photo }) {
  return (
    <TopStyle>
      <img src={logo} alt="" className="logo_img" />
      <div className="user">
        <img src={photo} alt="" className="user_img" />
        <div className="content">
          <h3 className="wel">Welcome</h3>
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
  padding-bottom: 1rem;
  border-bottom: 1px solid #cccc;

  .logo_img {
    width: 12.5rem;
  }
  .user {
    display: flex;
    align-items: center;
  }
  h3 {
    font-weight: 400;
    opacity: 0.8;
  }
  .content {
    margin-left: 0.5rem;
  }
  .user_img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }
  .user_name {
    font-weight: 600;
    /* transform: translateX(0.3rem); */
  }
`;
export default Top;
