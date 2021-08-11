import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "@chakra-ui/react";

import { EnergyFlow, EnergyFlowPropsI } from "lib/svg/electrical";

export default {
  title: "lib/svg/electrical/EnergyFlow",
  component: EnergyFlow,
} as ComponentMeta<typeof EnergyFlow>;

const Template: ComponentStory<typeof EnergyFlow> = (
  args: EnergyFlowPropsI
) => (
  <Box display="flex" gridColumnGap="20px">
    <EnergyFlow {...args} />
    <EnergyFlow {...args} fill="red.500" />
    <EnergyFlow {...args} fill="gray.900" />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
