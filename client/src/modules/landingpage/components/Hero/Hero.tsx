import React from 'react';
import styled from 'styled-components';
import alvaroReyesCoders from '../../../../assets/alvaroReyesCoders.jpg';

const Styles = styled.div ` 
    background: var(--LightThemeBcg);
    height: 100vh;
    overflow: hidden;
`;
 //extra linear gradient linear-gradient(315deg,#56ccf2 0,#3a95ee 73%,#2f80ed 100%);
const Wrapper = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`;

const Text = styled.p`
    color:var(--DarkThemeOpposite);
    position:absolute;
    top:38vh;    
    max-width: 940px;
    height: 176px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: bold;
    font-size: 39px;
    line-height: 73px;
    text-align: center;
`;

const Arrow = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    align-items: center;
    top: 80vh;
    border: solid var(--DarkThemeOpposite);
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);    
`;

const Mask = styled.div`
    height: 100vh;
    width: 1400px;
    filter: blur(1px);
    background-color:var(--PrimaryDark);
    opacity:0.6;

`;

const ImgOfCoders =styled.img`
    height: 100vh;
    width: 1400px;
    border-radius: 5px;
`;

export const Hero = () => (
    <Styles id="section1">
         <Wrapper>
             <Mask>
                
             </Mask>
             <Text>Poznaj ludzi, z którymi rozwiniesz swoje umiejętności</Text>
             <Arrow/>
        </Wrapper>
    </Styles>
);
