import React from 'react';
import styled from 'styled-components';

const LoginInput = ({ placeholder, inputRef }) => {
  return (
    <LoginInputWrapper>
      <LoginInputContent placeholder={placeholder} ref={inputRef} />
    </LoginInputWrapper>
  );
};

export default LoginInput;

const LoginInputWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5px;
`;

const LoginInputContent = styled.input`
  font-size: 14px;
  background-color: #fafafa;
  border: 0;
  padding: 10px;
  width: 100%;
  border-radius: 3px;
  border: 1px solid #dbdbdb;
`;
