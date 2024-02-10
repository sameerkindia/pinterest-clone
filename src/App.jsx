import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./App.styled";
import Home from "./pages/home/Home";
import { THEME } from "./utils/themes";
import { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  function toggleTheme() {
    setCurrentTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme={THEME[currentTheme]}>
      <GlobalStyles />
      <Home toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
