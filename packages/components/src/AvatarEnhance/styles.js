const styles = (theme) => ({
  AvatarEnhance: {
    display: "flex",
    alignItems: "stretch",
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    border: `1px solid ${theme.palette.divider}`,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(2),
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightBold,
  },
  externalLinkIcon: {
    marginRight: theme.spacing(1),
  },
});

export default styles;
