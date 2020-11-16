const CONTACT_CARD_PROFIL_PHOTO_SIZE = 80;

const styles = (theme) => ({
  contactCardProfilPhoto: {
    width: CONTACT_CARD_PROFIL_PHOTO_SIZE,
    height: CONTACT_CARD_PROFIL_PHOTO_SIZE,
    margin: theme.spacing(2),
    borderRadius: "50%",
  },
  contactCardInformations: {
    padding: theme.spacing(2),
    paddingLeft: 0,
  },
  contactCardTitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
});

export default styles;
