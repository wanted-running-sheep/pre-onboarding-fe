import { useState, useRef } from 'react';
import styled from 'styled-components';
import Instagram from '../../assets/images/InstagramLogo.svg';
import LoginInput from './Input';

const LoginForm = () => {
  const emailRef = useRef();
  const pwRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Wrapper>
      <img src={Instagram} alt='인스타그램 로고' />
      <form onSubmit={onSubmit}>
        <LoginInput placeholder={'이메일'} inputRef={emailRef} />
        <LoginInput placeholder={'비밀번호'} inputRef={pwRef} />
        <button
          type='submit'
          style={{ background: true ? '#0095f6' : '#c0dffd' }}
        >
          로그인
        </button>
      </form>
    </Wrapper>
  );
};

export default LoginForm;

const Wrapper = styled.div`
  width: 350px;
  height: 400px;
  background: white;
  border: 1px solid lightgray;
  text-align: center;
  padding: 25px 30px;

  img {
    width: 65%;
    padding: 25px 0px;
  }
  button {
    width: 100%;
    color: white;
    font-weight: 600;
    margin: 10px 0px;
    padding: 7px 0px;
    border-radius: 5px;
  }
`;
