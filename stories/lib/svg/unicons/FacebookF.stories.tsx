import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FacebookF, FacebookFPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/FacebookF",
  component: FacebookF,
} as ComponentMeta<typeof FacebookF>;

const Template: ComponentStory<typeof FacebookF> = (args: FacebookFPropsI) => (
  <x.div display="flex" gap="20px">
    <FacebookF {...args} />
    <FacebookF {...args} fill="red.500" />
    <FacebookF {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
