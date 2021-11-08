import "@emotion/react"
import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#848A7D",
    },
    text: {
      primary: "#464646",
    },
    grey: {
      "700": "#464646",
    },
    common: {
      black: "#464646",
    },
  },
  typography: {
    fontSize: 16, // updated from 14 to 16
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    fontWeightBold: 400, // 600 to 400
    h1: {
      fontSize: 80,
      fontWeight: 400,
      marginBottom: "15px",
      lineHeight: 1.2,
      "@media only screen and (max-width: 767px)": {
        fontSize: 40,
      },
    },
    h2: {
      fontSize: 50,
      marginBottom: "30px",
      fontWeight: 400,
      lineHeight: 1.4,
      "@media only screen and (max-width: 767px)": {
        fontSize: 25,
      },
    },
    h3: {
      fontSize: 40,
      fontWeight: 400,
      lineHeight: 1.4,
      marginBottom: 30,
      "@media only screen and (max-width: 767px)": {
        fontSize: 25,
      },
    },
    h4: {
      fontSize: 30, // 20px -> 34px
      marginBottom: 21, // 20px -> 24px 0
      fontWeight: 400, // 400 -> bold
      lineHeight: 1.4,
      "@media only screen and (max-width: 767px)": {
        fontSize: 20,
      },
    },
    h5: {
      fontSize: 24, // 18px -> 24px
      fontWeight: 400, // 400 -> bold
      lineHeight: 1.4,
    },
    h6: {
      fontSize: 20,
      marginBottom: "20px",
      fontWeight: 400,
      lineHeight: 1.4,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          maxWidth: "1122px !important",
        },
        maxWidthMd: {
          maxWidth: "860px !important",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 400, // 500 -> 600
          fontSize: 20,
          textTransform: "inherit",
          boxShadow: "none",
          minWidth: "150px",
          padding: "8px 10px",
          borderRadius: 0,
          "&:not(:hover)": {
            boxShadow: "none",
          },
        },
      },
    },
  },
})
