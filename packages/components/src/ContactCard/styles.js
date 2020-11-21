const CONTACT_CARD_PROFIL_PHOTO_SIZE = 80;

const styles = (theme) => ({
  ContactCard: {
    display: "inline-block",
  },
  container: {
    display: "flex",
    flexDirection: ({ vertical }) => (vertical ? "column" : "row"),
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
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.success.light,
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
