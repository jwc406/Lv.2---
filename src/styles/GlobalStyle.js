import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }
  
  #root > div {
    max-width: 1200px;
    min-width: 800px;
    height: 100vh;
    margin: 0 auto;
  }`;

export default GlobalStyle;
