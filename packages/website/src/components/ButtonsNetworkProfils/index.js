import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Malt from "../../../public/malt.svg";
import {
  PERSONAL_DETAILS,
  LINKEDIN_COLOR,
} from "../../constants";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ButtonNetworkProfils() {
  const classes = useStyles();

  return (
    <div>
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
      <Button
        startIcon={<Malt />}
        className={classes.button}
        size="large"
        href={PERSONAL_DETAILS.Malt}
        target="_blank"
        rel="noopener"
      >
        Malt
      </Button>
    </div>
  );
}

export default ButtonNetworkProfils;
