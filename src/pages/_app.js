import React from "react";
import PropTypes from "prop-types";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import AppLayout from "../components/AppLayout";
import AppFooter from "../components/AppFooter";
import makeStore from "../makeStore";
import theme from "../theme";
import "../styles.css";

const INITIAL_STATE = {};
const store = makeStore(INITIAL_STATE);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const isFreelancePage = this.props.router.pathname === "/stephane.maire";

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout footer={!isFreelancePage ? <AppFooter /> : null}>
            <Component {...pageProps} />
          </AppLayout>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pageProps: PropTypes.object,
};

export default MyApp;
