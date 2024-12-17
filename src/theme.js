import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#a81947",
        light: '#ed6474'
      },
      secondary: {
        main: '#efd3a1',
        light: '#ffecab'
      },
      // third: {
      // },
    },
    typography: {
      fontFamily: ["Cairo", "Courier", "monospace"].join(","),
    },
  })
);

export default theme;