import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AvatarEnhance({
  firstname,
  lastname,
  job = "",
  bottomComponent = null,
  small = false,
  asParagraph = false,
  children,
}) {
  const classes = useStyles({ small });

  return (
    <div className={classes.AvatarEnhance}>
      <div className={classes.avatarContainer}>
        <div className={classes.avatar}>{children}</div>
      </div>
      <div className={classes.text}>
        <Typography
          variant="h6"
          component={asParagraph ? "p" : "h1"}
          className={classes.name}
        >
          {firstname} <span style={{ opacity: 0.7 }}>{lastname}</span>
        </Typography>

        <Typography
          variant="subtitle1"
          color="textSecondary"
          component={asParagraph ? "p" : "h2"}
          className={classes.subtitle}
        >
          {job}
        </Typography>

        {small ? null : bottomComponent}
      </div>
    </div>
  );
}

AvatarEnhance.propTypes = {
  children: PropTypes.node.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  job: PropTypes.string,
  bottomComponent: PropTypes.element,
  small: PropTypes.bool,
  asParagraph: PropTypes.bool,
};

export default AvatarEnhance;
export { AVATAR_DIMENSION } from "./styles";
