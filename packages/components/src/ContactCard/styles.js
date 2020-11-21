const CONTACT_CARD_PROFIL_PHOTO_SIZE = 80;
import grey from "@material-ui/core/colors/grey";

const styles = (theme) => ({
  ContactCard: {
    display: ({ fullWidth }) => (fullWidth ? "block" : "inline-block"),
  },
  container: {
    display: "flex",
    flexDirection: ({ vertical }) => (vertical ? "column" : "row"),
    backgroundColor: grey[50],
    borderRadius: theme.shape.borderRadius,
  },
  profilPhotoContainer: {
    display: "flex",
    alignItems: "center",
  },
  profilPhoto: {
    width: CONTACT_CARD_PROFIL_PHOTO_SIZE,
    height: CONTACT_CARD_PROFIL_PHOTO_SIZE,
    margin: theme.spacing(2),
    marginTop: ({ vertical }) => (vertical ? theme.spacing(2) : 0),
    borderRadius: "50%",
  },
  contactCardInformations: {
    padding: theme.spacing(2),
  },
  contactCardTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  address: {
    fontStyle: "inherit",
  },
});

export default styles;
