import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Styles = styled.footer ` 
    background-color: var(--DarkThemeSpi);
    height: auto;
    .section {
        margin: auto;
               
    }

    .footer_links {
        margin: auto;
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-shrink: 1;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-around;
        font-size: 12px;
        font-weight: 600;
    }

    a { margin: 4px;
        text-decoration: none;
        color:var(--LightThemeBcg);
        padding: 8px;
        &:hover {   color: var(--ExtraSuccess);
                    border-bottom: 1px solid var(--ExtraSuccess);
    }
    @media (max-width: 768px) {
      display: inline-block;
      flex-direction: row;
      
    }
   
        }
`;

export const Footer: FunctionComponent = () => (
 <Styles>
     <div className="section">
         <ul className="footer_links">
            <div>
                <a href="/"><span>Polityka Cookies</span></a>
                <a href="/"><span>Warunki korzystania</span></a>
                <a href="/"><span>Centrum pomocy</span></a>
            </div>
            <div>
                <a href="/"><span>4Dev&Mentor © 2020</span></a>
            </div>
         </ul>   
     </div>
 </Styles>
);
