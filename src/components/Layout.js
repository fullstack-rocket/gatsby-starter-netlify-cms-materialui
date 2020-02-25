import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";

const theme = createMuiTheme({
  typography: {
    fontSize: 12,
    h1: {
      fontSize: "4rem"
    },
    h2: {
      fontSize: "3rem"
    },
    h3: {
      fontSize: "2rem"
    }
  },
  overrides: {
    MuiLink: {
      underlineNone: true
    }
  },
  palette: {
    primary: red,
    secondary: green
  },
  footer: { backgroundColor: grey[800] },
  status: {
    danger: "orange"
  }
});
console.log(theme);

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <CssBaseline />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          height="100vh"
          justifyContent="space-between"
          flexDirection="column"
        >
          <div>
            <Navbar />
            <div style={{ paddingTop: "40px", marginBottom: "20px" }}>
              {children}
            </div>
          </div>
          <Footer />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default TemplateWrapper;
