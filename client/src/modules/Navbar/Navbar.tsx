import React, { FunctionComponent, useContext, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";
import Burger from "./Burger";
import CollapseMenu from "./CollapseMenu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth/AuthContext";
import { Link as LinkScroll } from "react-scroll";

const Navbar: FunctionComponent = () => {
  const { isAuthenticated, loading, logOut } = useContext(AuthContext);

  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  const [isNavbarOpen, setNavbarOpen] = useState(false);
  const handleNavbar = ( shouldOpen: boolean ) => {
    setNavbarOpen(shouldOpen)
  }
  const guestLinks = (
    <>
      <Link to="/auth/register">Sign up</Link>
      <Link to="/auth/login">Log in</Link>
    </>
  );
  const authLinks = (
    <>
      <Link to="/">Profile</Link>
      <Link onClick={() => logOut} to="/">Sign out</Link>
    </>
  );

  return (
    <NavBar style={barAnimation}>
      <FlexContainer>
        <Brand />
        <NavLinks style={linkAnimation}>
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
          {!loading && isAuthenticated ? authLinks : guestLinks}
        </NavLinks>
        <BurgerWrapper>
          <Burger isNavbarOpen handleNavbar={handleNavbar} />
        </BurgerWrapper>
      </FlexContainer>
      <CollapseMenu isNavbarOpen handleNavbar={handleNavbar} />
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  background: var(--LightThemeBcg);
  z-index: 1;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 3.5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: var(--PrimaryDark);
    text-transform: none;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1rem;
    transition: all 100ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;

    &:hover {
      color: #00d664;
      border-bottom: 1px solid #00d664;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
