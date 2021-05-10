import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import whatWeDo from 'src/assets/whatWeDo.png'

const Styled = styled.div ` 
background-color: var(--LightThemeBcg);
height: 28rem;

ul {
    display: flex;
    justify-content: center;
    font-size: 20px;
    padding-top: 70px;
    font-weight: 600;
}
`;

const ItemWrapper = styled.div `
    width: 70vw;
    margin: auto;
    list-style: none;
    padding: 20px;
    display: flex;
    max-width: 900px;
    
     .item__image {
        flex-shrink: 0;
        width: 150px;
        height: 150px;
        margin: 40px 50px 50px 0px;
        border-radius: 5%;
    }
    .item__name {
        margin-left: 100px;
        
    }
    p {
        padding: 40px 20px 20px 30px;
        font-size: 14px;
        overflow: hidden;
        font-weight: 600;
      }
  
`;

export const About: FunctionComponent = () => (
    <Styled id="section2">
        <ul><span>Po co to wszystko</span></ul>
            <ItemWrapper>
                <img src={whatWeDo} className="item__image" alt="WhatWeDo"/>
                
                <div>
                    
                    <p>Chcemy stworzyć narzędzie, które pozwoli początkującym programistom 
                        znaleźć mentorów, którzy pomogą im szybciej wejść na rynek i tworzyć komercyjne projekty.
                    </p>
                </div>
            </ItemWrapper>
    </Styled>
);

