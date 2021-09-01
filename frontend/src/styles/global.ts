import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f3f3f3 ;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px "Montserrat", sans-serif;
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
