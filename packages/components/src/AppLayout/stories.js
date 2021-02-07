import React from "react";

import AppLayout  from "./index";

export default {
  title: "components/AppLayout",
  component: AppLayout,
  decorators: [
    (Story) => {
      return (
        <div style={{ height: "100%" }}>
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
    Content with height 1000px
  </div>
);

const Footer = (
  <div style={{ height: 200, backgroundColor: "#f50057", color: "white" }}>
    Footer: height 200px
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
