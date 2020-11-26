import { makeStyles } from "@material-ui/core/styles";
import { ContactDetails, AvatarEnhance } from "@un-bourguignon/components";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import ButtonNetworkProfils from "../components/ButtonsNetworkProfils";
import { PERSONAL_DETAILS } from "../constants";

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
    marginBottom: theme.spacing(5),
  },
  chapter: {
    marginBottom: theme.spacing(5),
  },
  buttonDLContact: {
    marginTop: theme.spacing(1),
    textTransform: "none",
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
            color="textSecondary"
            className={classes.presentation}
          >
            <span style={{ color: "rgba(0, 0, 0, 0.87)" }}>Bonjour,</span> je
            suis développeur Front-End et travaille à distance depuis la
            Saône-et-Loire. J'ai accès rapidement à Paris, Lyon et Marseille
            pour nous rencontrer.
          </Typography>
        </div>

        <div className={classes.chapter}>
          <Typography variant="h6">Réalisations et Expérience</Typography>
          <ButtonNetworkProfils />
        </div>

        <div className={classes.chapter}>
          <Typography variant="h6">Mon contact</Typography>
          <ContactDetails
            email={PERSONAL_DETAILS.email}
            location={PERSONAL_DETAILS.location}
            phone={PERSONAL_DETAILS.phone}
          />
          <Button
            startIcon={<GetAppIcon />}
            size="large"
            variant="outlined"
            className={classes.buttonDLContact}
          >
            Télécharger mon contact
          </Button>
        </div>
      </main>
    </Container>
  );
};

export default FreelancePage;
