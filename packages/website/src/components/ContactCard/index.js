import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./styles";

const useStyles = makeStyles(styles);

function ContactCard({
  image,
  imageTitle,
  title,
  location,
  email,
  phone,
  actions,
}) {
  const classes = useStyles();

  return (
    <Paper variant="outlined" elevation={0}>
      <Grid container spacing={0}>
        <Grid item>
          <CardMedia
            className={classes.contactCardProfilPhoto}
            image={image}
            title={imageTitle}
          />
        </Grid>
        <Grid item>
          <div className={classes.contactCardInformations}>
            <Typography
              variant="subtitle1"
              className={classes.contactCardTitle}
            >
              {title}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {location}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {email}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              {phone}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          {actions}
        </Grid>
      </Grid>
    </Paper>
  );
}

ContactCard.propTypes = {
  image: PropTypes.string,
  imageTitle: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  actions: PropTypes.element,
};

export default ContactCard;
