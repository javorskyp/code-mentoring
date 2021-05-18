import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ActionButton } from 'src/components/elements';


const Styles = styled.div`
background: var(--LightThemeSpi);
height: 13rem;
/* var(--LightThemeSpi); */
p {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding-top: 42px;
    margin-bottom: 15px;
    font-weight: 600;
}
`;

const ButtonWrapper = styled.div`
        display: flex;
        padding: 30px 40px 40px 40px;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
`;

export const Join: FunctionComponent = () => (
    <Styles>
        <div>
            <p>Join to us </p>
        </div>
        <ButtonWrapper>
            <Link to='auth/login' style={{ textDecoration: 'none' }}>
                <ActionButton background="linear-gradient(315deg,#56ccf2 0,#3a95ee 73%,#2f80ed 100%)" name="Login" margin="default" />
            </Link>
        </ButtonWrapper>
    </Styles>

);