export const AVATAR_DIMENSION = {
  small: 56,
  default: 80,
};

const styles = (theme) => ({
  AvatarEnhance: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: ({ vertical }) => (vertical ? "column" : "row"),
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: ({ small }) =>
      small ? AVATAR_DIMENSION.small : AVATAR_DIMENSION.default,
    height: ({ small }) =>
      small ? AVATAR_DIMENSION.small : AVATAR_DIMENSION.default,
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: ({ vertical }) => (vertical ? 0 : theme.spacing(2)),
    marginTop: ({ vertical }) => (vertical ? theme.spacing(2) : 0),
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: ({ small }) =>
      small
        ? theme.typography.body1.fontSize
        : theme.typography.subtitle1.fontSize,
  },
  name: {
    textTransform: "uppercase",
    letterSpacing: theme.typography.caption.letterSpacing,
    fontSize: ({ small }) =>
      small ? theme.typography.body1.fontSize : theme.typography.h6.fontSize,
  },
});

export default styles;
