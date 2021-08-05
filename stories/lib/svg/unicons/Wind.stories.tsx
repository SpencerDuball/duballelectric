import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Wind, WindPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Wind",
  component: Wind,
} as ComponentMeta<typeof Wind>;

const Template: ComponentStory<typeof Wind> = (args: WindPropsI) => (
  <x.div display="flex" gap="20px">
    <Wind {...args} />
    <Wind {...args} fill="red.500" />
    <Wind {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
