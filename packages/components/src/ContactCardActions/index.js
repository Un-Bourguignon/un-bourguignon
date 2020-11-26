import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import GetAppIcon from "@material-ui/icons/GetApp";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ContactCardActions({ externalLinks = [], vcf }) {
  const classes = useStyles();

  return (
    <div className={classes.ContactCardActions}>
      <div>
        {externalLinks.map(({ icon: Icon, href }) => (
          <IconButton target="_blank" href={href}>
            <Icon />
          </IconButton>
        ))}
      </div>
      <Tooltip title="Télécharger mon contact">
        <IconButton href={vcf}>
          <GetAppIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
}

ContactCardActions.propTypes = {
  externalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      href: PropTypes.string,
    })
  ),
  vcf: PropTypes.string,
};

export default ContactCardActions;
