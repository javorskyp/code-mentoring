import React, { FunctionComponent } from 'react';
import { CardItemProps } from './types';

export const CardItem: FunctionComponent<CardItemProps> = ({ title, description }) => (
    <li className="cardItem__wrapper">
        <div>
            <h2 className="cardItem__name">
                {title}
            </h2>
            <p className="cardItem__description">
                {description}
            </p>
        </div>
    </li>
);
