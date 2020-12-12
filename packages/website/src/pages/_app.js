import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AppLayout } from "@un-bourguignon/components";
import { ThemeProvider } from "../components/UserContext";
import AppFooter from "../components/AppFooter";
import "../styles.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const isFreelancePage = this.props.router.pathname === "/stephane.maire";

    return (
      <>
        <Head>
          <title>Un Bourguignon</title>
        </Head>

        <ThemeProvider>
          <CssBaseline />
          <AppLayout footer={!isFreelancePage ? <AppFooter /> : null}>
            <Component {...pageProps} />
          </AppLayout>
        </ThemeProvider>
      </>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pageProps: PropTypes.object,
};

export default MyApp;
