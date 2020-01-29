import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body{
    background: linear-gradient(153deg, rgba(4,66,166,1) 0%, rgba(3,46,116,1) 100%);
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #11f5ff;
    font-size: 1rem;
    font-family: 'Roboto Mono', monospace;
  }

  button{
    cursor: pointer;
  }
`;
