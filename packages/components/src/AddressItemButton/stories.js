import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOnOutlined";
import { MOCK_USER } from "../constants";

import AddressItemButton from "./index";

const MOCK_PROPS = {
  label: "Moroges, France",
  link: MOCK_USER.location.mapLink,
  icon: LocationOnIcon,
};

export default {
  title: "components/AddressItemButton",
  component: AddressItemButton,
  args: MOCK_PROPS,
};

const Template = (args) => <AddressItemButton {...args} />;

export const Default = Template.bind({});
