import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${variables.colors.background};
}

code {
  font-family: 'Inter', sans-serif;
  font-family: 'Manrope', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

a {
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

input {
  margin: 0;
}

textarea {
  resize: none;
}

.body-fixed {
  overflow: hidden;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyles;
