import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import avatar from 'src/assets/logo2k26.png';

export const Avatar: FunctionComponent = () => {
    return (
        <Wrapper>
            <Link to="/">
                <ImageAvatar />
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`display: flex;`;

const ImageAvatar = styled.div`  
    background-image: url(${avatar});
    background-position: center;
    width: 190px;
    height: 40px;
    border-radius: 10%; 
`;