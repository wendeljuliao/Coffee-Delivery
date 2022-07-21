import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeesProvider } from "./contexts/CoffeesContext";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesProvider>
          <Router />
        </CoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
