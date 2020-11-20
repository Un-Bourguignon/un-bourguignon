import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./preview-styles.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </MuiThemeProvider>
  ),
];
