import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Batteries, BatteriesPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/Batteries",
  component: Batteries,
} as ComponentMeta<typeof Batteries>;

const Template: ComponentStory<typeof Batteries> = (args: BatteriesPropsI) => (
  <x.div display="flex" gap="20px">
    <Batteries {...args} />
    <Batteries {...args} fill="red.500" />
    <Batteries {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
