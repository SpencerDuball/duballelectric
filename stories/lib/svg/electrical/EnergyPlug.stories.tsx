import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { EnergyPlug, EnergyPlugPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/EnergyPlug",
  component: EnergyPlug,
} as ComponentMeta<typeof EnergyPlug>;

const Template: ComponentStory<typeof EnergyPlug> = (
  args: EnergyPlugPropsI
) => (
  <x.div display="flex" gap="20px">
    <EnergyPlug {...args} />
    <EnergyPlug {...args} fill="red.500" />
    <EnergyPlug {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
