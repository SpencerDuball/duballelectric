import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnergyPlug, EnergyPlugPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/EnergyPlug",
  component: EnergyPlug,
} as ComponentMeta<typeof EnergyPlug>;

const Template: ComponentStory<typeof EnergyPlug> = (
  args: EnergyPlugPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnergyPlug {...args} />
    <EnergyPlug {...args} fill="red.500" />
    <EnergyPlug {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
