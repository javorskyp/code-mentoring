import styled from 'styled-components';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
    width: 200px;
    background: ${props => props.background || "var(--PrimaryBasic)"};
    border: 0px solid;
    color: var(--LightThemeSpi);
    font-size: 1.1em;
    margin: ${props => props.margin || "1em 3em;"};
    padding: 0.4em 1.7em;
    border-radius: 3px;
    outline: none;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    cursor: pointer;
    float: ${props => props.float || "none"};
    &:hover {
    background: var(--ExtraSuccess);
    border: var(--ExtraSuccess);
    }
`;
