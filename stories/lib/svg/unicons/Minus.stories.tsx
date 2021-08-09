import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { Minus, MinusPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/Minus",
  component: Minus,
} as ComponentMeta<typeof Minus>;

const Template: ComponentStory<typeof Minus> = (args: MinusPropsI) => (
  <x.div display="flex" gap="20px">
    <Minus {...args} />
    <Minus {...args} fill="red.500" />
    <Minus {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
