import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";

const useStyles = makeStyles(styles);

function AddressItemButton({ link, label, icon: Icon }) {
  const classes = useStyles();

  return (
    <ButtonBase
      href={link}
      target="_blank"
      className={classes.buttonBaseWrapper}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        className={classes.info}
      >
        <Icon className={classes.icons} />
        &nbsp;{label}
      </Typography>
    </ButtonBase>
  );
}

AddressItemButton.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.elementType,
};

export default AddressItemButton;
