import { makeStyles } from "@material-ui/core/styles";
import { MDXProvider } from "@mdx-js/react";
import Container from "@material-ui/core/Container";
import Freelance from "../markdown/freelance.mdx";
import Components from "../components/mdx/components";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100%",
    paddingBottom: theme.spacing(4),
  },
}));

function Wrapper({ children }) {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.wrapper} component="section">
      {children}
    </Container>
  );
}

const components = {
  ...Components,
  wrapper: Wrapper,
};

const FreelancePage = () => (
  <MDXProvider components={components}>
    <Freelance />
  </MDXProvider>
);

export default FreelancePage;
