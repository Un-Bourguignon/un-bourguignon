import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import LinkMui from "@material-ui/core/Link";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.AppFooter}>
      <Container maxWidth="sm" className={classes.container}>
        <Link href="/" passHref>
          <LinkMui color="inherit">
            <Typography
              variant="body1"
              paragraph
              className={classes.footerAppName}
              color="textPrimary"
            >
              Un Bourguignon
            </Typography>
          </LinkMui>
        </Link>
        <Typography variant="body2" color="textSecondary">
          Copyright © 2020 Un Bourguignon
        </Typography>
      </Container>
    </div>
  );
}

export default AppFooter;
