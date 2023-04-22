import { useState, useEffect, Suspense } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./assets/theme";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import ThemeContext from "./contexts/themeContext";
import LoaderContext from "./contexts/loaderContext";

// declare module '@mui/styles/defaultTheme' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   interface DefaultTheme extends Theme {}
// }

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
          <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <CssBaseline />
                <ScrollToTop />
                <Routes />
              </ThemeProvider>
            </StyledEngineProvider>
          </LoaderContext.Provider>
        </ThemeContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
