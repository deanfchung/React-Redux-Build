import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.25%;
  }
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem;
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
  }
`
