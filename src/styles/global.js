import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  .root {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height:100%;
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  *{
      box-sizing: border-box;
  }
`;
