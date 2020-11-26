import { ContactCard, ContactCardActions } from "@un-bourguignon/components";
import { PERSONAL_DETAILS } from "../../constants";

function ContactCardStephaneMaire(props) {
  return (
    <ContactCard
      {...PERSONAL_DETAILS}
      actions={<ContactCardActions />}
      {...props}
    />
  );
}

export default ContactCardStephaneMaire;
