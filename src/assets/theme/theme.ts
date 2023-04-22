import { createTheme } from "@mui/material";
import typography from "./typography";

declare module "@mui/material/styles" {
  interface Theme {
    logoColor: string;
    navbarHeight: string;
    mobileNavbarHeight: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    logoColor?: string;
    navbarHeight?: string;
    mobileNavbarHeight?: string;
  }
}

const baseTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1320,
      xl: 1920,
    },
  },
  navbarHeight: "70px",
  mobileNavbarHeight: "55px",
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "16px",
        },
        text: {
          letterSpacing: "2px",
          borderRadius: 0,
          "&:hover": {
            color: "rgb(230,230,230)",
            backgroundColor: "inherit",
          },
        },
      },
    },
  },
});

const darkTheme = createTheme(baseTheme, {
  palette: {
    background: {
      default: "#1A1A1A ",
      paper: "#bd3b22",
    },
    primary: {
      main: "#bd3b22",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2C394B",
      contrastText: "#fff",
    },
    text: {
      primary: "#FFF",
      secondary: "rgb(200,200,200)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  logoColor: "#fff",
});

const lightTheme = createTheme(baseTheme, {
  palette: {
    background: {
      default: "#e0e2e4",
    },
    primary: {
      main: "#c6bcb6",
      contrastText: "#000",
    },
    secondary: {
      main: "#96897f",
      contrastText: "rgb(230,230,230)",
    },
    text: {
      primary: "#000",
      secondary: "rgb(30,30,30)",
    },
    action: {
      disabled: "rgb(70,70,70)",
      disabledBackground: "rgb(150,150,150)",
    },
  },
  backgroundSecondary: {
    bg: "#6F4C5B",
    text: "rgb(230,230,230) ",
  },
  logoColor: "#6F4C5B",
});

export { darkTheme, lightTheme };
