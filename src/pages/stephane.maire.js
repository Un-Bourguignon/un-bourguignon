import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import HeaderTeleporter from "../components/AppLayout/HeaderTeleporter";
import ContactCard from "../components/ContactCard";
import ContactCardActions from "../components/ContactCardActions";

const useStyles = makeStyles((theme) => ({
  Container: {
    height: "100%",
  },
  description: {
    padding: `${theme.spacing(3)}px 0`,
  },
}));

function Freelance() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.Container}>
      <HeaderTeleporter.Source>
        <Link href="/">Home</Link>
      </HeaderTeleporter.Source>

      <Typography variant="h5" component="h1" color="textSecondary">
        Stéphane Maire
      </Typography>
      <Typography variant="h4" component="h2">
        Freelance Développeur Front-End
      </Typography>
      <Typography variant="subtitle1">React, NextJS, Material UI</Typography>

      <div className={classes.description}>
        <Typography variant="body1" gutterBottom>
          Bonjour et bienvenue sur cette page de présentation de mon activité de
          freelance.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Je m'appelle Stéphane Maire. J'habite à Moroges en Saône et Loire.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Je suis développeur front end et spécialisé sur les technologies
          React. Je développe des applications depuis plus de 10 ans et les
          technologies web sont devenues une passion. L'écosystème autour de
          React (Material UI et Next.js en particulier) constitue pour moi les
          meilleurs technologies du moment et permettent d'avoir un cycle de
          développement maitrisé (conception - réalisation - maintenance) pour
          aller au plus vite de l'idée au produit. Au cours de mes
          développement, je prête attention aux performances ainsi qu'a la
          maintenance et la scalabilité d'un produit.
        </Typography>
        <Typography variant="body1" paragraph>
          Je travail à distance depuis Moroges et j'ai accès rapidement à 2
          gares SNCF pour de venir à Paris, Lyon ou Marseille en peu de temps.
        </Typography>
      </div>

      <ContactCard
        email="stephanemaire71@gmail.com"
        image="https://github.com/stephane71.png"
        imageTitle="GitHub photo"
        location="Moroges, France"
        phone="+336 74 56 22 96"
        title="Stéphane Maire . Développeur Front-End"
        actions={<ContactCardActions />}
      />
    </Container>
  );
}

export default Freelance;
