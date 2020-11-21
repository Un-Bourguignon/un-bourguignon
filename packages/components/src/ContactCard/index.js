import React, { useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOnOutlined";
import MailIcon from "@material-ui/icons/MailOutlined";
import PhoneIcon from "@material-ui/icons/PhoneOutlined";
import AddressItemButton from "../AddressItemButton";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ContactCard({
  elevation = 0,
  image = "",
  imageTitle = "",
  title = "",
  job = "",
  location = { label: "", mapLink: "" },
  email = "",
  phone = "",
  actions = null,
  vertical = false,
}) {
  const classes = useStyles({ vertical });
  const ref = useRef(null);

  return (
    <Paper
      variant={elevation ? "elevation" : "outlined"}
      elevation={elevation}
      ref={ref}
      className={classes.ContactCard}
      component="article"
    >
      <div className={classes.container}>
        <div className={classes.profilPhotoContainer}>
          <CardMedia
            className={classes.profilPhoto}
            image={image}
            title={imageTitle}
          />
        </div>
        <div>
          <div className={classes.contactCardInformations}>
            <header>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                className={classes.contactCardTitle}
              >
                {job}
              </Typography>
              <Typography
                variant="h5"
                className={classes.contactCardTitle}
                gutterBottom
              >
                {title}
              </Typography>
            </header>

            <address className={classes.address}>
              <AddressItemButton
                link={location.mapLink}
                label={location.label}
                icon={LocationOnIcon}
              />
              <AddressItemButton
                link={`mailto:${email}`}
                label={email}
                icon={MailIcon}
              />
              <AddressItemButton
                link={`tel:${phone}`}
                label={phone}
                icon={PhoneIcon}
              />
            </address>
          </div>
        </div>
      </div>
      {actions && <footer>{actions}</footer>}
    </Paper>
  );
}

ContactCard.propTypes = {
  elevation: PropTypes.number,
  image: PropTypes.string,
  imageTitle: PropTypes.string,
  title: PropTypes.string,
  job: PropTypes.string,
  location: PropTypes.exact({
    label: PropTypes.string,
    mapLink: PropTypes.string,
  }),
  email: PropTypes.string,
  phone: PropTypes.string,
  actions: PropTypes.element,
  vertical: PropTypes.bool,
};

export default ContactCard;
