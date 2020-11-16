const styles = (theme) => ({
  buttonBaseWrapper: {
    marginTop: theme.spacing(1) / 2,

    display: "block",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
  info: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  icons: {
    fontSize: theme.typography.body1.fontSize,
    marginBottom: -2,
  },
});

export default styles;
