import { ContactCard } from "@un-bourguignon/components";
import { GITHUB_PROFIL_PHOTO, HOME_ADDRESS_GOOGLE_MAPS } from "../../constants";

const USER = {
  image: GITHUB_PROFIL_PHOTO,
  imageTitle: "GitHub profil photo",
  title: "Stéphane Maire",
  job: "Développer Front-End",
  location: {
    label: "Moroges, France",
    mapLink: HOME_ADDRESS_GOOGLE_MAPS,
  },
  email: "stephane@un-bourguignon.com",
  phone: "+33 6 62 46 16 43",
};

function ContactCardStephaneMaire(props) {
  return <ContactCard {...USER} {...props} />;
}

export default ContactCardStephaneMaire;
