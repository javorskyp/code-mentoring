import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif, 'Lato', 'Raleway', 'Righteous', 'Open Sans';
    background: var(--LightPurple);
  }

:root {
  --PrimaryDarker:rgba(0, 73, 122, 1);
  --PrimaryDark: rgba(0, 94, 157, 1);
  --PrimaryBasic: rgba(0, 113, 190, 1);
  --PrimaryLight: rgba(46, 139, 202, 1);
  --PrimaryLighter: rgba(139, 190, 225, 1);

  --SecondaryDarker:rgba(180, 66, 0, 1);
  --SecondaryDark: rgba(200, 73, 0, 1);
  --SecondaryBasic: rgba(219, 80, 0, 1);
  --SecondaryLight:rgba(228, 127, 69, 1) ;
  --SecondaryLighter:rgba(238, 175, 139, 1);
  --SecondaryFirebase:rgba(246,130,13, 1);  
  --SecondaryFirebaseYellow:rgba(255, 203, 43, 1)
  
  --StandardWarn:rgba(242, 188, 12, 1);
  --StandardDanger:rgba(195, 54, 54, 1);
  --StandardSuccess:rgba(0, 153, 61, 1);
  --ExtraSuccess:rgba(0, 213, 100, 1);
  
  --LightThemeBcg: rgba(241, 246, 249, 1);
  --LightThemeLightContrast:rgba(220, 233, 241, 1) ;
  --LightThemeOpposite: rgba(33, 38, 42, 1);
  --LightThemeStrongContrast: rgba(66, 76, 83, 1);
  --LightThemeDisabled: rgba(185, 211, 228, 1) ;
  --LightThemeSpi: rgba(246, 249, 252, 1);
  --LightPurple: rgba(17, 24, 47, 1);
  
  --DarkThemeBcg: rgba(48, 48, 48, 1);
  --DarkThemeLightContrast: rgba(66, 76, 83, 1);
  --DarkThemeOpposite: rgba(241, 246, 249, 1);
  --DarkThemeStrongContrast:rgba(220, 233, 241, 1) ;
  --DarkThemeDisabled:rgba(98, 113, 124, 1) ;
  --DarkThemeSpi:rgba(22, 29, 41, 1);
  --DarkThemeSpi2:rgba(16, 25, 42, 1);

}
  
`;
export default GlobalStyles;



