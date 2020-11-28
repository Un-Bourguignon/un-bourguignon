const styles = (theme) => ({
  AvatarEnhance: {
    display: "flex",
    alignItems: "stretch",
  },
  avatar: {
    width: ({ small }) => theme.spacing(small ? 7 : 10),
    height: ({ small }) => theme.spacing(small ? 7 : 10),
    border: `1px solid ${theme.palette.divider}`,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: theme.spacing(2),
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: ({ small }) =>
        small ? theme.typography.body1.fontSize : theme.typography.subtitle1.fontSize,
  },
  name: {
    textTransform: "uppercase",
    letterSpacing: theme.typography.caption.letterSpacing,
    fontSize: ({ small }) =>
      small ? theme.typography.body1.fontSize : theme.typography.h6.fontSize,
  },
});

export default styles;
