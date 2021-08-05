import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Check, CheckPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Check",
  component: Check,
} as ComponentMeta<typeof Check>;

const Template: ComponentStory<typeof Check> = (args: CheckPropsI) => (
  <x.div display="flex" gap="20px">
    <Check {...args} />
    <Check {...args} fill="red.500" />
    <Check {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
