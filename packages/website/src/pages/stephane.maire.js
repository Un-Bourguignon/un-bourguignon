import { makeStyles } from "@material-ui/core/styles";
import { ContactDetails, AvatarEnhance } from "@un-bourguignon/components";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import GetAppIcon from "@material-ui/icons/GetApp";
import ButtonNetworkProfils from "../components/ButtonsNetworkProfils";
import { PERSONAL_DETAILS } from "../constants";
import LogoWebTechno from "../components/LogoWebTechno";

const useStyles = makeStyles((theme) => ({
  FreelancePage: {
    position: "relative",
    paddingBottom: theme.spacing(5),
    height: "100%",
  },
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  main: {
    paddingBottom: theme.spacing(4),
  },
  presentation: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  chapter: {
    marginBottom: theme.spacing(2),
  },
  buttonDLContact: {
    marginTop: theme.spacing(1),
    textTransform: "none",
  },
  divider: {
    marginBottom: theme.spacing(5),
  },
}));

const FreelancePage = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="sm"
      component="section"
      className={classes.FreelancePage}
    >
      <header className={classes.header}>
        <AvatarEnhance
          img={PERSONAL_DETAILS.image}
          externalLinks={[]}
          firstname={PERSONAL_DETAILS.firstname}
          lastname={PERSONAL_DETAILS.lastname}
        />
      </header>

      <main className={classes.main}>
        <div className={classes.chapter}>
          <Typography
            variant="h6"
            component="p"
            className={classes.presentation}
          >
            <b>Bonjour,</b>
            <br />
            Je suis développeur Front-End et travaille à distance depuis la
            Saône-et-Loire. Je suis spécialisé dans les environnements React et
            les technologies qui gravitent autour.
            <br />
          </Typography>
        </div>

        <div className={classes.chapter}>
          <LogoWebTechno />
        </div>

        <Divider light className={classes.divider} />

        <div className={classes.chapter}>
          <Typography
            variant="h6"
            component="p"
            className={classes.presentation}
          >
            Sur les réseaux
          </Typography>
          <ButtonNetworkProfils />
        </div>

        <div className={classes.chapter}>
          <Typography
            variant="h6"
            component="p"
            className={classes.presentation}
          >
            Contactez moi
          </Typography>
          <Paper variant="outlined">
            <ContactDetails
              email={PERSONAL_DETAILS.email}
              location={PERSONAL_DETAILS.location}
              phone={PERSONAL_DETAILS.phone}
            />
          </Paper>
          <Button
            startIcon={<GetAppIcon />}
            size="large"
            variant="outlined"
            className={classes.buttonDLContact}
            href={PERSONAL_DETAILS.vcf}
          >
            Télécharger mon contact
          </Button>
        </div>
      </main>
    </Container>
  );
};

export default FreelancePage;
