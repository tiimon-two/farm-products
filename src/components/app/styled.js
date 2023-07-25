import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 
html {
  height: 100%;
}

html,
body {
  margin: 0;
}

h1,
h2,
h3,
h4 {
  text-align: center;
  font-weight: 700;
  line-height: 115%;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 44px;
}

h2 {
  font-size: 36px;
}

h3 {
  font-size: 32px;
}

h4 {
  font-size: 24px;
}

body {
  position: relative;
  min-height: 100%;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #333333;
}
`;
