import React from 'react';
import styled from 'styled-components';

const LoginInput = ({
  name,
  type,
  placeholder,
  inputRef,
  handleInput,
  isValidation,
}) => {
  return (
    <Container>
      <LoginInputContent
        name={name}
        type={type}
        placeholder={placeholder}
        ref={inputRef}
        onChange={handleInput}
        border={isValidation || isValidation === null}
      />
    </Container>
  );
};

export default LoginInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;
`;

const LoginInputContent = styled.input`
  font-size: 14px;
  background-color: ${({ theme }) => theme.color.background.lightGray};
  border: 0;
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({border, theme}) => border ? theme.color.border.primary : theme.color.border.notValid};
`;
