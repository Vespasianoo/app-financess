import { createGlobalStyle } from "styled-components"
import theme from "./theme"

export default createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  background: none;
  border: none;
  text-decoration: none;
}

body *,
button,
input {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  font-size: 62.5%;
}

body {
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
 

  font-size: 1.6rem;
  background-color: ${theme.colors.background};
}

`
