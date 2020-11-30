import Link from "next/link";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
  headerFontSize: {
    fontSize: theme.typography.h3.fontSize,
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
        <title>Un Bourguignon: Développement Web</title>
        <meta
          name="description"
          content="Expertise développement web front-end et technologies React"
        />
      </Head>
      <div className={classes.content}>
        <Typography
          variant="h2"
          component="h1"
          className={matches ? classes.headerFontSize : ""}
          paragraph
        >
          Un Bourguignon
        </Typography>

        <div className={classes.pages}>
          <ButtonBase className={classes.buttonPage}>
            <Typography variant="h6" component="p" color="textSecondary">
              🛠️ Edition logiciel
            </Typography>
          </ButtonBase>

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
      </div>
    </div>
  );
}

export default Home;
