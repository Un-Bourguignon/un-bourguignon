import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import HeaderTeleporter from "./HeaderTeleporter";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AppLayout({ children, footer }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appLayout}>
        <header>
          <HeaderTeleporter.Target />
        </header>

        <main className={classes.appLayoutMain}>{children}</main>
      </div>
      {footer && <footer>{footer}</footer>}
    </>
  );
}

AppLayout.propTypes = {
  footer: PropTypes.element,
  header: PropTypes.element,
};

export default AppLayout;
