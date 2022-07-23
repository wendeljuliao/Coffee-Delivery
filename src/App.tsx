import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoffeesProvider } from "./contexts/CoffeesContext";
import { UserProvider } from "./contexts/UserContext";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesProvider>
          <UserProvider>
            <Router />
          </UserProvider>
        </CoffeesProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
