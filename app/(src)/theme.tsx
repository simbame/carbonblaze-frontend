import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1d563d", // Your desired primary main color
    },
    // You can also define other palette colors like secondary, error, warning, etc.
    secondary: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

export default theme;
