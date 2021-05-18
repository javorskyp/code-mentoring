import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 450px;
  position: absolute;
  left: 50%;
  top: 350px;
  transform: translate(-50%, -50%);
  border: 1px solid var(--PrimaryLight);
  border-radius: 8px;
  box-shadow: 2px 2px 2px 0px var(--PrimaryLight);
  flex-wrap: wrap;
  background: white;
  margin-bottom: 40px;
  p {
    font-size: 14px;
  }
  a {
    text-decoration: none;
    font-weight: 600;
  }
`;
export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
export const SocialMedia = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  .textfield {
    justify-content: center;
    width: 230px;
    height: 30px;
    margin: 4px;
    border-radius: 5px;
    margin-left: 36px;
    padding: 3px;
  }
`;