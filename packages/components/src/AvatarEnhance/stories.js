import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Avatar from "@material-ui/core/Avatar";
import { MOCK_USER } from "../constants";
import AvatarEnhance, { AVATAR_DIMENSION } from "./index";

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

const Template = (props) => (
  <AvatarEnhance {...props}>
    <Avatar
      alt={`${props.firstname} ${props.lastname}`}
      src={MOCK_USER.image}
      style={{
        width: props.small ? AVATAR_DIMENSION.small : AVATAR_DIMENSION.default,
        height: props.small ? AVATAR_DIMENSION.small : AVATAR_DIMENSION.default,
        border: `1px solid grey`,
      }}
    />
  </AvatarEnhance>
);

export const Default = Template.bind({});
Default.args = {
  firstname: MOCK_USER.firstname,
  lastname: MOCK_USER.lastname,
  job: MOCK_USER.job,
  bottomComponent: socialNetworkLinks,
};

export const WithoutExternalLinks = Template.bind({});
WithoutExternalLinks.args = {
  firstname: MOCK_USER.firstname,
  lastname: MOCK_USER.lastname,
  job: MOCK_USER.job,
};

export const Small = Template.bind({});
Small.args = {
  firstname: "Freelance",
  lastname: "",
  job: MOCK_USER.job,
  small: true,
};

export const Vertical = Template.bind({});
Vertical.args = {
  firstname: "Freelance",
  lastname: "",
  job: MOCK_USER.job,
  small: true,
  vertical: true,
};

Vertical.decorators = [
  (Story) => {

    const [small, setSmall] = useState(false);
    const [vertical, setVertical] = useState(false);

    function handleToggleVertical() {
      setVertical(!vertical);
    }

    function handleToggleSmall() {
      setSmall(!small);
    }

    return (
      <div>
        <div style={{ padding: 16, paddingLeft: 0 }}>
          <button onClick={handleToggleVertical}>Toggle direction</button>
          <button onClick={handleToggleSmall}>Toggle small</button>
        </div>
        <Story args={{ ...Vertical.args, vertical, small }} />
      </div>
    );
  },
];
