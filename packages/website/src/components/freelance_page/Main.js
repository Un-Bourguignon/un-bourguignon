import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    padding: `${theme.spacing(3)}px 0`,
  },
}));

export default function Main({ children }) {
  const classes = useStyles();
  return <main className={classes.main}>{children}</main>;
}
