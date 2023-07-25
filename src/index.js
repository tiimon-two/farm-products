import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { defaultTheme } from "./theme/default";
import { ThemeProvider } from "styled-components";

import App from "./components/app/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
