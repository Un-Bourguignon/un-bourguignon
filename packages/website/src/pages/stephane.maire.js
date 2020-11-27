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
  },
  header: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(2),
  },
  fontWeightRegular: {
    fontWeight: theme.typography.fontWeightRegular,
  },
  section: {
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
      component="article"
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

      <section id="introduction" className={classes.section}>
        <Typography
          variant="h6"
          component="p"
          className={classes.fontWeightRegular}
        >
          <b>Bonjour,</b>
          <br />
          Je suis développeur Front-End et travaille à distance depuis la
          Saône-et-Loire. Je suis spécialisé dans les environnements React et
          les technologies qui gravitent autour.
          <br />
        </Typography>
      </section>

      <section id="technologies" className={classes.section}>
        <LogoWebTechno />
      </section>

      <Divider light className={classes.divider} />

      <section id="social-networks" className={classes.section}>
        <Typography
          variant="h6"
          component="h3"
          className={classes.fontWeightRegular}
        >
          Sur les réseaux
        </Typography>
        <ButtonNetworkProfils />
      </section>

      <section id="contact-informations" className={classes.section}>
        <Typography
          variant="h6"
          component="h3"
          className={classes.fontWeightRegular}
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
      </section>
    </Container>
  );
};

export default FreelancePage;
