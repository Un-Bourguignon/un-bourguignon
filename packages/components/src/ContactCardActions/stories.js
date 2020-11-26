import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { MOCK_USER } from "../constants";
import ContactCardActions from "./index";

export default {
  title: "components/ContactCardActions",
  component: ContactCardActions,
};

const externalLinks = [
  {
    icon: LinkedInIcon,
    href: MOCK_USER.LinkedIn,
  },
  {
    icon: GitHubIcon,
    href: MOCK_USER.GitHub,
  },
];

const Template = () => (
  <ContactCardActions externalLinks={externalLinks} vcf={MOCK_USER.vcf} />
);

export const Default = Template.bind({});
