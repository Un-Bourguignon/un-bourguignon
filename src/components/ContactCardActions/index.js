import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ContactCardActions() {
  const classes = useStyles();

  return (
    <div className={classes.ContactCardActions}>
      <div>
        <Button size="small" className={classes.gitHubButton}>
          <GitHubIcon /> &nbsp; Réalisations
        </Button>
        <Button>
          <LinkedInIcon /> &nbsp; Expérience
        </Button>
      </div>
      <IconButton size="small" edge="end">
        <GetAppIcon />
      </IconButton>
    </div>
  );
}

export default ContactCardActions;
