import React from "react";

import AppLayout, { HeaderSource } from "./index";

export default {
  title: "components/AppLayout",
  component: AppLayout,
  decorators: [
    (Story) => {
      return (
        <div style={{ height: "100%" }}>
          <HeaderSource>
            <h1>Header</h1>
          </HeaderSource>
          <Story />
        </div>
      );
    },
  ],
};

const FullHeightContent = (
  <div style={{ backgroundColor: "#2196f3", height: "100%", color: "white" }}>
    Content with height 100%
  </div>
);

const SmallHeightContent = (
  <div style={{ backgroundColor: "#2196f3", height: 100, color: "white" }}>
    Content with height 100px
  </div>
);

const BigHeightContent = (
  <div style={{ backgroundColor: "#2196f3", height: 1000, color: "white" }}>
    Content with height 100px
  </div>
);

const Footer = (
  <div style={{ height: 200, backgroundColor: "#f50057", color: "white" }}>
    Footer
  </div>
);

const Template = (props) => <AppLayout {...props} />;

export const Default = Template.bind({});
Default.args = {
  children: FullHeightContent,
  footer: Footer,
};
Default.storyName = "Full height content";

export const SmallHeight = Template.bind({});
SmallHeight.args = {
  children: SmallHeightContent,
  footer: Footer,
};
SmallHeight.storyName = "Small height content";

export const BigHeight = Template.bind({});
BigHeight.args = {
  children: BigHeightContent,
  footer: Footer,
};
BigHeight.storyName = "Big height content";
