import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Sun, SunPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Sun",
  component: Sun,
} as ComponentMeta<typeof Sun>;

const Template: ComponentStory<typeof Sun> = (args: SunPropsI) => (
  <x.div display="flex" gap="20px">
    <Sun {...args} />
    <Sun {...args} fill="red.500" />
    <Sun {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
