import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/login/Form';

// LoginForm 컴포넌트가 가로 세로 가운데에 있게끔 하는 역할
const Login = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fafafa;
  align-items: center;
  justify-content: center;
`;
