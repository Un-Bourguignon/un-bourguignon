import React from "react";

import { MOCK_USER } from "../constants";
import ContactDetails from "./index";

export default {
  title: "components/ContactDetails",
  component: ContactDetails,
};

const Template = () => (
  <ContactDetails
    email={MOCK_USER.email}
    location={MOCK_USER.location}
    phone={MOCK_USER.phone}
  />
);

export const Default = Template.bind({});
