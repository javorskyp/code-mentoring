import React, { FunctionComponent } from 'react';
import styled from "styled-components";
import { NavbarStateProps } from './types';

export const BurgerMenu: FunctionComponent<NavbarStateProps> = ({ isNavbarOpen, handleNavbar }) => {
  return (
    <Wrapper onClick={() => handleNavbar(!isNavbarOpen)}>
      <div className={isNavbarOpen ? 'open' : ''}>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </div>
    </Wrapper>
  );
}

export default BurgerMenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .3rem;
  cursor: pointer;
  display: block;

  & span {
    background: #00d664;
    display: block;
    position: relative;
    width: 2rem;
    height: .2rem;
    margin-bottom: .5rem;
    transition: all ease-in-out 0.2s;
    border-radius: 1px;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;


