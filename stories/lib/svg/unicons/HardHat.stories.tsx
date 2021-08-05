import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HardHat, HardHatPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HardHat",
  component: HardHat,
} as ComponentMeta<typeof HardHat>;

const Template: ComponentStory<typeof HardHat> = (args: HardHatPropsI) => (
  <x.div display="flex" gap="20px">
    <HardHat {...args} />
    <HardHat {...args} fill="red.500" />
    <HardHat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
