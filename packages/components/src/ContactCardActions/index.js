import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GetAppIcon from "@material-ui/icons/GetApp";
import {
  CONTACT_FILE_VCF,
  GITHUB_ACCOUNT_URL,
  LINKEDIN_PROFIL_URL,
} from "../../../src/constants";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ContactCardActions() {
  const classes = useStyles();

  return (
    <div className={classes.ContactCardActions}>
      <div>
        <IconButton target="_blank" href={GITHUB_ACCOUNT_URL}>
          <GitHubIcon />
        </IconButton>
        <IconButton target="_blank" href={LINKEDIN_PROFIL_URL}>
          <LinkedInIcon />
        </IconButton>
      </div>
      <Tooltip title="Télécharger mon contact">
        <IconButton href={CONTACT_FILE_VCF}>
          <GetAppIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default ContactCardActions;
