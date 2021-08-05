import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header, HeaderPropsI } from "lib/ui";

export default {
  title: "lib/ui/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderPropsI) => (
  <Header {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
