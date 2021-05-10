import React, { FunctionComponent } from 'react'
import styled from "styled-components";
import logo from "../../assets/logo2k26.png";
import { Link } from 'react-router-dom';

const Brand: FunctionComponent = () => {
  return (
    <Link to="/">
      <Image src={logo} alt="Company Logo" />
    </Link>
  )
}

export default Brand

const Image = styled.img`
  height: 100%;
  margin-left: 20px;
`;
