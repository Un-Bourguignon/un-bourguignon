import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import {GITHUB_ACCOUNT_URL, LINKEDIN_PROFIL_URL} from "../../constants";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ContactCardActions() {
  const classes = useStyles();

  return (
    <div className={classes.ContactCardActions}>
      <div>
        <Button
          size="small"
          className={classes.gitHubButton}
          href={GITHUB_ACCOUNT_URL}
          target="_blank"
        >
          <GitHubIcon /> &nbsp; Réalisations
        </Button>
        <Button size="small" href={LINKEDIN_PROFIL_URL} target="_blank">
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
