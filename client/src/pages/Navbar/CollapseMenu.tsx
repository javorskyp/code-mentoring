import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { Link as LinkScroll } from "react-scroll";
import { AuthContext } from "src/context/auth";
import { NavbarStateProps } from "./types";

const CollapseMenu: FunctionComponent<NavbarStateProps> = ({ isNavbarOpen, handleNavbar }) => {
  const { isAuthenticated, loading, logOut } = useContext(AuthContext);

  const guestLinks = (
    <>
      <li>
        <Link to="/register">
          Sign up
        </Link>
      </li>
      <li>
        <Link to="/login">
          Sign in
        </Link>
      </li>
    </>
  );

  const authLinks = (
    <>
      <li>
        <Link to="/">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/" onClick={() => logOut}>
          Sign out
        </Link>
      </li>
    </>
  );

  const { open } = useSpring({ open: Number(!isNavbarOpen) });


  return (
    <>{
      isNavbarOpen && <CollapseWrapper
        onClick={() => handleNavbar(!isNavbarOpen)}
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200]
            })
            .interpolate((openValue: number) => `translate3d(0, ${openValue}px, 0`)
        }}
      >
        <NavLinks>
          <li>
            <LinkScroll
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              About us
          </LinkScroll>
          </li>
          <li>
            <LinkScroll
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Become a mentor
          </LinkScroll>
          </li>

          {!loading && isAuthenticated ? authLinks : guestLinks}
        </NavLinks>
      </CollapseWrapper>
    }</>
  );
}

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #f8f8f8;
  position: fixed;
  top: 3.5rem;
  left: 0;
  right: 0;
  z-index: 10;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 1rem 1rem 1rem 2rem;
  font-weight: 600;

  & li {
    transition: all 200ms linear 0s;
  }

  & a {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--PrimaryDark);
    text-transform: none;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #00d664;
      border-bottom: 1px solid #00d664;
    }
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
