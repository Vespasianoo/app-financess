import { createGlobalStyle } from "styled-components"

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
  color: var(--white);
}

:root {
  --bg-color: #121214;
  --color-1: #0ae360;
  --color-2: #eb5b64;
  --color-3: #242424;
  --color-4: rgba(36, 36, 36, 0.25);

  --white: #ffffff;
  --black: #000000;

  font-size: 62.5%;
}

body {
  max-width: 100vw;
  max-height: 100vh;
  width: 100%;
  height: 100%;
  background: var(--bg-color);

  font-size: 1.6rem;
  color: var(--white);
}

`
