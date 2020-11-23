import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: `${theme.spacing(4)}px 0`,
  },
}));

export default function Header({ children }) {
  const classes = useStyles();
  return <header className={classes.header}>{children}</header>;
}
