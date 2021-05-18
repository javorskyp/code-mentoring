import React, { useContext, useEffect } from "react";
import { AuthContext } from "src/context/auth/AuthContext";
import { Footer } from '../../components/elements/Footer';
import { Hero } from "./components/Hero";
import { About, Join, Path } from "./components/Sections";

export const LandingPage = () => {
  const { loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Hero />
      <About />
      <Path />
      <Join />
      <Footer />
    </>
  );
};
