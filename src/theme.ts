import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#023365",
      dark: "#112B45",
      light: "#1E65AE",
    },
    secondary: {
      main: "#00E6B2",
      dark: "#0DC298",
      light: "#00FCC1",
    },
    error: {
      main: "#e6494e",
      light: "#e85b5f",
      dark: "#cf4146",
    },
  },
  typography: {
    fontFamily: ["IBM Plex Sans", "sans-serif"].join(","),
  },
});
export default theme;
