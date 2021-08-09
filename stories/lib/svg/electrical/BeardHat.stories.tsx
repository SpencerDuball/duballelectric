import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BeardHat, BeardHatPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/unicons/BeardHat",
  component: BeardHat,
} as ComponentMeta<typeof BeardHat>;

const Template: ComponentStory<typeof BeardHat> = (args: BeardHatPropsI) => (
  <x.div display="flex" gap="20px">
    <BeardHat {...args} />
    <BeardHat {...args} fill="red.500" />
    <BeardHat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
