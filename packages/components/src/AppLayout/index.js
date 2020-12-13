import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderTarget } from "./HeaderTeleporter";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AppLayout({ children, footer }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.appLayout}>
        <header>
          <HeaderTarget />
        </header>

        <main className={classes.appLayoutMain}>{children}</main>
      </div>
      {footer && <footer>{footer}</footer>}
    </>
  );
}

AppLayout.propTypes = {
  footer: PropTypes.element,
  children: PropTypes.node,
};

export default AppLayout;
export * from "./HeaderTeleporter";
