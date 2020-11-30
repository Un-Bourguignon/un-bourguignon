import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.AppFooter}>
      <Container maxWidth="sm" className={classes.container}>
        <Typography variant="body1" className={classes.footerAppName} paragraph>
          Un Bourguignon
        </Typography>
        <Typography variant="body2">Copyright © 2020 Un Bourguignon</Typography>
      </Container>
    </div>
  );
}

export default AppFooter;
