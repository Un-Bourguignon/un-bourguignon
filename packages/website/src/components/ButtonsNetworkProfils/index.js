import { useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  PERSONAL_DETAILS,
  GITHUB_COLOR,
  LINKEDIN_COLOR,
} from "../../constants";

const BUTTONS_COLOR = "rgba(0, 0, 0, 0.54)";

function ButtonNetworkProfils() {
  const theme = useTheme();

  const buttonStyle = {
    marginRight: theme.spacing(1),
    color: BUTTONS_COLOR,
  };

  return (
    <div>
      <Button
        startIcon={<GitHubIcon style={{ color: GITHUB_COLOR }} />}
        style={buttonStyle}
        size="large"
        href={PERSONAL_DETAILS.GitHub}
        target="_blank"
      >
        GitHub
      </Button>
      <Button
        startIcon={<LinkedInIcon style={{ color: LINKEDIN_COLOR }} />}
        style={buttonStyle}
        size="large"
        href={PERSONAL_DETAILS.LinkedIn}
      >
        Linkedin
      </Button>
    </div>
  );
}

export default ButtonNetworkProfils;
