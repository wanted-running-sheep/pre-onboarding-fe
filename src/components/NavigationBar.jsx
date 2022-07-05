import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <Container>
      <Content>Logo</Content>
      <Content>
        <SearchInput type="text" />
      </Content>
      <Content>
        <LogoutBtn onClick={handleLogout}>logout</LogoutBtn>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: grey;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Content = styled.div``;

const SearchInput = styled.input`
  display: block;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const LogoutBtn = styled.button``;

export default NavigationBar;
