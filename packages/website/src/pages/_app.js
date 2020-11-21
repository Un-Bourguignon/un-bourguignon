import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AppLayout } from "@un-bourguignon/components";
import AppFooter from "../components/AppFooter";
import theme from "../theme";
import "../styles.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const isFreelancePage = this.props.router.pathname === "/stephane.maire";

    return (
      <>
        <Head>
          <title>Un Bourguignon</title>
          <meta name="theme-color" content={theme.palette.primary.main} />
        </Head>

        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout footer={!isFreelancePage ? <AppFooter /> : null}>
            <Component {...pageProps} />
          </AppLayout>
        </MuiThemeProvider>
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pageProps: PropTypes.object,
};

export default MyApp;
