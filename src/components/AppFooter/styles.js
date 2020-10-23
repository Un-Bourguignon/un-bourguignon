const styles = (theme) => ({
  AppFooter: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.grey[100],
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export default styles;
