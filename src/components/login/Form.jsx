import { useState, useRef } from 'react';
import styled from 'styled-components';
import Instagram from '../../assets/images/InstagramLogo.svg';
import { useAuthState } from '../../context/AuthContext';
import { validationCheck } from '../../util/validation';
import LoginInput from './Input';

const user = {
  email: 'test@test.com',
  password: 'Test1234!',
};
const ERROR_CHECK_ACCOUNT = '회원정보와 일치하지 않습니다.';

const LoginForm = () => {
  const { login } = useAuthState();
  const [validationState, setValidateState] = useState({
    email: null,
    password: null,
  });

  const emailRef = useRef();
  const pwRef = useRef();

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (validationState[name] === validationCheck(name, value)) return;
    setValidateState((prev) => ({
      ...prev,
      [name]: validationCheck(name, value),
    }));
  };
  const isCheckAccount = () => {
    return (
      emailRef.current.value === user.email &&
      pwRef.current.value === user.password
    );
  };
  const isCheckValidation = () => {
    return validationState.email && validationState.password;
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isCheckAccount()) {
      login();
      return;
    }
    alert(ERROR_CHECK_ACCOUNT);
  };

  return (
    <Container>
      <img src={Instagram} alt='인스타그램 로고' />
      <form onSubmit={onSubmit}>
        <LoginInput
          name='email'
          type='email'
          placeholder='이메일'
          inputRef={emailRef}
          handleInput={handleInput}
          isValidation={validationState.email}
        />
        <LoginInput
          name='password'
          type='password'
          placeholder='비밀번호'
          inputRef={pwRef}
          handleInput={handleInput}
          isValidation={validationState.password}
        />
        <button
          type='submit'
          disabled={!isCheckValidation()}
          style={{
            background: isCheckValidation() ? '#0095f6' : '#c0dffd',
          }}
        >
          로그인
        </button>
      </form>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
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
    cursor: pointer;
  }
`;
