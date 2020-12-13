import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import reducer from "./reducer";
import { CHANGE_PALETTE_MODE, CHANGE_PREFERRED_MODE } from "./constants";

const initThemeOptions = {};

export const DispatchThemeContext = React.createContext(() => {
  throw new Error("Forgot to wrap component in `ThemeProvider`");
});

export function ThemeProvider({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const preferredMode = prefersDarkMode ? "dark" : "light";

  const [themeOptions, dispatch] = React.useReducer(reducer, initThemeOptions);

  React.useEffect(() => {
    if (process.browser) {
      dispatch({
        type: CHANGE_PREFERRED_MODE,
        payload: { preferredMode },
      });
    }
  }, [preferredMode]);

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: themeOptions.paletteMode || themeOptions.preferredMode,
        },
      }),
    [themeOptions.paletteMode, themeOptions.preferredMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <DispatchThemeContext.Provider value={dispatch}>
        {children}
      </DispatchThemeContext.Provider>
    </MuiThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export function useChangePaletteMode() {
  const dispatch = React.useContext(DispatchThemeContext);

  return React.useCallback(
    (paletteMode) =>
      dispatch({
        type: CHANGE_PALETTE_MODE,
        payload: { paletteMode },
      }),
    [dispatch]
  );
}
