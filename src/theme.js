import { createTheme } from "@mui/material/styles";

// Navy blue theme for DEMA
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0b2545",
      dark: "#081a2e",
      light: "#1a3a5c",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f5a623",
      dark: "#d4851a",
      light: "#f7b845",
      contrastText: "#0b2545",
    },
    background: {
      default: "#ffffff",
      paper: "#fbfdff",
    },
    text: {
      primary: "#0b2545",
      secondary: "#243044",
    },
    divider: "rgba(11, 37, 69, 0.12)",
  },
  typography: {
    fontFamily: "Inter, Roboto, Helvetica, Arial, sans-serif",
  },
});

export default theme;
