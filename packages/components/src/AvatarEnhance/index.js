import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AvatarEnhance({ firstname, lastname, img, externalLinks = [] }) {
  const classes = useStyles();

  return (
    <div className={classes.AvatarEnhance}>
      <Avatar
        alt={`${firstname} ${lastname}`}
        src={img}
        className={classes.avatar}
      />
      <div className={classes.text}>
        <Typography variant="h6" component="p">
          {firstname} <span style={{ opacity: 0.7 }}>{lastname}</span>
        </Typography>

        <Typography
          variant="subtitle2"
          color="textSecondary"
          component="p"
          className={classes.subtitle}
        >
          Développeur Front-End
        </Typography>

        <div>
          {externalLinks.map(({ icon: Icon, href }, i) => (
            <IconButton
              key={href}
              edge={i === 0 ? "start" : false}
              size="small"
              className={classes.externalLinkIcon}
              href={href}
            >
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
}

AvatarEnhance.propTypes = {
  img: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  externalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
    })
  ),
};

export default AvatarEnhance;
