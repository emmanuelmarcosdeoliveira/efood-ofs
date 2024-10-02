import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto",  sans-serif;
  background-color: ${colors.color4};
  color: ${colors.color2}
  }
a {
  text-decoration: none;
  color: inherit;
}
li {
  list-style: none;
}
:is(h1, h2, h3, h4) {
  margin: 0; 
  padding: 0;  
}
.wrapper {
  width: min(90% , 1024px);
  margin-inline: auto;
   @media (max-width: 786px ) {
    max-width: 95%;
  } 
}
`;
