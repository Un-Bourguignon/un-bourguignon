import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { MOCK_USER } from "../constants";
import AvatarEnhance from "./index";

export default {
  title: "components/AvatarEnhance",
  component: AvatarEnhance,
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

const Template = () => <AvatarEnhance img={MOCK_USER.image} externalLinks={externalLinks} />;

export const Default = Template.bind({});
