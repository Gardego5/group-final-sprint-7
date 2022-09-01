import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Mulish", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: #051622;
    color: white;
  }

  /* width */
  ::-webkit-scrollbar {
    position: absolute;
    width: 15px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgb(248, 244, 244);
    border-radius: 10px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(22, 22, 22);
    border-radius: 10px;
  }

  h1 {
    margin: 2rem 2rem 1rem;
    color: #1ba098;
    text-align: center;
  }
`;

export default GlobalStyle;
