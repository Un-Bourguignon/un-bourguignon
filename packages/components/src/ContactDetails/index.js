import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import styles from "./styles";

const useStyles = makeStyles(styles);

const ContactDetailsItem = ({ icon: Icon, text, href }) => {
  const classes = useStyles();

  return (
    <ListItem button component="a" href={href} target="_blank">
      <ListItemIcon className={classes.contactDetailsItemIcon}>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

function ContactDetails({ email, phone, location }) {
  return (
    <List aria-label="contact details" dense>
      <ContactDetailsItem
        icon={MailOutlineIcon}
        text={email}
        href={`mailto:${email}`}
      />
      <ContactDetailsItem
        icon={PhoneOutlinedIcon}
        text={phone}
        href={`tel:${phone}`}
      />
      <ContactDetailsItem
        icon={LocationOnOutlinedIcon}
        text={location.label}
        href={location.mapLink}
      />
    </List>
  );
}

ContactDetails.propTypes = {
  email: PropTypes.string,
  location: PropTypes.shape({
    label: PropTypes.string,
    mapLink: PropTypes.string,
  }),
  phone: PropTypes.string,
};

export default ContactDetails;
