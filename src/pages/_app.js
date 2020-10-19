import React from "react";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import AppLayout from "../components/AppLayout";
import makeStore from "../makeStore";
import theme from "../theme";
import "../styles.css";

const INITIAL_STATE = {};
const store = makeStore(INITIAL_STATE);

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <AppLayout footer={<p>©2020 Un Bourguignon</p>}>
            <Component {...pageProps} />
          </AppLayout>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default MyApp;
