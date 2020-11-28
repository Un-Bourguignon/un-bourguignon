import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  PERSONAL_DETAILS,
  GITHUB_COLOR,
  LINKEDIN_COLOR,
} from "../../constants";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ButtonNetworkProfils() {
  const classes = useStyles();

  return (
    <div>
      <Button
        startIcon={<GitHubIcon style={{ color: GITHUB_COLOR }} />}
        className={classes.button}
        size="large"
        href={PERSONAL_DETAILS.GitHub}
        target="_blank"
        rel="noopener"
      >
        GitHub
      </Button>
      <Button
        startIcon={<LinkedInIcon style={{ color: LINKEDIN_COLOR }} />}
        className={classes.button}
        size="large"
        href={PERSONAL_DETAILS.LinkedIn}
        target="_blank"
        rel="noopener"
      >
        Linkedin
      </Button>
    </div>
  );
}

export default ButtonNetworkProfils;
