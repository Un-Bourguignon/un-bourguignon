import Link from "next/link";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { AvatarEnhance } from "@un-bourguignon/components";
import { PERSONAL_DETAILS } from "../constants";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  Home: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    padding: `0 ${theme.spacing(2)}px`,
  },
  headerSmallFontSize: {
    fontSize: theme.typography.h3.fontSize,
  },
  subHeaderSmallFontSize: {
    fontSize: theme.typography.h6.fontSize,
  },
  pages: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: theme.spacing(7),
  },
  marginBottom: {
    marginBottom: theme.spacing(3),
  },
  buttonPage: {
    justifyContent: "flex-start",
    padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.Home}>
      <Head>
        <title>Un Bourguignon: Expertise développement web</title>
        <meta
          name="description"
          content="La société Un Bourguignon fournit une expertise de développement web front-end et technologies React"
        />
      </Head>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          component="h1"
          className={matches ? classes.headerSmallFontSize : ""}
          paragraph
        >
          Un Bourguignon
        </Typography>
        <Typography
          variant="h4"
          component="h2"
          className={matches ? classes.subHeaderSmallFontSize : ""}
          paragraph
          color="textSecondary"
        >
          Expertise développement web front-end et technologies React
        </Typography>

        <div className={classes.pages}>
          <Link href="/stephane.maire" passHref>
            <ButtonBase className={classes.buttonPage} component="a">
              <AvatarEnhance
                img={PERSONAL_DETAILS.image}
                firstname="Freelance"
                lastname=""
                job={PERSONAL_DETAILS.job}
                small
                asParagraph
              />
            </ButtonBase>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Home;
