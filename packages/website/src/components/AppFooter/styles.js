const styles = (theme) => ({
  AppFooter: {
    backgroundColor: theme.palette.grey[100],
    borderTop: `1px solid ${theme.palette.grey[300]}`,
  },
  container: {
    padding: theme.spacing(3),
  },
  footerAppName: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

export default styles;
