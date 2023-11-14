import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    height: 100%;
    background-color: var(--primary);
    color: var(--tertiary);
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  :root {
    --primary: #000000;
    --secondary: #1E1E1E;
    --tertiary: #D9D9D9;
    --quaternary: #ACB1C6;
    --btn-selected: #195BDA;
  }
`

export default GlobalStyle
