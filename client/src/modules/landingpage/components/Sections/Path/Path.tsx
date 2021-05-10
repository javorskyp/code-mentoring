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
        title: 'Rozwijaj swoje pomysły wspólnie z innymi',
        description: 'Wspólna nauka często prowadzi do stworzeia pomysłu, który może okazać się wielkim krokiem w Twojej karierze. Rozwijaj wspólnie nowe rewolucyjne projekty'
    },
    {
        title: 'Znajdź swojego mentora',
        description: 'Dzięki pomocy doświadczonego dewelopera dużo łatwiej będzie Ci zdobywać wiedzę i umiejętności profesjonalnego programisty'
    },
    {
        title: 'Rozwijaj się szybciej dzięki dzieleniu się wiedzą',
        description: 'Utrwalaj swoją wiedzę ucząc innych. Podczas tego sposobu poprawiasz skuteczność przekazu informacji a także swoją wiedzę z nauczania dziedziny'
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
