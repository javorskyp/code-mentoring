import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { CardItem } from '../../CardItem/CardItem';

const Styles = styled.div ` 
    background-color: var(--LightThemeBcg);
    height: auto;

    .card__wrapper {
    max-width: 1100px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    padding-bottom: 80px;
    
    }
    .cardItem__wrapper {
    height: 280px;
    width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    border-radius: 3px;
    background: var(--SecondaryFirebase);
    margin: 25px;
    padding: 10px;
    box-shadow: 2px 2px 2px 2px var(--SecondaryLighter);
    overflow: hidden;
}
.cardItem__wrapper:nth-last-child(2){
    background: linear-gradient(315deg,#56ccf2 0,#3a95ee 73%,#2f80ed 100%);
    box-shadow: 3px 3px 2px 2px var(--PrimaryLighter);
}

.cardItem__name {
    margin-top: 20px;
    color: var(--DarkThemeOpposite);
    font-weight: 700;
    font-size: 15px;
    text-align: center;
    font-family: 'Lato' 'medium';
}

.cardItem__description {
    margin: 5px;
    padding-top: 40px;
    font-weight: 600;
    font-family: 'Raleway' 'light';
    text-align: center;
    font-size: 14px;
    color: var(--DarkThemeSpi);
}
`;

const cardContent = [
    {
        title: 'Develop your ideas together with others',
        description: 'Learning together often leads to an idea that could turn out to be a huge step in your career. Develop new revolutionary projects together'
    },
    {
        title: 'Find your Mentor',
        description: 'Thanks to the help of an experienced developer, it will be much easier for you to acquire knowledge and skills of a professional developer'
    },
    {
        title: 'Grow faster by sharing knowledge',
        description: 'Consolidate your knowledge by teaching others. During this method, you improve the effectiveness of information transfer as well as your knowledge of teaching the field'
    }
];

 export const Path: FunctionComponent = () => (
 <Styles id="section3">
       <ul className="card__wrapper">
        {cardContent.map(item => (
            <CardItem key={item.title} {...item} />
        ))}
       </ul>
 </Styles>
);
