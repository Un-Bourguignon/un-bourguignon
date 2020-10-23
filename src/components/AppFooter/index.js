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
        <div>
          <Typography variant="subtitle2">Un Bourguignon . SASU</Typography>
        </div>
        <Typography variant="caption">© Un Bourguignon 2020</Typography>
      </Container>
    </div>
  );
}

export default AppFooter;
