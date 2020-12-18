import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AppLayout({ children, header, footer }) {
  const classes = useStyles();

  return (
    <>
      <main className={classes.appLayout}>
        {header && <header>{header}</header>}
        <div className={classes.appLayoutMain}>{children}</div>
        {footer && <footer>{footer}</footer>}
      </main>
    </>
  );
}

AppLayout.propTypes = {
  footer: PropTypes.element,
  header: PropTypes.element,
  children: PropTypes.node,
};

export default AppLayout;
