import Link from "next/link";
import HeaderTeleporter from "../components/AppLayout/HeaderTeleporter";

function Freelance() {
  return (
    <div>
      <HeaderTeleporter.Source>
        <Link href="/">Home</Link>
      </HeaderTeleporter.Source>
      <h1>Stéphane Maire</h1>
      <h2>Freelance Développeur Front End</h2>
      <p>React, NextJS, Material UI, REST API, PWA</p>
      <p>Bonjour et bienvenue sur cette petite page de présentation.</p>
      <p>Je m'appelle Stéphane Maire. J'habite à Moroges en Saône et Loire.</p>
      <p>
        Je suis développeur front end et spécialisé sur les technologies React.
        Je développe des applications depuis plus de 10 ans et les technologies
        web sont devenues une passion. L'écosystème autour de React (Material UI
        et Next.js en particulier) constitue pour moi les meilleurs technologies
        du moment et permettent d'avoir un cycle de développement maitrisé
        (conception - réalisation - maintenance) pour aller au plus vite de
        l'idée au produit. Au cours de mes développement, je prête attention aux
        performances ainsi qu'a la maintenance et la scalabilité d'un produit.
      </p>
      <p>
        Je travail à distance depuis Moroges et j'ai accès rapidement à 2 gares
        SNCF pour de venir à Paris, Lyon ou Marseille en peu de temps.
      </p>
      <div>Lien vers LinkedIn et GitHub</div>
      <div>Coordonnées: Mail & Téléphone</div>
    </div>
  );
}

export default Freelance;
