import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { BeardHardHat, BeardHardHatPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/BeardHardHat",
  component: BeardHardHat,
} as ComponentMeta<typeof BeardHardHat>;

const Template: ComponentStory<typeof BeardHardHat> = (
  args: BeardHardHatPropsI
) => (
  <x.div display="flex" gap="20px">
    <BeardHardHat {...args} />
    <BeardHardHat {...args} fill="red.500" />
    <BeardHardHat {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
