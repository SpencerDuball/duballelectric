import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer, FooterPropsI } from "lib/ui";

export default {
  title: "lib/ui/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: FooterPropsI) => (
  <Footer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
