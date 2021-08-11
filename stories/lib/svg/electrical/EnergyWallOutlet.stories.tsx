import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnergyWallOutlet, EnergyWallOutletPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/EnergyWallOutlet",
  component: EnergyWallOutlet,
} as ComponentMeta<typeof EnergyWallOutlet>;

const Template: ComponentStory<typeof EnergyWallOutlet> = (
  args: EnergyWallOutletPropsI
) => (
  <Box display="flex" gap="20px">
    <EnergyWallOutlet {...args} />
    <EnergyWallOutlet {...args} fill="red.500" />
    <EnergyWallOutlet {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
