import React from "react";
import IconButton from "@material-ui/core/IconButton";
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
const socialNetworkLinks = (
  <div>
    {externalLinks.map(({ icon: Icon, href }, i) => (
      <IconButton
        key={href}
        edge={i === 0 ? "start" : false}
        size="small"
        style={{ marginRight: 8 }}
        href={href}
      >
        <Icon fontSize="small" />
      </IconButton>
    ))}
  </div>
);

const Template = (props) => <AvatarEnhance img={MOCK_USER.image} {...props} />;

export const Default = Template.bind({});
Default.args = {
  firstname: MOCK_USER.firstname,
  lastname: MOCK_USER.lastname,
  bottomComponent: socialNetworkLinks,
};

export const WithoutExternalLinks = Template.bind({});
WithoutExternalLinks.args = {
  firstname: MOCK_USER.firstname,
  lastname: MOCK_USER.lastname,
};
