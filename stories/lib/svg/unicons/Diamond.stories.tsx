import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Diamond, DiamondPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/Diamond",
  component: Diamond,
} as ComponentMeta<typeof Diamond>;

const Template: ComponentStory<typeof Diamond> = (args: DiamondPropsI) => (
  <x.div display="flex" gap="20px">
    <Diamond {...args} />
    <Diamond {...args} fill="red.500" />
    <Diamond {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
