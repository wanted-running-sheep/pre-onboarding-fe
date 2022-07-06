import React from "react";
import styled from "styled-components";
import Instagram from "../assets/images/InstagramLogo.svg";
import { useAuthState } from "../context/AuthContext";

const NavigationBar = () => {
  const { logout } = useAuthState();

  return (
    <Container>
      <Content>
        <Logo src={Instagram} alt="인스타그램 로고" />
      </Content>
      <Content>
        <SearchInput type="search" placeholder="검색" />
      </Content>
      <Content>
        <LogoutBtn onClick={logout}>logout</LogoutBtn>
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
  background-color: ${({ theme }) => theme.color.background1};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 100px;
`;

const Content = styled.div``;

const SearchInput = styled.input`
  display: block;
  background-color: #efefef;
  width: 200px;
  height: 30px;
  border-radius: 4px;
  padding: 0 10px;
  @media ${({ theme }) => theme.deviceSize.max.mobile} {
    display: none;
  }
`;

const LogoutBtn = styled.button`
  background-color: ${({ theme }) => theme.color.background1};
  cursor: pointer;
  font-size: 15px;
`;

export default NavigationBar;
