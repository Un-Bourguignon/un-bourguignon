import React, { useState } from "react";

import ContactCard from "./index";
import ContactCardActions from "../ContactCardActions";
import { HOME_ADDRESS_GOOGLE_MAPS } from "../constants";

const MOCK_USER = {
  image: "https://github.com/stephane71.png",
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

export default {
  title: "components/ContactCard",
  component: ContactCard,
  args: MOCK_USER,
  argTypes: {},
};

const Template = (args) => <ContactCard {...args} />;

export const Default = Template.bind({});
Default.storyName = "Horizontal(default)";

export const VerticalCard = Template.bind({});
VerticalCard.args = {
  ...MOCK_USER,
  vertical: true,
};
VerticalCard.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

export const WithActions = Template.bind({});
WithActions.decorators = [
  (Story) => {
    const [vertical, setVertical] = useState(false);
    function handleClick() {
      setVertical(!vertical);
    }

    return (
      <div>
        <div style={{ padding: 16, paddingLeft: 0 }}>
          <button onClick={handleClick}>Toggle direction</button>
        </div>
        <Story
          args={{ ...MOCK_USER, vertical, actions: <ContactCardActions /> }}
        />
      </div>
    );
  },
];

export const WithElevation = Template.bind({});
WithElevation.decorators = [
  (Story) => {
    const [vertical, setVertical] = useState(false);
    const [showActions, setShowActions] = useState(false);

    function handleToggleDirection() {
      setVertical(!vertical);
    }

    function handleToggleActions() {
      setShowActions(!showActions);
    }

    return (
      <div>
        <div style={{ padding: 16, paddingLeft: 0 }}>
          <button onClick={handleToggleDirection}>Toggle direction</button>
          <button onClick={handleToggleActions}>Toggle actions</button>
        </div>
        <Story
          args={{
            ...MOCK_USER,
            vertical,
            actions: showActions ? <ContactCardActions /> : null,
            elevation: 1,
          }}
        />
      </div>
    );
  },
];
